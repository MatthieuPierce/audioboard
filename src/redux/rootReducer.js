import { PLAY, FETCH_JSON_REQUEST, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './constants';

const baseState = {
  pads: [],
  activePad: '',
  loading: false,
  error: ''
}

const tempBaseState = {
  activePad: '',
  activeDescription: 'starting description',
  loading: false,
  error: '',
  pads: [
    {
      "keyId": "Q",
      "audioSrc": "./q-audio.mkv",
      "isPlaying": false,
      "description": "description of"
    },
    {
      "keyId": "W",
      "audioSrc": "./w-audio.mkv",
      "isPlaying": false,
      "description": "description of"
  
    },
    {
      "keyId": "E",
      "audioSrc": "./e-audio.mkv",
      "isPlaying": false,
      "description": "description of"
  
    },
    {
      "keyId": "A",
      "audioSrc": "./a-audio.mkv",
      "isPlaying": false,
      "description": "description of"
  
    },
    {
      "keyId": "S",
      "audioSrc": "./s-audio.mkv",
      "isPlaying": false,
      "description": "description of"
  
    },
    {
      "keyId": "D",
      "audioSrc": "./d-audio.mkv",
      "isPlaying": false,
      "description": "description of"
  
    },
    {
      "keyId": "Z",
      "audioSrc": "./z-audio.mkv",
      "isPlaying": false,
      "description": "description of"
  
    },
    {
      "keyId": "X",
      "audioSrc": "./x-audio.mkv",
      "isPlaying": false,
      "description": "description of"
  
    },
    {
      "keyId": "C",
      "audioSrc": "./c-audio.mkv",
      "isPlaying": false,
      "description": "description of"
  
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
        activeDescription: state.pads.find(pad => pad["keyId"] === action.padId).description,
        pads: state.pads.map(e => {
          if (e.padId === action.padId) {
            return {
              ...e,
              isPlaying: true
            }
          } else {
            return e;
          }
        }
        )
      })
    default:
      return state;
  }

}


export default rootReducer;