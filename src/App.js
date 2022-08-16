import React from 'react';
import './App.css';
import Die from './components/Die';
import {nanoid} from 'nanoid';


function App() {

  const [dice, setDice] = React.useState(() => allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const value = dice[0].value;
    if (dice.every(die => die.isHeld && die.value === value)) {
      setTenzies(true);
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    };
  };

  function allNewDice() {
    const numsArray = [];
    for (let i = 0; i < 10; i++) {
      numsArray.push(generateNewDie());
    };

    return numsArray;
  };

  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? 
            die :
            generateNewDie();
    }));
  };

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }));
  };

  const diceElelments = dice.map(die => (
    <Die value={die.value} 
        key={die.id}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
    />));

  return (
    <main className="App">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-wrapper">
        {diceElelments}
      </div>

      <button className="roll-btn" onClick={rollDice}>Roll</button>
    </main>
  );
};

export default App;
