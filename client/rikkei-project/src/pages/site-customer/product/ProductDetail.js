import React from 'react';
import './../../../assets/style/product-detail/product-detail.scss';
import Navbar from '../../../components/organisms/navbar/Navbar';
const ProductDetail = () => {
    return (
        <div className='main-product-detail'>
            <div className='fix-navbar-position'><Navbar/></div>
            <div className='video-decription'>
                <div className='game-video'>
                    <div className='video'></div>
                    <div className='video-slider'></div>
                </div>
                <div className='decription'>
                    <div><img/></div>
                    <p className='short-introduce'></p>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;