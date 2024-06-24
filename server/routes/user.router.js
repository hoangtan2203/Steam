const { getAllUser, deleteUser, findUserById,userUpdate } = require('../controllers/todoUser.controller');
const {userLogin, ceateNewUser, logOutUser} = require('../controllers/auth.controller');
const {middleWareAuth} = require('./../midleware/auth.midleware')


const express = require('express');
const router = express.Router();


//login
router.post('/login', userLogin);

// log out

router.post('/logout',logOutUser)

//lấy data user
router.get('/users',middleWareAuth.middlewareChekcToken,getAllUser);

// tìm kiếm user qua id
router.get("/finduser/:id",findUserById)

// xóa user quyền admin
router.delete('/:id', deleteUser);

// tạo mới user
    // - quyền admin
router.post('/admin/createU',ceateNewUser)
    // - dành cho user
router.post('/register', ceateNewUser);

// update user quyền admin
router.put('/update/:id',userUpdate);



module.exports = router;