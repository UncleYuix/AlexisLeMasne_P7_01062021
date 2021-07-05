const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth')
const bouncer = require('express-bouncer')(10000, 900000, 2); // Protection contre les attaques Bruteforce


// mon router à donc toutes les routes pour crée et loguer un utilisateur
// le profil par le token pour la sécurité
// les routes pour modifier (put) ou delete pour supprimer


router.post('/signup', userCtrl.signup); // IS OK
router.post('/login', bouncer.block, userCtrl.login); // IS OK
router.get('/profile/:token', auth, userCtrl.profile); // IS OK
router.get('/profile/id/:id', auth, userCtrl.profileComment); // IS OK
router.delete('/profile/:id', auth, userCtrl.deleteUser); // IS OK
router.put('/profile/:id', auth, userCtrl.modifyUser);// IS OK

module.exports = router;