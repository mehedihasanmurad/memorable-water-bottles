import React, { useEffect, useState } from 'react';
import './Bottles.css';
import Bottle from '../Bottle/Bottle';
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch("bottles.json")
            .then(res => res.json())
            .then(data => setBottles(data))
    },[])
    return (
        <div>
            <h3>Bottles are here : {bottles.length}</h3>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;