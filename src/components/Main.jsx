import React, {useState} from 'react';
import Deck from './Deck';
import {deckGeneration, shuffle} from '../helpers';

const Main = () => {
  const [deck, setDeck] = useState(deckGeneration())
  // setDeck(deckGeneration()));
  // shuffle(deck);

  return(
    <div>
    <button onClick={() => shuffle(deck)}>Shuffle!</button>
    {deck.map((card) => {
      let divStyle = {
        height: '100px',
        width: '70px',
        border: '1px solid black',
        color: card.color
      }
      return (
        <div id={card.num} className={card.suit} style={divStyle}>
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
