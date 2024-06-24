const { findAllUser, deleteUserByID, findById, updateUser } = require('./../reponsitories/todoUser.respository');


// lấy danh sách user
const getAllUser = async (req, res) => {
    try {   
        const users = await findAllUser()
         res.status(200).json({
                    data: users,
                })
    } catch (err) {
        res.status(401)
    }};

// tìm user thông qua id
const findUserById = async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(401)
        res.send("không tìm thấy user")
    }
    await findById(id)
    res.status(200).json({
        data: id[0]
    })
}

// xóa user thông qua id
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400)
            res.send('ID not found')
        }
        await findById(id)
        await deleteUserByID(id)
        res.status(200).json({
            message: "xóa thành công"
        })
    } catch (error) {
        res.status(404)
        res.send("xóa thất bại")
    }
}

// cập nhật, chỉnh sửa user
const userUpdate = async (req, res) => {
    try {
        const userReq = req.body;
        const userId = req.params.id;
        if (!userId) {
            return res.status(400).json('id not found');
        }
        const indexUser = await findById(userId);
        const userUpdate = { ...indexUser, ...userReq }
        await updateUser(userId, userUpdate)
        res.status(200).send('user is updated')
    } catch (error) {
        res.status(400).send('update fail')
    }
}




module.exports = { getAllUser, deleteUser, findUserById, userUpdate }