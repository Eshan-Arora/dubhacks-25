import express from "express";
import gpio from "onoff";
//const { playRaveMusic } = require('./spotify');
import { turnOnLights } from "./gpio.js";
const app = express();
const port = 3001;
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildPrompt } from "./systemPrompt.js";
import dotenv from "dotenv";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Middleware to parse JSON
app.use(express.json());

// Endpoint to handle the string input from frontend
app.post("/input", async (req, res) => {
  const { input } = req.body; // The input string from the frontend

  // Hardcoded check for "rave"
  if (input.toLowerCase().includes("rave")) {
    try {
      // Trigger the rave lights and music
      turnOnLights(); // You'll want to define this function in gpio.js to turn on the lights in a bouncing pattern
      await playRaveMusic(); // Calls Spotify API to play rave music on the computer speaker
      return res.send("Rave mode activated: Lights and music on!");
    } catch (err) {
      console.error("Error handling rave mode:", err);
      return res.status(500).send("Error activating rave mode");
    }
  }

  // Pass the input to the LLM for more complex processing
  console.log("Gemini key:", process.env.GEMINI_API_KEY);
  try {
    const result = await model.generateContent(buildPrompt(input));
    const text = result.response.text();
    res.json({ response: text });
  } catch (err) {
    console.error("Gemini API error:", err.response?.data || err.message || err);
    res.status(500).json({ error: "Gemini query failed" });
  }
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
