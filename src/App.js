import logo from './logo.svg';
import './App.css';
import DrumMachine from './components/DrumMachine'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bad Takes Audioboard</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <DrumMachine />
    </div>

  );
}

export default App;
