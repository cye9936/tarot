import React from 'react';

function TarotCard({ card }) {
  return (
    <div className="card">
      <img src={`/data/cards/${card.img}`} alt={card.name} />
      <h2>{card.name}</h2>
      <p>{card.meanings.light.join(', ')}</p>
      <p>{card.meanings.shadow.join(', ')}</p>
    </div>
  );
}

export default TarotCard;