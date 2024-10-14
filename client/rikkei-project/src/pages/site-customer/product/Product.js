/* 
  Công việc chính của component Product.js

  - Chi tiết giỏ hàng
  - Xóa sản phẩm, xem chi tiết sản phẩm
  - Tổng giá trị
  - Thanh toán
*/

import React, { useEffect, useState } from 'react';
import "./../../../assets/style/product-page/product.css";
import Navbar from "./../../../components/organisms/navbar/Navbar";
import eternal from "./../../../assets/image/product/eternal.jpg";
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import {deleteItem} from './../../../redux/reducer/cartSlice'

const Product = (props) => {
  const dispatch = useDispatch();
  // console.log('from reducer',fromreducer.cart)

  // The list of purchased products.
  const [listProduct,setListproduct] = useState([]);

  // get value in localStorage

  useEffect(()=>{
    const localdata = JSON.parse(localStorage.getItem('cartitems'));
    console.log("product", localdata)
    setListproduct(localdata);
   
  },[])

 

  // calculate the total price with values from localStorage
  const total = listProduct?.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  // xóa đi một sản phẩm
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
    console.log('listProduct', listProduct)
  }

  const handleShowDetail = ()=>{

  }
  return (
    <div className='main-body'>
      <div className='navbarParent'>
        <div className='right-thing'><Navbar /></div>
      </div>
      <div className="back-ground-main">
        <div className='title'>
          <p>GIỎ HÀNG CỦA BẠN</p>
        </div>
      </div>
      <div className='content'>
        <div className="breadcrumb">
          <a >Tất cả sản phẩm</a>
          <a> &gt; Giỏ hàng của bạn</a>
        </div>
        {listProduct?
          <div className="product-content">
            <div className="product-infor">
              {listProduct?.map((item) => (
                < div className='slide-flex'>
                  <div className="product">
                    <img src={'http://localhost:8800/Images/'+item.img} />
                    <div className="product-detail">
                      <span>{item.name}</span>
                      <div className="price">{item.price}.000đ</div>
                    </div>
                  </div>
                  <div className='button-btn'>
                    <button className='button-btn-delete' onClick={() => handleDelete(item.id)}>Xóa</button>
                    <button className='button-btn-detail' onClick={handleShowDetail}>Chi tiết</button>
                  </div>
                </div>
              ))}
              <div className="sidedown-product">
                <div className="product-for">
                  <span>Tổng ước tính</span>
                  <div className="total-price">{total}.000đ</div>
                </div>
                <div className="small-content">
                  Đơn hàng này dành cho bản thân hay mua để làm quà? Chọn để tiếp tục
                  thanh toán
                </div>
                <div className="add-delete-product">
                  <div className="add">
                    <a className="text-box">Mua cho bản thân</a>
                  </div>
                  <div className="delete">
                    <a className="text-box">Mua để làm quà</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-infor">
              <img src={eternal} />
            </div>
          </div> :
          <div className='nothing'>Hiện chưa có sản phẩm nào được chọn
            <br />
            <Link to="/">
              <button className='button-nothing'>Quay lại trang chủ</button></Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Product;