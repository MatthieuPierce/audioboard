import React from 'react';
import Pad from './Pad'
import { connect } from 'react-redux';
import './DrumMachine.css'


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <div id="drum-machine-container">
        <div><h2>Pads Below</h2></div>
        <div id="drum-machine">
          {/* BUILD OUT .drum-pad PAD COMPONENTS HERE:  
            * 9 clickable drum pad elements
            * each with a class name of drum-pad
            * a unique id that describes the audio clip the drum pad will be set up to trigger
            * inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. 
            * The drum pads MUST be in this order.
          */}

          {/* for each pad in pads array, build Pad Component
          supply each Pad with their own padId 
          AND supply audioSrc as props
          (alternately, leave off audioSrc, and individual pad picks it up from Pad's individual mapStateToProps access to state.pads) */}
          {this.props.pads.map(pad => {
            let min = Math.ceil(0);
            let max = Math.floor(360);
            let randomHue = Math.floor(
              Math.random() * (max - min + 1) + min);
            console.log(`randomHue is ${randomHue}`);
            let padStyle = {
              background: 'hsla(' + randomHue +', 60%, 45%, 1)'
            };
            return (
            <Pad padId={pad.keyId} audioSrc={pad.audioSrc} key={pad.keyId} padStyle={padStyle}/>
          )
          })}
          

          
          <div id="display">
            Display Last-Played Description Here: 
            {this.props.activeDescription}
            {/* String describing associated audio clip for currently-triggered pad */}
            {/* When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique). */}
          </div>
        </div>
        <div>
            <h2>
              Pads Loaded: {this.props.padsLoaded}
            </h2>
          </div>
      </div>

    )

  }


}

const mapStateToProps = state => {
  return {
    activePad: state.activePad,
    activeDescription: state.activeDescription,
    pads: state.pads,
    loading: state.loading,
    error: state.error,
    padsLoaded: state.pads.length
  }
}

export default connect(mapStateToProps)(DrumMachine);