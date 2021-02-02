import logo from './logo.svg';
import './App.css';
import DrumMachine from './components/DrumMachine'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Audioboard</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <DrumMachine />
    </div>

  );
}

const mapStateToProps = state => {
  return {
    activePad: state.activePad,
    pads: state.pads,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playPad: function() {
      dispatch(playPad())
    }
  }
}


export default App;
