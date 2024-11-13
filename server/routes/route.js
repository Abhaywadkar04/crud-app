import express from 'express';
import { addUser, getAllUser, getUserById, editUser, deleteUserById } from '../controller/userController.js';

const router = express.Router();

router.route('/add').post(addUser);

router.route('/all').get(getAllUser);

router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUserById);

export default router;






