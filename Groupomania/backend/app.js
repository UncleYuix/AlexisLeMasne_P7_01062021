const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const path = require("path");

// Utilisation du package helmet pour sécuriser les données de mon header - c'est un middleweare très complet pour la sécurité
app.use(helmet());

// Configuration pour éviter les erreurs CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "localhost");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Bodyparseur étant inclus dans la nouvelle version express maintenant, je n'ai pas besoin de l'utiliser
app.use(bodyParser.json());

// Permet de charger les images dans le dossier 'images'
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/posts", postRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
