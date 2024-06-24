import React from 'react';
import Search from "./../../../assets/image/Logo/search_icon_btn.png"
import  "./../../../assets/style/navbar/navbar.css"

const Navbar = (props) => {
    return (

        <div className="nav-bar">
            <div className='right-nav-bar'>
                <ul>
                    <li>
                        <a href="">Cửa hàng của bạn</a>
                    </li>
                    <li>
                        <a href="">Mới &amp; Đáng chú ý</a>
                    </li>
                    <li>
                        <a href="">Danh mục</a>
                    </li>
                    <li>
                        <a href="">Cửa hàng điểm</a>
                    </li>
                    <li>
                        <a href="">Tin tức</a>
                    </li>
                    <li>
                        <a href="">Labs</a>
                    </li>
                </ul>
            </div>
            <div className="nav-bar-search">
                    <input type="search" placeholder="Tiềm kiếm" />
                    <a href="#">
                        <img src={Search} alt="" />
                    </a>
            </div>
        </div>


    );
};

export default Navbar;