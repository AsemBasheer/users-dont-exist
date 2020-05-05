import React from 'react';
import './card.css';

const Card = ({name, email, username, id}) => {
    return (
        <div className="bg-white-10 dib br4 ma2 pa2 grow bw2">
            <img className="w4-5" alt="toRemove"
            src={`https://robohash.org/${id}?set=set5`}/>
            <img className="w3" alt="toChange"
            src={`https://thispersondoesnotexist.com/image?15885${id}69420.jpg`}/>
            <div className="center w4-5">
                <h2 className="white">{name}</h2>
                <h5 className="white">{username}</h5>
                <p className="white">{email}</p>
            </div>
        </div>
    );
}

export default Card;