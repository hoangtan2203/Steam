import React from 'react';
import './../../../assets/style/buttons/votebutton.scss'

const VoteButton = () => {
    return (
        <div className='vote-buttons'>
            <a href='' className='vote-button'>Yes
                <img />
            </a>
            <a href='' className='vote-button'>No
                <img />
            </a>
            <a href='' className='vote-button'>Funny
                <img />
            </a>
            <a href='' className='vote-button'>Award
                <img />
            </a>
        </div>
    );
};

export default VoteButton;