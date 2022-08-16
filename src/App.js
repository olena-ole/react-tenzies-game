import React from 'react';
import './App.css';
import Die from './components/Die';


function App() {

  const [dice, setDice] = React.useState( () => allNewDice() )

  function allNewDice() {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      newArray.push(randomNum);
    }
    return newArray;
  }

  function handleClick() {
    setDice(allNewDice())
  }

  const diceElelments = dice.map(die => <Die value={die} />)

  return (
    <main className="App">
      <div className="dice-wrapper">
        {diceElelments}
      </div>

      <button className="roll-btn" onClick={handleClick}>Roll</button>
    </main>
  );
}

export default App;
