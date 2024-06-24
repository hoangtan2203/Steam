const { getAllCart, addtoCart, deleteFromCart, totalPrice } = require('../controllers/cart.controller');
const {authenTokken} = require('./../midleware/auth.midleware')

const express = require('express');
const router = express.Router();

router.get('/carts', getAllCart);
router.post('/addcart',addtoCart);
router.delete('/deletecart/:id',deleteFromCart);
router.post('/sumprice',totalPrice);

module.exports = router;