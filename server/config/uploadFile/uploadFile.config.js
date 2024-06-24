const multer = require('multer');
const path = require('path');
const mimeTypesFilter = require('@meanie/multer-mime-types-filter');




let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './../../public/Images')
    },
    filename: function (req, file, cb) {
        return cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

const maxSize = 1 * 1024 * 1024 // 1MB

const mimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

const upload = multer({ 
    storage:storage,
    fileFilter:(req,res,cb)=>{
        if(mimeTypesFilter(mimeTypes)){
            cb(null,true);
        }else{
            cb(null, false);
            return cb( new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
    },
    limits:{ fileSize:maxSize }
 });

 module.exports = {upload}