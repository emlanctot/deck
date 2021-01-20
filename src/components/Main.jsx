import React, { useState, useEffect } from 'react';
import Deck from './Deck';
import { deckGeneration, shuffle } from '../helpers';

const Main = () => {
  const [deck, setDeck] = useState(deckGeneration())

  const handleShuffleClick = () => {
    setDeck(shuffle(deck))
    console.log(deck)
  }


  return(
    <div>
    <button onClick={handleShuffleClick}>Shuffle!</button>
    {deck.map((card, index) => {
      let divStyle = {
        height: '100px',
        width: '70px',
        border: '1px solid black',
        color: card.color
      }
      return (
        <div id={card.num} key={index} className={card.suit} style={divStyle}>
          <p>
            {card.value + card.suit}
          </p>
        </div>
      )
    })}
    </div>
  )
};

export default Main;
