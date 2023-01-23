import { useState } from 'react';

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

  const moveUnit = 10;

  const moveUp = () => {
    setPos({x: x, y: y - moveUnit})
    setTranslate(formatMove());
  }

  const moveDown = () => {
    setPos({x: x, y: + moveUnit})
    setTranslate(formatMove());
  }

  const moveLeft = () => {
    setPos({x: x - moveUnit, y: y})
    setTranslate(formatMove());
  }

  const moveRight = () => {
    setPos({x: x + moveUnit, y: y})
    setTranslate(formatMove());
  }

  return (
    <div>
      <div className='controls'>
        <button onClick={moveUp}>
          Move Up
        </button>
        <button onClick={moveLeft}>
          Move Left
        </button>
        <button onClick={moveRight}>
          Move Right
        </button>
        <button onClick={moveDown}>
          Move Down
        </button>
      </div>
      <div className='world'>
        <div className='test-object' style={{transform: translate}}>
          \O/
        </div>
      </div>
    </div>
  );
}

export default App;
