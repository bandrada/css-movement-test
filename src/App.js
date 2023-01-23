import { useState, useEffect } from 'react';

import './App.css';

const initPos = {
  x: 0,
  y: 0
}

const App = () => {
  const [pos, setPos] = useState(initPos);
  const { x, y} = pos;
  const [translate, setTranslate] = useState('translate(0px, 0px)');

  const formatMove = () => {
    return `translate(${x}px, ${y}px)`;
  }

  const moveLeft = () => {
    setPos({x: x - 10, y: y})
    setTranslate(formatMove());
  }

  const moveRight = () => {
    setPos({x: x + 10, y: y})
    setTranslate(formatMove());
  }

  return (
    <div>
      <button onClick={moveLeft}>
        Move Left
      </button>
      <button onClick={moveRight}>
        Move Right
      </button>
      <div className='test-object' style={{transform: translate}}>
        \O/
      </div>
    </div>
  );
}

export default App;
