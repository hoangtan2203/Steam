import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const SubUser = (props) => {
    return (
        <>
            <div className='title'>
                <img src={props.img}/>
                <span>{props.gameTitle}
                </span>
            </div>
            <div className='subcontent'>
                <div className='addlist'>
                    <button onClick={props.addproductUpdate}>Thêm vào giỏ hàng</button>
                </div>
                <div className='buy'>
                    <button ><Link to='/Product' style={{color:"black"}}>Xem thông tin</Link></button>
                </div>
            </div>
        </>

    );
};

export default SubUser;
