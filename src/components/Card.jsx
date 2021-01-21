import React from 'react';

const Card = ({card, handleUp, handleDown, handleDrag, handleDoubleClick, dragging}) => {
    let divStyle = {
        height: '160px',
        width: '110px',
        border: '1px solid black',
        borderRadius: '5px',
        color: card.color,
        left: card.x + 'px',
        top: card.y + 'px',
        position: 'fixed',
        background: 'white',
        zIndex: card.zIndex,
        userSelect: 'none',
        cursor: dragging ? 'grabbing' : 'grab'
    };
    return (
        <div
            id={card.id}
            key={card.id}
            className={card.suit}
            style={divStyle}
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            onMouseMove={handleDrag}
        >
            {!!card.faceUp ? (card.value + card.suit) : ''}
        </div>

    )
}

export default Card;