import express from 'express';
import { signUp, signIn, logout } from '../controllers/authController.js';
import {
  getAllUsers,
  userInfo,
  updateUser,
  deleteUser,
  follow,
  unfollow,
} from '../controllers/userController.js';
import uploadProfil from '../controllers/uploadController.js';
import multer from 'multer';

const upload = multer();
const router = express.Router();

// auth
router.post('/register', signUp);
router.post('/login', signIn);
router.get('/logout', logout);

// user DB
router.get('/', getAllUsers);
router.get('/:id', userInfo);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.patch('/follow/:id', follow);
router.patch('/unfollow/:id', unfollow);

// upload
router.post('/upload', upload.single('file'), uploadProfil);

export default router;
