// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()
const mentorRoutes = require("./routes/mentors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'https://votre-site.netlify.app', // Prod
    'http://localhost:5173'          // Dev
  ]
}));
app.use(express.json());

// Connexion MongoDB
const mongoURI = process.env.MONGODB_URL || "mongodb://localhost:27017/itcg"; // Fallback local

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connexion réussie à MongoDB");
    // Démarrer le serveur après connexion à MongoDB
    app.listen(PORT, () =>
      console.log(`🚀 Serveur démarré sur le port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Erreur de connexion MongoDB :", err.message);
    process.exit(1); // Arrête l'application si la connexion échoue
  });

// Routes
const startupRoutes = require("./routes/startups");
app.use("/api/startups", startupRoutes);
app.use("/api/mentors", mentorRoutes);
const organizationRoutes = require("./routes/organizations");
app.use("/api/organizations", organizationRoutes);
const investorRoutes = require("./routes/investors");
app.use("/api/investors", investorRoutes);
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);

// Ajoutez cette route AVANT les autres routes
app.get("/", (req, res) => {
  res.send("✨ ITCG Backend est en ligne !");
});

// ... (le reste de votre code existant)