export const cardColor = function(suit) {
  if (suit === '♣' || suit === '♠') {
    return '#000';
  } else {
    return '#F00';
  }
}

export const cardValue = function(num) {
  switch (num) {
    case 0:
      return 'A';
    case 10:
      return 'J';
    case 11:
      return 'Q';
    case 12:
      return 'K';
    default:
      return num + 1;
  }
}

export const deckGeneration = function() {
  let numbers = [...Array(13).keys()];
  let suits = ['♠', '♥', '♣', '♦'];
  let deck = [];

  suits.forEach((suit) => {
    numbers.forEach((number) => {
      deck.push({
        num: number, suit: suit, value: cardValue(number), color: cardColor(suit)
      });
    })
  });

  return deck;
};

export const shuffle = function(deck) {
  for (var i = deck.length - 1; i > 0; i--)  {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}
