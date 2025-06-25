const express = require("express");
const router = express.Router();
const Organization = require("../models/Organization");

// ➕ Créer une organisation
router.post("/", async (req, res) => {
  try {
    const organization = new Organization(req.body);
    const saved = await organization.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 📥 Obtenir toutes les organisations
// 📥 Obtenir toutes les organisations avec filtrage par type
router.get("/", async (req, res) => {
  try {
    const { type } = req.query;
    const filter = type ? { type } : {};
    
    const organizations = await Organization.find(filter).populate("associatedStartups");
    res.json(organizations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
