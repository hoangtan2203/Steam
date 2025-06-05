import React from 'react';
import './RelatedItem.scss'

const RelatedItem = () => {
    return (
        <div className='related-item'>
            <div className='related-item-content'>
                <div className='more-game'>
                    <div className='more-game-content'>
                        <div className='more-game-header'>
                            <div className='more-game-header-title'>MORE LIKE THIS</div>
                            <div className='more-game-header-see-all'>
                                <a href=''>
                                    <span>See all</span>
                                </a>
                            </div>
                        </div>
                        <div className='more-game-slider'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedItem;