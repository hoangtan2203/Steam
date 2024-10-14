import React, { useEffect, useState } from 'react';
import "./../../../assets/style/header/header.css";
import { Link } from 'react-router-dom';
import { userLogout } from './../../../redux/api/userAPI';
import { useDispatch } from 'react-redux';
import { getCookie } from './../../../redux/api/userAPI';
import { jwtDecode } from "jwt-decode";
import 'core-js/stable/atob';



const Header = (props) => {

    const [toggle, setToggle] = useState(true);

    const [token, setToken] = useState();

    console.log('setToken:',token)
    const dispatch = useDispatch();

    // get cookie
    const cookie = getCookie('token');

    // decode token/jwt
    useEffect(() => {
        if (cookie) {
            const decode_token = jwtDecode(cookie);
            setToken(decode_token)
        };
    },[])

    function deletedCookie(coookie) {
        document.cookie = coookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleLogout = () => {
        deletedCookie('token')
        dispatch(userLogout())
        window.location.reload()
    }
    return (

        <header style={{ display: "flex" }}>
            <div className="logo">
                <a href="#">
                    <img
                        src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
                        alt=""
                    />
                </a>
            </div>
            <ul className="nav-menu">
                <li>
                    <a href="#" id="active">
                        CỬA HÀNG
                    </a>
                </li>
                <li>
                    <a href="#">CỘNG ĐỒNG</a>
                </li>
                <li>
                    <a href="#">THÔNG TIN</a>
                </li>
                <li>
                    <a href="#">HỔ TRỢ</a>
                </li>
            </ul>
            <ul className="right-info">
                <li className='big-li'>
                    <a href="">Cài đặt Steam</a>
                </li>
                <li className='big-li'>
                    {!token ?
                        (<Link to='/login'>Đăng nhập</Link>) : (
                            <div className='user-option' onClick={handleToggle} style={{ cursor: "pointer" }}>
                                {token?.name}
                                {!toggle ?
                                    <div className="dropdown-user-infor">
                                        <li>
                                            Xem hồ sơ
                                        </li>
                                        <li>
                                            Chi tiết tài khoản
                                        </li>
                                        <li onClick={handleLogout}>
                                            Đăng xuất
                                        </li>
                                        <li>
                                            Tùy chỉnh
                                        </li>
                                    </div>
                                    : <div></div>}

                            </div>
                        )}
                </li>
                <li className='big-li'>|</li>
                <li className='big-li' id="language">
                    Ngôn ngữ
                    <ul id="dropdown-language">
                        <li>
                            <a href="#">Tiếng Việt</a>
                        </li>
                        <li>
                            <a href="#">Tiếng Anh</a>
                        </li>
                        <li>
                            <a href="#">Tiếng Tây Ban Nha</a>
                        </li>
                        <li>
                            <a href="#">Tiếng Hàn</a>
                        </li>
                        <li>
                            <a href="#">Tiếng Trung</a>
                        </li>
                        <li>
                            <a href="#">Tiếng Nhật</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
    );
};

export default Header;