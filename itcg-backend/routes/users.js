const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// ➕ Enregistrement d’un nouvel utilisateur
router.post("/register", async (req, res) => {
  try {
    const { email, password, role, linkedStartup } = req.body;

    // Vérifier si l’email existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email déjà utilisé." });

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      role,
      linkedStartup
    });

    const saved = await user.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 📥 Obtenir tous les utilisateurs
router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("linkedStartup");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
