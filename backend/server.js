const express = require('express');
const { Gpio } = require('onoff');
//const { playRaveMusic } = require('./spotify');
const { handleLLM } = require('./llm');
const { turnOnLights, turnOffLights } = require('./gpio');
const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to handle the string input from frontend
app.post('/input', async (req, res) => {
  const { input } = req.body; // The input string from the frontend

  // Hardcoded check for "rave"
  if (input.toLowerCase().includes('rave')) {
    try {
      // Trigger the rave lights and music
      turnOnLights(); // You'll want to define this function in gpio.js to turn on the lights in a bouncing pattern
      await playRaveMusic(); // Calls Spotify API to play rave music on the computer speaker
      return res.send('Rave mode activated: Lights and music on!');
    } catch (err) {
      console.error('Error handling rave mode:', err);
      return res.status(500).send('Error activating rave mode');
    }
  }

  // Pass the input to the LLM for more complex processing
  try {
    const action = await handleLLM(input);
    
    if (action === 'turnOn') {
      turnOnLights();
      res.send('Lights turned on');
    } else if (action === 'turnOff') {
      turnOffLights();
      res.send('Lights turned off');
    } else {
      res.send('No action taken');
    }
  } catch (err) {
    console.error('Error processing LLM input:', err);
    res.status(500).send('Error processing input');
  }
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
