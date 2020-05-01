import React from 'react';
import Card from './card';

const CardList = ({ devices }) => {
    return (
        <div>
            {devices.map((user, i) => {
                return (
                    <Card
                        key={devices[i].id}
                        id={devices[i].id}
                        name={devices[i].name}
                        manu={devices[i].manu}
                        price={devices[i].price}
                        image={devices[i].image}
                    />
                )
            })}
        </div>
    )
}
export default CardList;