import React from 'react';
import "./../../../assets/style/register-page/register.css";
import background from "./../../../assets/image/back_ground/acct_creation_bg.jpg";
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { fetchUsers, registerUser } from '../../../redux/api/userAPI';
import { useNavigate, useParams } from 'react-router-dom';

const Register = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])
  const navigate = useNavigate()
  const inputUserName = useRef();
  const inputUserPassword = useRef();
  const inputUserConfirmPwd = useRef()
  const inputUserAge = useRef();
  const inputUserEmail = useRef();
  const inputUserPhone = useRef();
  const { id } = useParams();


  const initialValue = {
    username: "",
    password: "",
    confirmpwd:"",
    email: "",
    phone:"",
    age: 0,
  }
  const error = {
    name:"",
    password:"",
    confirmpwd:"",
    email:"",
    age:"",
    phone:""
    };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});


  // lấy value từ các input
  const handleOnchange = (e) => {
      const {name, value} = e.target;
      setFormValue({...formValue, [name]: value})
  };
  // validate dữ liệu
  const validate = (values) => {
    const condition = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!values.name){
      error.name = "tên đăng nhập không hợp lệ"
    };
    if(!values.password){
      error.password = "yêu cầu mật khẩu"
    }else if(values.password.length<8){
      error.password = "mật khẩu chứa ít nhất 8 ký tự"
    }
    if(!values.confirmpwd){
      error.confirmpwd = "nhập lại mật khẩu"
    }else if(values.confirmpwd !== values.password){
      error.confirmpwd = "sai mật khẩu"
    }
    if(!values.email){
      error.email = 'vui lòng nhập email'
    }else if(!condition.test(values.email)){
      error.email = "vui lòng nhập đúng định dạng email"
    }
    if(!values.age){
      error.age = "vui lòng nhập số tuổi"
    }else if(parseInt(values.age)<16){
      error.age = "người đăng ký phải trên 16 tuổi"
    }
    if(!values.phone){
      error.phone = "vui lòng nhập số điện thoại"
    } if(values.phone.length<10){
      error.phone = "số điện thoại không hợp lệ"
    }
    return error
  }
  // submit form 
  const handleSubmit = (e) => {
    e.preventDefault();
     const user = {
      name: inputUserName?.current?.value,
      password: inputUserPassword?.current?.value,
      confirmpwd: inputUserConfirmPwd?.current?.value,
      email: inputUserEmail?.current?.value,
      age: inputUserAge?.current?.value,
      phone:inputUserPhone?.current?.value
    }
    setFormError(validate(user));    
    dispatch(registerUser(user));
      alert('Đăng ký thành công');
      navigate('/')
    
    console.log("form error: ",formError)
  };

  return (
    <div id='main'>
      <div className="div-container">
        <form className="registerForm">
        <h1>Sign up</h1>
          <p>Tên tài khoản</p>
          <input type="text" id="name" name="name" style={{color:'black'}} ref={inputUserName} onChange={handleOnchange} placeholder='tên tài khoản' />
          {formError.name && <span className='error-mess' style={{color:'red', marginLeft:'10PX'}} >{formError.name}</span>}
          <p>Mật khẩu</p>
          <input type="password" id="password" name="password" style={{color:'black'}} ref={inputUserPassword}  onChange={handleOnchange} placeholder='mật khẩu' />
          {formError.password && <span className='error-mess' style={{color:'red', marginLeft:'10PX'}} >{formError.password}</span>}
          <p>Nhập lại mật khẩu</p>
          <input type="password" id="confirmPW" style={{color:'black'}} ref={inputUserConfirmPwd} onChange={handleOnchange} placeholder='nhập lại mật khẩu'/>
          {formError.confirmpwd && <span className='error-mess'style={{color:'red', marginLeft:'10PX'}} >{formError.confirmpwd}</span>}
          <p>Địa chỉ mail</p>
          <input type="email" id="email" style={{color:'black'}} name="email" ref={inputUserEmail} onChange={handleOnchange} placeholder='địa chỉ email'/>
          {formError.email && <span className='error-mess' style={{color:'red', marginLeft:'10PX'}}>{formError.email}</span>}
          <div>
            <p>Giới tính</p>
            <select style={{ color: 'black' }}>
              <option style={{ color: 'black' }}>
                nam
              </option>
              <option style={{ color: 'black' }}>
                nữ
              </option>
              <option style={{ color: 'black' }}>
                khác
              </option >
            </select>
             </div>
            <p>Tuổi</p>
            <input type="text" name="age" style={{color:'black'}} ref={inputUserAge} onChange={handleOnchange} placeholder='Số tuổi'/>
            {formError.age && <span className='error-mess' style={{color:'red', marginLeft:'10PX'}}>{formError.age}</span>}
            <p>Số điện thoại</p>
          <input type="text" style={{color:'black'}} name="phone" ref={inputUserPhone} onChange={handleOnchange} placeholder='+84 ...'/>
          {formError.phone && <span className='error-mess' style={{color:'red', marginLeft:'10PX'}}>{formError.phone}</span>}
          <br />
          <button className="button-accept" type="submit"  onClick={handleSubmit} >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;