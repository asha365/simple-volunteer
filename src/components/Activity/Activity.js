import React from 'react';
import './Activity.css';

const Activity = ({activity}) => {
    const {title, img} = activity;
    return (
        <div className='activity'>
            <h2>{title}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Activity;