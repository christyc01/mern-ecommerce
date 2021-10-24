import express from "express";
import products from "./data/products.js";
import connectDB from "./config/db.js"
import dotenv from "dotenv";

const app = express();

dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send("Got home route")
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
 const product = products.find(product => product._id === req.params.id)
 res.json(product)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`));