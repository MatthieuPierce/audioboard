import React from 'react';
import Pad from './Pad'
import { playPad } from '../redux/actions'
import { connect } from 'react-redux';


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
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
        (alternately, leave off audioSrc, and individual pad picks it up from Pad's individual mapStateToProps access to state.pads)
        <Pad padId={unique-padId} audioSrc={unique-audioSrc}/> */}

        <div>
          <h2>
            Pads Loaded: {this.props.padsLoaded}
          </h2>
        </div>
        <h2> #display below:</h2>
        <div id="display">
          {/* String describing associated audio clip for currently-triggered pad */}
          {/* When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique). */}
        </div>
      </div>
    )

  }


}

const mapStateToProps = state => {
  return {
    activePad: state.activePad,
    pads: state.pads,
    loading: state.loading,
    error: state.error,
    padsLoaded: state.pads.length
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playPad: function() {
      dispatch(playPad())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrumMachine);