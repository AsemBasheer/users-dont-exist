import React from 'react';

const SearchBox = ({search}) => {
    return (
        <div className="tc">
            <input type='search' placeholder='search' 
            className='bg-white-80 b--dark-gray br3 bw3 pa2 ma2'
            onChange={search}
            />
        </div>
    );
}
export default SearchBox;