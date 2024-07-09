import React from 'react';
import classNames from 'classnames';
import { Link} from 'react-router-dom';
import { useState } from 'react';

const CartItem = ({handleDeleteCart,listcartInfoGame}) => {
    
      // bật tắt danh sách sản phẩm trong giỏ hàng
  const [showproductcart, setShowproductcart] = useState(true);
  // chức năng hiển bật tắt danh sách giỏ hàng
  const HandleProductCart = () => {
    setShowproductcart(!showproductcart)
  }
    return (
        <div className='box' onClick={HandleProductCart}>
        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 448 512"><path fill='white' d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>
        {/* số lượng đơn hàng */}
        <div className='product-state'>
          {listcartInfoGame?.length}
          <ul className={classNames({ showproductcart: showproductcart }, "clickposition")}>
            {listcartInfoGame.map((item) => (
              <li style={{ display: "flex", position: "relative" }}>
                <img
                  src={'http://localhost:8800/Images/'+item.img}
                  style={{ width: '70px', height: "40px", marginTop: "5px", marginLeft: "5px" }} />
                <p style={{ fontSize: "20px", marginTop: "10px", marginLeft: "5px", color: "#fff" }} >{item.name}</p>
                <div onClick={() => handleDeleteCart(item.id)}>
                  <svg style={{ position: 'absolute', right: '0', top: '10' }} data-slot="icon" fill="none" stroke="currentColor" width="50" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
                  </svg></div>
              </li>
            ))}
            <li style={{ display: "flex", height: "30px", textAlign: "center" }} >
              {
                listcartInfoGame.length ?
                  <Link to='/product' target='_blank'>
                    <p className='productseemore' style={{ marginLeft: "20px" }}> Xem tất cả {listcartInfoGame?.length} sản phẩm</p>
                  </Link> :
                  <p className='productseemore' style={{ marginLeft: "40px" }}>Chưa có sản phẩm</p>}
            </li>
          </ul>
        </div>
      </div>
    );
};

export default CartItem;