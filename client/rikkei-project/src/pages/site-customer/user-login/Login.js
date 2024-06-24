import "./../../../assets/style/login-page/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/api/userAPI";
import { useEffect, useState } from "react";
import { getCookie } from './../../../redux/api/userAPI';
import { jwtDecode } from "jwt-decode";
import 'core-js/stable/atob';


const Login = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [decodeToken, setDecodeToken] = useState()

  const user = useSelector(state => state.users);

  // check cookie khi load trang lần đầu, nếu k tồn tại => chuyển về trang login

  useEffect(()=>{
    const token = getCookie('token');
    if(token){
      const decode = jwtDecode(token);
      setDecodeToken(decode)
    }
  },[])  

  useEffect(()=>{
    if(decodeToken && decodeToken?.role == 'user'){
      navigate('/')}  
    // }else if(token && decodeToken.role == 'admin'){
    //   navigate('/admin')
    // } 
  },[decodeToken])

  const [formValidate, setFormValidate] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const initialValue = {
    name: username,
    password: password
  };

  // chức năng đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    setFormValidate(validation(initialValue));
    if (formValidate.name == undefined && formValidate.password == undefined) {
      dispatch(loginUser(initialValue))
        .then((result) => {
          if (result.payload.role == 'user') {
            alert('đăng nhập thành công')
            navigate('/')
          }
          else if (result.payload.role == 'admin') {
            alert('đăng nhập thành công')
            navigate('/admin')
          } else
           alert('sai tên tài khoản hoặc mật khẩu')
           window.location.reload()
        }
        )
        .catch((err) => {
          console.log('err', err)
        })
    }
  }

  // validate form
  const validation = (values) => {
    const error = {
      name: '',
      password: ''
    };
    if (!values.name) {
      error.name = 'vui lòng nhập tài khoản'
    };
    if (!values.password) {
      error.password = 'vui lòng nhập mật khẩu'
    }
    return error
  };
  return (
    <div id="main-login">
      <div className="middle">
        <h1>Sign in</h1>
        <div className="div-center">
          <form className="login" id="loginForm">
            <p className="text-acc">ĐĂNG NHẬP BẰNG TÊN TÀI KHOẢN</p>
            <input type="text"
              id="name"
              name="name"
              onChange={(e) => (setUsername(e.target.value))} />
            {formValidate.name && <span style={{ color: 'red' }}> {formValidate.name} </span>}
            <br />
            <p>Mật khẩu</p>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => (setPassword(e.target.value))} />
            {formValidate.password && <span style={{ color: 'red' }}> {formValidate.password} </span>}
            <br />
            <div className="login-btn">
              <button type="submit" onClick={handleLogin}>Đăng nhập</button>
            </div>
            <div className="login-a">
              <a href="#">Quên mật khẩu ?</a>
              <Link to='/Register'>
                <a>Đăng ký</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login;