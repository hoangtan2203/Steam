import React, { useEffect,useState } from 'react';
import './../../../assets/style/product-detail/product-detail.scss';
import Navbar from '../../../components/organisms/navbar/Navbar';
import avatar from './../../../assets/image/duyệt theo thể loại/ảnh-game.jpg';
import thumUp from './../../../assets/icon/icon_thumbsUp_v6.png';
import VoteButton from '../../../components/atoms/button/VoteButton.js';
import RelatedItem from '../../../components/organisms/Slider/RelatedItem.js';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const {id} = useParams();
    const [product, SetProduct] = useState(null);
    useEffect(()=>{
            const cartItems = JSON.parse(localStorage.getItem('cartitems')) || [];
            const item = cartItems.find(item => item.id == id);
            SetProduct(item);
    },[id])
    if (!product) {
        return <p>loading...</p>
    }
    console.log('product',product)
    return (
        <div className='main-product-detail'>
            <div className='fix-navbar-position'><Navbar /></div>
            <div className='page-content'>
                <div className='page-content-header'>
                    <div className='game-title'>{product.name}</div>
                    <div className='community-hub'>
                        <div className='community-hub-bnt'>
                            <span>Community Hub</span>
                        </div>
                    </div>
                </div>
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
            <RelatedItem/>
            <div className='customer-review'>
                <div className='customer-review-content'>
                    <h2 className='customer-review-content-header'>Customer reviews for {product.name}</h2>
                    <div className='reviews-infor'>
                        <div>
                            <span>Showing 420,488 reviews that match the filters above</span>
                        </div>
                    </div>
                    <div className='review-summary'>
                        <div className='review-summary-left-col'>
                            <div className='user-review-header'> most helpful reviews </div>
                            <div className='user-review-content'>
                                <div className='user-review-content-left-col'>
                                    <div className='avatar'>
                                        <img src={avatar} />
                                    </div>
                                    <div className='personal-name'>Chrispysavage</div>
                                </div>
                                <div className='user-review-content-right-col'>
                                    <div className='vote-header'>
                                        <div className='vote-icon-header'>
                                            <img className='vote-icon' />
                                            <div className='vote-ellipsis'>Not Recommended</div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        game is in a bad state right now .
                                        alot of legends are basically useless cause other legends do better versions of there abilities .
                                        ttk is high . but solo q is always getting placed with 3 stacks . most use controller for the aim assist which is overpowered for some guns like the p2020s .
                                        unless playing with friends . most of your teamates just leave when they go down . or dont stick together . i have 1600 hours here and then on xbox another 2500 hours .
                                        either im really bad or everyone is a god when it comes to match making or they got cronus .
                                        cheaters galore still hasnt been solved .
                                        the pass is now a money grab on respawns part .
                                        apex has been my main game for years until recently . just really bad moves from the devs .
                                    </div>
                                    <div className='hr'></div>
                                    <div className='review-was-helpful'>Was this review helpful?</div>
                                    <VoteButton />
                                </div>
                            </div>
                        </div>
                        <div className='review-summary-right-col'>
                            <div className='user-review-header'> recently posted</div>
                            <div className='recently-user-review-content'>
                                <a className='short-header'>
                                    <img src={thumUp} />
                                    <div className='personal-name'>
                                        <span>Womens Rights is g...</span>
                                    </div>
                                    <div className='hours'>12.1 hrs</div>
                                </a>
                                <div className='review-content'>
                                    <div className='postedDate'>Post: 2 May</div>
                                    <div className='content'>Very good!</div>
                                    <div className='hr'></div>
                                    <div className='control-block'>
                                        <span className='review-was-helpful'>Helpful?</span>
                                        <VoteButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;