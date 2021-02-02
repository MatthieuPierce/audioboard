import { PLAY, FETCH_JSON_REQUEST, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './constants';

const baseState = {
  pads: [],
  activePad: '',
  loading: false,
  error: ''
}

const tempBaseState = {
  activePad: '',
  activeDescription: '',
  loading: false,
  error: '',
  pads: [
    {
      "keyId": "q",
      "audioSrc": "q-audio.mkv",
      "isPlaying": false
    },
    {
      "keyId": "w",
      "audioSrc": "w-audio.mkv",
      "isPlaying": false
  
    },
    {
      "keyId": "e",
      "audioSrc": "e-audio.mkv",
      "isPlaying": false
  
    },
    {
      "keyId": "a",
      "audioSrc": "a-audio.mkv",
      "isPlaying": false
  
    },
    {
      "keyId": "s",
      "audioSrc": "s-audio.mkv",
      "isPlaying": false
  
    },
    {
      "keyId": "d",
      "audioSrc": "d-audio.mkv",
      "isPlaying": false
  
    },
    {
      "keyId": "z",
      "audioSrc": "z-audio.mkv",
      "isPlaying": false
  
    },
    {
      "keyId": "x",
      "audioSrc": "x-audio.mkv",
      "isPlaying": false
  
    },
    {
      "keyId": "c",
      "audioSrc": "c-audio.mkv",
      "isPlaying": false
  
    }
  ]
}


const rootReducer = (state = tempBaseState, action) => {
  switch (action.type) {
    case FETCH_JSON_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_JSON_SUCCESS:
      return {
        ...state,
        pads: action.payload,
        loading: false,
        error: ''
      }
    case FETCH_JSON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case PLAY:
      return ({
        ...state,
        activePad: action.padId,
        activeDescription: state.pads.find(pad => pad.padId.toUpperCase === action.padId.toUpperCase).description,
        pads: state.pads.map(e => {
          if (e.padId.toUpperCase === action.padId.toUppercase) {
            return {
              ...e,
              isPlaying: true
            }
          } else {
            return e;
          }
        }
        ),
      })
    default:
      return state;
  }

}


export default rootReducer;