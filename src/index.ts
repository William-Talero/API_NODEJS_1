import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute';
import apiTestRoutes from './routes/apiTestRoute';
import tokenRoutes from './routes/tokenRoute';

const app = express();
const port = process.env.API_PORT !== undefined ? process.env.API_PORT : 9000;
dotenv.config();

// middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', apiTestRoutes);
app.use('/api', tokenRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my API :)');
});

// Connect to MongoDB
mongoose
  .set('strictQuery', false)
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB Atlas.');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB Atlas.');
    console.error(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
