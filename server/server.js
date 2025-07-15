
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import appointmentRoutes from './routes/appointmentRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB();


app.use('/api/appointments', appointmentRoutes);


app.get('/', (req, res) => {
  res.send('Hospital API is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
