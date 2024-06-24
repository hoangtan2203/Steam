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
    let condition = {
        name: "",
        price: "",
        decription: "",
        img: "",
        system: "",
    };
    try {
        upload(req,res,function(err){
            if(err instanceof multer.MulterError){
                res.send(err)
            }else if(err){
                res.send(err)
            }
            console.log(req.file)
        })

        // khởi tạo các biến tương ứng với giữ liệu từ client gửi lên.
        const { name, price, decription, system } = req.body;
        console.log('this is body', req.body)
        console.log('this is file',req.file);

        // validation
        const isValidate = false;
        // Phần ntên game
        if (!name) {
            condition.name = 'yêu cầu nhập tên sản phẩm';
            isValidate = true;
        }
        // Phần giá bán
        if (!price) {
            condition.price = 'yêu cầu nhập giá tiền';
            isValidate = true
        }
        // Phần Password
        if (!decription) {
            condition.decription = 'yêu cầu nhập nội dung game';
            isValidate = true;
        }
        // phần hình ảnh
        // if (!img ) {
        //     condition.img = "yêu cầu cung cấp hình ảnh";
        //     isValidate = true
        // }
        // phần hệ thống
        if (!system) {
            condition.system = "yêu cầu cung cấp cấu hình game";
            isValidate = true
        }
        // sau khi đã thỏa mãn các điều kiện cần, tiến hành Insert giữ liệu user.
        if (isValidate) {
            res.status(400).send("fail")
        } else {
            const newProduct = await createProduct(req.body)
            res.status(200).json({
                message: "Success!",
                data: newProduct
            })
        }
    } catch (err) {
        res.status(422).json({
            errors: condition
        })
    }
};


module.exports={getAll, deleteTodoByID, ceateNewProduct}