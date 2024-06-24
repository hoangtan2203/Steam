const { findAllCart, addCart, deleteCart, sumPriceCart } = require('./../reponsitories/cart.repository');

const getAllCart = async (req, res) => {
    try {
        const cart = await findAllCart();
        res.status(200).json({ cart })
        res.send('isSuccess')
    } catch (error) {
        res.status(400)
    }
};

const addtoCart = async (req, res) => {
    try {
        const cart = {
            product: req.body.product,
            total: req.body.total,
            userID: req.body.id,
        }
        const cartData = await addCart(cart);
        res.status(200).json({ cartData })
        res.send('isSuccess')
    } catch (error) {
        res.status(400)
    }
};

const deleteFromCart = async (req, res) => {
    try {
        const id = req.params.id;
        const any = await deleteCart(id);
        res.status(200).json({
            message: 'Success!',
            data:any
        })
    } catch (error) {
        res.status(400).json({
            message: 'delete fail',
        })
    }
};

const totalPrice = async (req, res) => {
    try {
        const price = req.body.price;
        const any = await sumPriceCart(price);
        res.status(200).json({
            message:'thành công',
            data:any
        })
       
    } catch (error) {
        res.status(400).json({
            message:'thất bại',
        })
    }
}


module.exports = { getAllCart, addtoCart, deleteFromCart, totalPrice };