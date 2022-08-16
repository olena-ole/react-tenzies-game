import './App.css';
import Die from './components/Die';

function App() {
  return (
    <main className="App">
      <div className="dice-wrapper">
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </main>
  );
}

export default App;
