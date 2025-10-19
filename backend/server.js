import express from "express";
import gpio from "onoff";
//const { playRaveMusic } = require('./spotify');
import { turnOnLights } from "./gpio.js";
const app = express();
const port = 3001;
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildPrompt } from "./systemPrompt.js";
import dotenv from "dotenv";
import cors from "cors";

app.use(
  cors({
    origin: ["http://localhost:5173"], // Vite dev server
    methods: ["GET", "POST"],
  })
);
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Middleware to parse JSON
app.use(express.json());

// Endpoint to handle the string input from frontend
app.post("/input", async (req, res) => {
  const { input } = req.body; // The input string from the frontend
  console.log("🟢 Received /input request:", input);
  // Hardcoded check for "rave"
  if (input.toLowerCase().includes("rave")) {
    console.log("Activating rave mode!");
    try {
      // Trigger the rave lights and music
      turnOnLights();
      // await playRaveMusic();
      return res.json({ response: "Rave mode activated: Lights and music on!" });
    } catch (err) {
      console.error("Error handling rave mode:", err);
      return res.status(500).send("Error activating rave mode");
    }
  } else {
    // Pass the input to the LLM for more complex processing
    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: buildPrompt(input) }] }],
      });
      const text = result.response.text();
      res.json({ response: text });
      console.log("🟢 Gemini response:", text);
    } catch (err) {
      console.error("Gemini API error:", err.response?.data || err.message || err);
      res.status(500).json({ error: "Gemini query failed" });
    }
  }
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
