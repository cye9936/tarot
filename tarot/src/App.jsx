import React, { useState } from 'react';
import TarotCard from './components/TarotCard';
import './App.css';

const drawCards = async () => {
  const response = await fetch('/data/tarot-images.json');
  const data = await response.json();
  const shuffled = data.cards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
};

function App() {
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState('');

  const fetchCards = async () => {
    const drawnCards = await drawCards();
    setCards(drawnCards);
  };

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Write your question here..." 
        value={question} 
        onChange={e => setQuestion(e.target.value)} 
      />
      <button onClick={fetchCards}>Get Tarot Reading</button>
      <div className="cards">
        {cards.map((card, index) => (
          <TarotCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;