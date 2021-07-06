const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");
const bouncer = require("express-bouncer")(10000, 900000, 2); // Protection contre les attaques Bruteforce

// mon router à donc toutes les routes pour crée et loguer un utilisateur
// le profil par le token pour la sécurité
// les routes pour modifier (put) ou delete pour supprimer

// Pour créer un compte et se register j'utilise ses routes :
router.post("/signup", userCtrl.signup);
router.post("/login", bouncer.block, userCtrl.login);

// permet d'avoir le token de l'utilisateur
router.get("/profile/:token", auth, userCtrl.profile);

//permet d'avoir l'id de l'users
router.get("/profile/id/:id", auth, userCtrl.profileComment);

// delete l'user
router.delete("/profile/:id", auth, userCtrl.deleteUser);

// modif de l'user
router.put("/profile/:id", auth, userCtrl.modifyUser);

module.exports = router;
