const express = require("express");
const router = express.Router();
const Mentor = require("../models/Mentor");

// ➕ Ajouter un mentor
router.post("/", async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    const saved = await mentor.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 📥 Obtenir tous les mentors
router.get("/", async (req, res) => {
  try {
    const mentors = await Mentor.find().populate("associatedStartups");
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
