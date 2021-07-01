const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config.js');

const postCtrl = require('../controllers/post');

router.get('/', auth, postCtrl.getAllPosts); 
router.get('/:id', auth, postCtrl.getOnePost); 
router.get('/:userId/posts', auth, postCtrl.myPosts); 
router.post('/', auth, multer, postCtrl.createPost); 
router.put('/:id', auth, multer, postCtrl.modifyPost); 
router.delete('/:id', auth, postCtrl.deletePost); 

router.post('/:id/like', auth, postCtrl.likePost); 
router.get('/likedislike/:id', auth, postCtrl.getLikesDislikes);

router.post('/:id/comments', auth, postCtrl.createComment); 
router.put('/:id/comments/:idcomment', auth, postCtrl.modifyComment); 
router.delete('/:id/comments/:idcomment', auth, postCtrl.deleteComment); 


module.exports = router;