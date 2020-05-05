import React from 'react';
import Card from './card';

const CardList = ({ devices }) => {
    return (
        <div className="tc">
            {devices.map((user, i) => {
                return (
                    <Card
                        key={devices[i].id}
                        id={devices[i].id}
                        name={devices[i].name}
                        username={devices[i].username}
                        email={devices[i].email}
                    />
                )
            })}
        </div>
    )
}
export default CardList;