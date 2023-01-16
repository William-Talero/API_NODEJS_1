import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

// Create user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Get specific user
router.get('/users/:id', userController.getSpecificUser);

// Update specific user
router.put('/users/:id', userController.updateSpecificUser);

// Delete specific user
router.delete('/users/:id', userController.deleteSpecificUser);

export default router;
