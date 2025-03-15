import React from 'react';
import './../../../assets/style/product-detail/product-detail.scss';
import Navbar from '../../../components/organisms/navbar/Navbar';
import { useLocation } from 'react-router-dom'
const ProductDetail = () => {
    const location = useLocation();
    console.log('Location object:', location);  

    const product = location.state?.product || {};
    console.log('Product from state:', product);  

    if (!product) {
        return <p>loading...</p>
    }

    return (
        <div className='main-product-detail'>
            <div className='fix-navbar-position'><Navbar /></div>
            <div className='video-decription'>
                <div className='game-video'>
                    <div className='video'></div>
                    <div className='video-slider'></div>
                </div>
                <div className='decription'>
                    <div><img className='game-img' src={'http://localhost:8800/Images/' + product.img} /></div>
                    <div className='short-introduce'>{product.decription}</div>
                    <div className='user-review'>
                        <div className='subtitle-collumn'>Recent Reviews:</div>
                        <div className='summary-collumn'>Unknow</div>
                    </div>
                    <div className='all-reviews'>
                        <div className='subtitle-collumn'>All Reviews:</div>
                        <div className='summary-collumn'>Unknow</div>
                    </div>
                    <div className='release-date'>
                        <div className='subtitle-collumn'>Release Date:</div>
                        <div className='summary-collumn'>Unknow</div>
                    </div>
                    <div className='developer'>
                        <div className='subtitle-collumn'>Developer:</div>
                        <div className='summary-collumn'>Unknow</div>
                    </div>
                    <div className='publisher'>
                        <div className='subtitle-collumn'>Publisher:</div>
                        <div className='summary-collumn'>Unknow</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;