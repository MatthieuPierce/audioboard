import './App.css';
import DrumMachine from './components/DrumMachine';
import ReactFCCtest from 'react-fcctest';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bad Takes Audioboard</h1>
        {/* <p>Click or keyboard for hot takes from across the ages</p> */}
      </header>
      <DrumMachine />
      <ReactFCCtest />
    </div>

  );
}

export default App;
