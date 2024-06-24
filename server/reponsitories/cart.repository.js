const {connection} = require('./../config/database.config');


let findAllCart = () => {
    const query = "SELECT * FROM cart"
    return new Promise((resolve, reject)=>{
        connection.query(query,(err, result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
};

let addCart = (cart) => {
    const query = `INSERT INTO cart (userID, total, product) VALUES ('${cart.userID}','${cart.product}','${cart.total}')`;
    return new Promise((resolve, reject)=>{
        connection.query(query,(err, result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    }) 
}

let deleteCart = (id) => {
    const query = "DELETE FROM cart WHERE id="+id;
    return new Promise((resolve, reject)=>{
        connection.query(query,(err, result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

let sumPriceCart = (price) => {
    const query = "SELECT SUM(price) AS sumprice FROM cart";
    return new Promise((resolve, reject)=>{
        connection.query(query,(err, result, message)=>{
            if(err){
                reject(err)
            }
            resolve(result,{message:price})
        })
    })
}

module.exports = {findAllCart,addCart, deleteCart, sumPriceCart}