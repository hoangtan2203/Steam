const {connection} = require('./../config/database.config')

let findAll = () => {
    let query = "SELECT * FROM game"
    console.log(query);
    return new Promise((resolve, reject)=>{
        connection.query(query,(err, result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}
let createProduct = (product) => {
    let query = `INSERT INTO game (name, price, decription, img, system) VALUES ('${product.name}','${product.price}','${product.decription}','${product.img}','${product.system}')`;
    console.log(query);
    return new Promise((resolve, reject)=>{
        connection.query(query,(err, result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}
let deleteById = (id) => {
    let query = "DELETE FROM game WHERE id="+id;
    return new Promise((resolve, reject)=>{
        connection.query(query,(err, result)=>{ 
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

module.exports = {findAll, deleteById, createProduct}