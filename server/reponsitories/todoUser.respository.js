const { connection } = require('./../config/database.config');

// tìm kiếm tất cả user
let findAllUser = () => {
    let query = 'SELECT * FROM user'
    console.log(query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
};

// tìm user theo username
let findOne = (user) => {
    let query = "SELECT * FROM user WHERE name='"+user.name+"'";
    return new Promise((resolve, reject)=>{
        connection.query(query,(err, result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
};

// tìm user thông qua id
let findById = (id) => {
    let query = "SELECT * FROM user WHERE id="+id;
    return new Promise((resolve, reject)=>{
        connection.query(query,(err, result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
};

// xóa user thông qua user id
let deleteUserByID = (id) => {
    let query = 'DELETE FROM user WHERE id ='+ id;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
};

// Tạo mới/ đăng ký một user
let createUser = (user) => {
    let query = `INSERT INTO user (name,email,age,password, phone, gender, role) VALUES ('${user.name}','${user.email}','${user.age}','${user.password}','${user.phone}','${user.gender}','${user.role}')`;
    console.log("1", query)
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
};

// Đăng nhập
let loginUser = (name) => {
    let query = "SELECT * FROM user WHERE name='" + name + "'";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                reject(err)
            };
            resolve(result)
        })
    })
};

// chỉnh sửa/ cập nhật thông tin user thông qua id
let updateUser = (id, user)=>{
    let query =`UPDATE user SET name='${user.name}', 
    name='${user.name}', 
    email='${user.email}', 
    phone='${user.phone}', 
    gender='${user.gender}',
    isAdmin='${user.isAdmin}' 
    WHERE id = ${id}` 
    return new Promise ((resovle, reject)=>{
        connection.query(query, (err, result)=>{
            if(err){
                reject(err)
            }
            resovle(result)
        })
    })
}

module.exports = { findAllUser, deleteUserByID, createUser, loginUser,findOne, findById,updateUser }