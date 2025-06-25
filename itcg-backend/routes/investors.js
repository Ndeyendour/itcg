const express = require("express");
const router = express.Router();
const Investor = require("../models/Investor");

// ➕ Ajouter un investisseur
router.post("/", async (req, res) => {
  try {
    const investor = new Investor(req.body);
    const saved = await investor.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 📥 Obtenir tous les investisseurs
router.get("/", async (req, res) => {
  try {
    const investors = await Investor.find().populate("investedStartups");
    res.json(investors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
