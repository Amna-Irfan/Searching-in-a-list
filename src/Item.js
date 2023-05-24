import React from 'react';
import './Item.css';

const Item = ({item}) => {
    const {name} = item;
    return (
    <React.Fragment>
        <div className='item'>
            <h4>{name}</h4>
        </div>
    </React.Fragment>
)};

export default Item;