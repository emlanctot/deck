import React from 'react';
import Deck from './Deck';

const Table = () => {
    let divStyle = {
        background: '#608f35'
    }
    return (
        <div className='table' style={divStyle}>
            <Deck />
        </div>
    )
}

export default Table;