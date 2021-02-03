import React from 'react';
import { playPad } from '../redux/actions';
import { connect } from 'react-redux';
import './Pad.css'


class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      bgColor: ''
    }
    this.audioRef = React.createRef();
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay = () => {
    //click logging
    console.log(`clicked on ${this.props.padId}`)
    //inform local state isPlaying
    this.setState({
      isPlaying: true
    })
    // dispatch playPad action (to inform store/global state)
    playPad(this.props.padId);

    // actually play the audio
    this.audioRef.current.play();
    
  } 

  render() {
    return (
      <div 
        className={`drum-pad ${this.state.isPlaying ? "playing" : ""}`}
        onClick={this.handlePlay}
        style={this.props.padStyle}
        >

        <audio
          className="clip" 
          id={this.props.padId}
          preload="auto"
          ref={this.audioRef}
          src={process.env.PUBLIC_URL + this.props.audioSrc} 
          >
        </audio>
        <header>
          {this.props.padId}
        </header>

        {/* When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered */}

        {/* When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.). */}

        {/* When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique). */}

        {/* PAD COMPONENTS REQS:  
        * 9 clickable drum pad elements
        * each with a class name of drum-pad
        * a unique id that describes the audio clip the drum pad will be set up to trigger
        * inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. 
        * The drum pads MUST be in this order.
      */}
        {/* <p>I'm playing!</p>
        <p>I'm not playing!</p> */}
        </div>
    )

  }

} 

const mapStateToProps = state => {
  return {
    activePad: state.activePad,
    loading: state.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playPad: () => dispatch(playPad())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pad);