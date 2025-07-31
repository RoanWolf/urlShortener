import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/v1/api', userRoutes);

export default app;