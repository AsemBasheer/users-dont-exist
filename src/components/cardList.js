import React from 'react';
import Card from './card';

const CardList = ({ users }) => {
    return (
        <div className="tc">
            {users.map((user, i) => {
                return (
                    <Card
                        key={users[i].id}
                        id={users[i].id}
                        name={users[i].name}
                        username={users[i].username}
                        email={users[i].email}
                    />
                )
            })}
        </div>
    )
}
export default CardList;