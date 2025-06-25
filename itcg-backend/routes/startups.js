const express = require("express");
const router = express.Router();
const Startup = require("../models/Startup");

// GET all startups
router.get("/", async (req, res) => {
  try {
    const startups = await Startup.find();
    res.json(startups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new startup
router.post("/", async (req, res) => {
  try {
    const newStartup = new Startup(req.body);
    const savedStartup = await newStartup.save();
    res.status(201).json(savedStartup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
