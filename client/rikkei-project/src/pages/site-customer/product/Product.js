import React, { useEffect, useState } from 'react';
import "./../../../assets/style/product-page/product.css";
import Eternal from "./../../../assets/image/menu mở rộng/menu trái/Eternal.jpg";
import Navbar from "./../../../components/organisms/navbar/Navbar";
import eternal from "./../../../assets/image/product/eternal.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteCart, fetchAllCart, sumPriceCart } from '../../../redux/api/cartAPI';

const Product = (props) => {

  const cartData = useSelector(state => state.cart);
  console.log('id-here', cartData.data.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCart())
    dispatch(sumPriceCart())
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
    window.location.reload();
  }
  console.log(cartData)
  
  return (
    <div className='main-body'>
      <div className='navbarParent'>
        <div className='right-thing'><Navbar/></div>
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
        {cartData?.data?.cart?.length>0 ?
          <div className="product-content">
            <div className="product-infor">
              {cartData?.data?.cart?.map((item) => (
                < div className='slide-flex'>
                  <div className="product">
                    <img src={Eternal} />
                    <div className="product-detail">
                      <span>{item.name}</span>
                      <div className="price">{item.price}.000đ</div>
                    </div>
                  </div>
                  <div className='button-btn'>
                    <button onClick={() => handleDelete(item.id)} style={{ backgroundColor: 'red', width: '100px', height: '77px' }}>xóa</button>
                    <button style={{ backgroundColor: 'green', width: '100px', height: '77px' }}>chi tiết</button>
                  </div>
                </div>
              ))}
              <div className="sidedown-product">
                <div className="product-for">
                  <span>Tổng ước tính</span>
                  <div className="total-price">{cartData?.total?.data[0]?.sumprice}.000đ</div>
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