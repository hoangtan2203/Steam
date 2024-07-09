const {findAll, deleteById,createProduct} = require('./../reponsitories/todo.repository');
const {upload} = require('./../config/uploadFile/uploadFile.config');
const multer = require('multer');

const getAll = async(req,res)=>{
    try {
        const productData = await findAll();
        res.status(200).json({
        productData
    })
    } catch (error) {
        res.status(404).json({
            message:'fail'
        })
    }
}

const deleteTodoByID = async(req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(400)
        res.send('ID not found')
    }
    await deleteById(id)
}

const ceateNewProduct = async (req, res) => {

    try {
        const img = req.file.filename;
        const { name, price, decription, system } = req.body;
        const gameData = {...req.body,img};
        // Phần ntên game
            const newProduct = await createProduct(gameData)
            res.status(200).json({
                message: "Success!",
                data: newProduct
            })
        
    } catch (err) {
        res.status(422).json({
            errors: err
        })
    }
};


module.exports={getAll, deleteTodoByID, ceateNewProduct}