import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

// @desc: Fetch a list of all products from the DB
// @route: GET /api/products
// @access: public
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({});
    // res.status(401);
    // throw new Error('Not Authorized');
    res.json(products);
  })
)

// @desc: Fetch one specific product from the DB
// @route: GET /api/products/:id
// @access: public
router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product)
  }
  else {
    res.status(404);
    throw new Error('Product not found');
  }
}))

export default router;