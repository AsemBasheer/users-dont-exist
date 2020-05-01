import React from 'react';
import './card.css';

const Card = ({name, price, image, manu}) => {
    return (
        <div className="tc bg-dark-gray dib br3 ma2 pa2 grow bw2 shadow-5">
            <img className="w5" alt="OP" src={image}/>
            <div>
                <h2 className="white">{name}</h2>
                <h5 className="white">{manu}</h5>
                <p className="white">{price}</p>
            </div>
        </div>
    );
}

export default Card;