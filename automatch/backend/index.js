import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import autoRouter from './routes/car.routes.js';

dotenv.config();  

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());  
app.use(express.json());  

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const CarSchema = new mongoose.Schema({
  id: Number,
  marque: {
    nom: String,
    logo: String,
  },
  models: Array,
});

const Car = mongoose.model("Car", CarSchema);
export default Car;

app.use("/auto", autoRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
