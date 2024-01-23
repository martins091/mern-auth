import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { test } from '../controllers/user.controller.js';
import { updateUser } from '../controllers/user.controller.js';
import { deleteUser } from '../controllers/user.controller.js';


const router = express.Router();

router.get('/', test)
router.post("/update/:id", verifyToken, updateUser)
router.delete("/delete/:id", verifyToken, deleteUser)


export default router;