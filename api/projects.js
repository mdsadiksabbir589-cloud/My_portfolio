export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "AI-Powered Motorcycle Rider Safety Analysis System",
      description: "Computer vision system to detect risky rider behavior in real-time.",
    },
    {
      id: 2,
      title: "Digital Image Processing Suite for Medical Analysis",
      description: "Image enhancement, segmentation, and feature extraction system.",
    },
    {
      id: 3,
      title: "Machine Learning-Based Cancer Diagnosis Predictor",
      description: "Supervised ML model for cancer classification.",
    },
    {
      id: 4,
      title: "Autonomous AI Agent for Task Automation",
      description: "AI agent capable of decision-making and automation.",
    }
  ]);
}