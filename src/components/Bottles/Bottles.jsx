import React, { useEffect, useState } from 'react';
import './Bottles.css';
import Bottle from '../Bottle/Bottle';
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("bottles.json")
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    
    const handleAddToCart = bottle => {
        // console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
    }
    return (
        <div>
            <h3>Bottles are available here : {bottles.length}</h3>
            <h4>Bottle : {cart.length}</h4>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;