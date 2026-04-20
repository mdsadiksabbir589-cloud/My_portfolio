const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// Your Projects Data
const projects = [
  {
    id: 1,
    title: "AI-Powered Motorcycle Rider Safety Analysis System",
    description: "A computer vision based system that analyzes rider behavior and detects risky actions in real-time using AI.",
  },
  {
    id: 2,
    title: "Digital Image Processing Suite for Medical Analysis",
    description: "A system that processes and enhances medical images using filtering, segmentation, and feature extraction techniques.",
  },
  {
    id: 3,
    title: "Machine Learning-Based Cancer Diagnosis Predictor",
    description: "A predictive model that classifies cancer diagnosis using supervised machine learning algorithms.",
  },
  {
    id: 4,
    title: "Autonomous AI Agent for Task Automation",
    description: "An intelligent AI agent capable of decision-making and automating real-world tasks using modern AI pipelines.",
  }
];

// API Route
app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});