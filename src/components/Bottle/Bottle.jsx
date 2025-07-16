import React from 'react';
import './Bottle.css';

const Bottle = ({ bottle }) => {
    const {image,name,brand,price,color} = bottle;
    return (
        <div className='bottle'>
            <img src={image} alt="" />
            <h3>Name : {name}</h3>
            <h3>Brand : {brand}</h3>
            <p>Price : $ {price}</p>
            <p>Color : {color}</p>
            {/* <strong>Material : {material}</strong> */}
            {/* <p>Capacity : {capacity_ml}</p> */}
        </div>
    );
};

export default Bottle;