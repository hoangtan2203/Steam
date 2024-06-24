const { loginUser, createUser } = require('./../reponsitories/todoUser.respository');
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

// phần register
const ceateNewUser = async (req, res) => {
    let condition = {
        name: "",
        email: "",
        password: "",
        userAge: "",
        userGender: "",
        phone: ""
    };
    try {

        // khởi tạo các biến tương ứng với giữ liệu từ client gửi lên.
        const { name, email, password, age, phone, gender } = req.body;

        // validation
        const isValidate = false;

        // Phần name
        if (!name || name.trim().length < 5) {
            condition.name = 'tên chứa ít nhất 5 ký tự';
            isValidate = true;
        }
        // Phần email
        if (!email || !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.trim())) {
            condition.email = 'Email không hợp lệ';
            isValidate = true
        }
        // Phần Password
        if (!password || password.trim().length < 5) {
            condition.password = 'Passsword chứa ít nhất 5 ký tự';
            isValidate = true;
        }
        // phần số điện thoại
        if (!phone || phone.trim().length < 10) {
            condition.phone = "số điện thoại không hợp lệ";
            isValidate = true
        }
        // phần tuổi
        if (!age || age < 16) {
            condition.age = "người đăng ký phải trên 16 tuổi";
            isValidate = true
        }

        // sau khi đã thỏa mãn các điều kiện cần, tiến hành Insert giữ liệu user.
        if (isValidate) {
            res.status(400).send("fail")
        } else {
            const hash = bcrypt.hashSync(password, 10);
            const user = {
                name: name,
                email: email,
                age: age,
                password: hash,
                phone: phone,
                gender: gender,
                role: "user"
            }
            const newUser = await createUser(user)
            res.status(200).json({
                message: "Welcom new user",
                data: newUser
            })
        }
    } catch (err) {
        res.status(422).json({
            errors: condition
        })
    }
};
// login user
const userLogin = async (req, res, next) => {
    try {
        const { name, password } = req.body
        const user = await loginUser(name)
        if (user) {
            bcrypt.compare(password, user[0].password, (err, response) => {
                if (err) {
                    res.status(404);
                    res.json("User is not available")
                }
                if (response) {
                    // Access Token
                    const accessToken = jwt.sign(
                        {
                        id: user[0].id,
                        name:name,
                        role:user[0].role
                        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' });
                        console.log("token1:", accessToken)
                    // Refresh Token
                    const refreshToken = jwt.sign({
                        id: user[0].id,
                        role: user[0].role
                    }, process.env.ACCESS_TOKEN_REFRESH, { expiresIn: '365d' });
                    
                    res.status(200).json({
                        message: "success!",
                        name: name,
                        role: user[0].role,
                        token: accessToken,
                        refreshToken:refreshToken
                    })
                
                } else res.status(422).json('Wrong password');
            })
    
        } else res.status(400).send('not find user')
      
    } catch (error) {
        res.status(400).json({
            message: 'User not available'
        })
    }
};
// log out

const logOutUser =  (req,res)=>{
   try {
    res.clearCookie('token');
    res.status(200).send('ok')
   } catch (error) {
    res.status(400)
   }
}


module.exports = { userLogin, ceateNewUser, logOutUser }