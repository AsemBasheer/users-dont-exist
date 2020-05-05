import React from 'react';
import Card from './card';

const CardList = ({ users }) => {
    return (
        <div className="tc">
            {users.map((user) => {
                return (
                    <Card
                        key={user.id}
                        user={user}
                    />
                )
            })}
        </div>
    )
}
export default CardList;