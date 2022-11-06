import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import CounterResult from './components/CounterResult';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [allClick, setAllClick] = useState(0);

  const onClick = (type: string, value: number) => {
    let newCounter = 0;
    const numberOfClicks = allClick + 1;

    switch(type) {
      case 'add':
          newCounter = counter + value;
          setCounter(newCounter);
      break;

      case 'odd':
          newCounter = counter - value;
          setCounter(newCounter);
      break;

      case 'restart':
          newCounter = 0;
          setCounter(newCounter);
      break;
    }

    setAllClick(numberOfClicks);
  }

  return ( 
    <div className="App">
      <div className="buttons-container">
        <Button text={'+10'} value={10} type={'add'} onClick={onClick} />
      </div>
      <div className="counter-container">
        <CounterResult text="All click:" result={allClick}/>
        <CounterResult text="Counter Result:" result={counter}/>
      </div>
    </div>
  );
}
 

export default App;
