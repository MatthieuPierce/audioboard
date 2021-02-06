import React from 'react';
import { playPad, stopPad } from '../redux/actions';
import { connect } from 'react-redux';
import KeyboardEventHandler from 'react-keyboard-event-handler';
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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleAudioEnd = this.handleAudioEnd.bind(this);
  }

  handlePlay = () => {
    // click console logging
    // console.log(`played padId ${this.props.padId}`)

    //inform local state isPlaying
    this.setState({
      isPlaying: true
    })
    // dispatch playPad action (to inform store/global state)
    this.props.playPad(this.props.padId);

    // actually play the audio
    this.audioRef.current.play();
  }

  handleKeyDown = (key) => {
    // console.log(`handleKeyDown just received key ${key}`);
    if (key.toUpperCase === this.props.padId.toUpperCase) {
      // console.log(`matched with ${this.props.padId}, handleKeyDown going to trigger handlePlay`);
      this.handlePlay();
    }
  }

  handleAudioEnd = () => {
    //inform local state isPlaying to false
    this.setState({
      isPlaying: false
    })
    // dispatch stopPad action (to inform store/global state)
    this.props.stopPad(this.props.padId);

  }

  render() {

    const { padId } = this.props;

    return (
      <div
        className={`drum-pad ${this.state.isPlaying ? "playing" : ""}`}
        onClick={this.handlePlay}
        // onKeyDown={this.handleKeyDown}
        style={this.props.padStyle}
        tabIndex="0"
      >
        <KeyboardEventHandler
          handleKeys={[padId]}
          onKeyEvent={(key, e) => this.handleKeyDown(key)}
        />
        <audio
          className="clip"
          id={padId}
          preload="auto"
          ref={this.audioRef}
          src={process.env.PUBLIC_URL + this.props.audioSrc}
          // src={this.props.audioSrc}
          onEnded={this.handleAudioEnd}
        >
        </audio>
        <header>
          {padId}
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

const mapStateToProps = (state, ownProps) => {
  return {
    activePad: state.activePad,
    loading: state.loading,
    audioSrc: state.pads.find(pad => pad.keyId === ownProps.padId).audioSrc
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playPad: (padId) => dispatch(playPad(padId)),
    stopPad: (padId) => dispatch(stopPad(padId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pad);