import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import employeeRouter from './routes/employee.js';
import connectToDatabase from './db/db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const startServer = async () => {
  try {
    await connectToDatabase();

    const app = express();

    app.use(cors());
    app.use(express.json());

    // Serve static files from public/uploads
    app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

    app.use('/api/auth', authRouter);
    app.use('/api/employee', employeeRouter);

    app.listen(process.env.PORT, () => {
      console.log(`Server is Running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
  }
};

startServer();
