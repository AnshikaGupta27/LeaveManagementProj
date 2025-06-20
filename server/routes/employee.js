import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { addEmployee } from '../controllers/employeeController.js';

const router = express.Router();

router.post('/add', authMiddleware, addEmployee);

export default router;