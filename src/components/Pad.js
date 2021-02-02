import React from 'react';
import { playPad } from '../redux/actions';


class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    }
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay = () => {
    playPad(this.props.padId);
  } 

  render() {
    return (
      <div>
        <header>Pad Title</header>
        <div className="drum-pad"
          onClick={this.handlePlay}
          >
          <audio src={this.props.audioSrc} className="clip" id={this.props.padId}>
          </audio>

          {/* When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered */}

          {/* When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.). */}

          {/* When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique). */}
        </div>
        <p>
          Supplementary text for this particular pad <code> and perhaps code</code>.
        </p>
        <p>I'm playing!</p>
        <p>I'm not playing!</p>
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
    playPad: function() {
      dispatch(playPad())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pad);