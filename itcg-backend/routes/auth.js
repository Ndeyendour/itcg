const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../config');
const authMiddleware = require('../middleware/authMiddleware');

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, role, linkedStartup } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Créer un nouvel utilisateur
    const newUser = new User({
      email,
      password: hashedPassword,
      role: role || 'user',
      linkedStartup
    });

    await newUser.save();

    // Créer un token JWT
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ token, userId: newUser._id, role: newUser.role });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du compte' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    // Créer un token JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, userId: user._id, role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
});
// Exemple de route protégée
router.get('/dashboard', authMiddleware, (req, res) => {
  // Accès aux infos utilisateur via req.userId et req.userRole
  res.json({ message: `Bienvenue ${req.userRole}` });
})
module.exports = router;