const { getAll, deleteTodoByID,ceateNewProduct } = require('../controllers/todo.controller');
const express = require('express');
const {upload}  = require('./../config/uploadFile/uploadFile.config')



const router = express.Router();

// const {authenTokken }= require('./../midleware/auth.midleware')

// lấy data product
router.get('/task', getAll);

// tạo mới sản phẩm
router.post('/create-new-product',upload.single('file'),ceateNewProduct)




module.exports = router;