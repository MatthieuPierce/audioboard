import { PLAY, FETCH_JSON_REQUEST, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './constants';

const baseState = {
  pads: [],
  activePad: '',
  loading: false,
  error: ''
}


const rootReducer = (state = baseState, action) => {
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
        pads: state.pads.map(e => {
          (e.padId.toUpperCase === action.padId.toUppercase)
          ? ({
              keyId: e.padId,
              audioSrc: e.audioSrc,
              isPlaying: true
            })
          : e;
        }
        ),
      })
    default:
      return state;
  }

}


export default rootReducer;