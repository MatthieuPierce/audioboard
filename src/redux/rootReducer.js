import { PLAY, FETCH_JSON_REQUEST, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './constants';

const baseState = {
  pads: [],
  theme: 'light',
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
      action.keyId
      return ({
        ...state,
        pads: state.pads.map(e => {
          (e.keyId.toUpperCase === action.keyId.toUppercase)
          ? ({
              keyId: e.keyId,
              audioSrc: e.audioSrc,
              isPlaying: 'yes'
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