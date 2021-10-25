import express from "express";
import connectDB from "./config/db.js"
import dotenv from "dotenv";
import colors from "colors";
import productRoutes from "../backend/routes/productRoutes.js"

const app = express();

dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send("Got home route (server.js), API is running...")
})

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`.yellow.bold));