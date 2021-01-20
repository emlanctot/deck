import React, { useState, useEffect } from 'react';
import Card from './Card';
import { deckGeneration, shuffle } from '../helpers';

const Deck = () => {

  const [deck, setDeck] = useState(deckGeneration());
  const [relativeCursor, setRelativeCursor] = useState({x: 0, y: 0});
  const [activeCard, setActiveCard] = useState('');
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    handleShuffleClick();
  }, [])

  const handleShuffleClick = () => {
    shuffle(deck).forEach((card, index) => {
      card.id = index;
      card.x = 40;
      card.y = 40;
      card.zIndex = 0;
      card.faceUp = false;
    })
    setDeck([...deck]);
  }

  const handleDown = (e) => {
    let currentCard = e.target.id;
    setDragging(true);
    setRelativeCursor({x: (e.pageX - deck[currentCard].x), y: (e.pageY - deck[currentCard].y)});
    setActiveCard(currentCard);
    let topCard = Math.max(...deck.map(card => card.zIndex));
    deck[currentCard].zIndex = (topCard + 1);
    setDeck([...deck]);
  }

  const handleUp = (e) => {
    setDragging(false);
  }

  const handleDrag = (e) => {
    if (dragging) {
      deck[activeCard].x = (e.pageX - relativeCursor.x);
      deck[activeCard].y = (e.pageY - relativeCursor.y);
      setDeck([...deck]);
    } else {
      return false;
    }
  }

  const handleDoubleClick = (e) => {
    let clickedCard = e.target.id;
    deck[clickedCard].faceUp = !deck[clickedCard].faceUp;
    setDeck([...deck]);
  }

  return(
    <div>
      <button onClick={handleShuffleClick}>Shuffle!</button>
      {deck.map((card) => (
        <Card 
          card={card} 
          handleUp={handleUp} 
          handleDown={handleDown} 
          handleDrag={handleDrag}
          handleDoubleClick={handleDoubleClick}
        />
      ))}


    </div>
  )
};

export default Deck;
