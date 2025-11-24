const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // adapte le chemin si besoin
const JWT_SECRET = process.env.JWT_SECRET || 'votre_clé_secrète'; 

// ➕ Enregistrement d’un nouvel utilisateur
router.post('/register', async (req, res) => {
  try {
    const { email, password, role, linkedStartup, profile } = req.body;

    const allowedRoles = ['user', 'startup'];
    const userRole = role && allowedRoles.includes(role) ? role : 'user';

    // Vérifie si l'email est déjà utilisé
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Création du nouvel utilisateur
    const newUser = new User({
      email,
      password: hashedPassword,
      role: userRole,
      linkedStartup,
      profile // important : inclut prénom et nom si fournis
    });

    await newUser.save();

    // Création du token JWT
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      token,
      userId: newUser._id,
      role: newUser.role,
      message: "Compte créé avec succès"
    });
  } catch (error) {
    console.error("Erreur dans /register :", error);
    res.status(500).json({ message: 'Erreur lors de la création du compte' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérification des champs
    if (!email || !password) {
      return res.status(400).json({ message: 'Email et mot de passe requis' });
    }

    // Recherche de l'utilisateur
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe invalide' });
    }

    // Comparaison du mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Email ou mot de passe invalide' });
    }

    // Génération du token JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Réponse au frontend
    res.status(200).json({
      token,
      userId: user._id,
      role: user.role,
      message: 'Connexion réussie'
    });
  } catch (error) {
    console.error('Erreur dans /login :', error);
    res.status(500).json({ message: 'Erreur serveur lors de la connexion' });
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
