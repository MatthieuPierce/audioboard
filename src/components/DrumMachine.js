import React from 'react';
import Pad from './Pad'
import { connect } from 'react-redux';
import { fetchPads } from '../redux/actions'
import './DrumMachine.css'


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPads();
    // console.log(`pads after componentDidMount:`);
    // console.log(this.props.pads)
  }



  render(){

    const padElements = this.props.pads.map(pad => {
      let padStyle = {
        background: 'hsla(' + pad.padHue +', 65%, 45%, 1)'
      };
      return (
      <Pad 
        padId={pad.keyId} 
        // audioSrc={pad.audioSrc}
        key={pad.keyId} 
        padStyle={padStyle}
        />
    )
    });

    return (
      <div id="drum-machine-container">
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
          {padElements}
          
          <div id="display">
            {this.props.activeDescription}
            {/* String describing associated audio clip for currently-triggered pad */}
            {/* When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique). */}
          </div>
        </div>        
        
        {/* <div>
            <h2>
              Pads Loaded: {this.props.padsLoaded}
            </h2>
            <h2>
              Play Count: {this.props.playCount}
            </h2>
          </div> */}
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
    // padsLoaded: state.pads.length,
    // playCount: state.playCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPads: () => dispatch(fetchPads())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrumMachine);