import express from 'express';
import {
  readPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  commentPost,
  editCommentPost,
  deleteCommentPost,
} from '../controllers/postController.js';
import multer from 'multer';
const upload = multer();
const router = express.Router();

router.get('/', readPost);
router.post('/', upload.single('file'), createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/like-post/:id', likePost);
router.patch('/unlike-post/:id', unlikePost);

// comments
router.patch('/comment-post/:id', commentPost);
router.patch('/edit-comment-post/:id', editCommentPost);
router.patch('/delete-comment-post/:id', deleteCommentPost);

export default router;
