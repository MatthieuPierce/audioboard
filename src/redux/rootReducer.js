import { PLAY, FETCH_JSON_REQUEST, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './constants';

const baseState = {
  pads: [
    {
      keyId: 'q',
      audioSrc: 'q-audio.mkv',
      isPlaying: 'no'

    },
    {
      keyId: 'w',
      audioSrc: 'w-audio.mkv',
      isPlaying: 'no'

    },
    {
      keyId: 'e',
      audioSrc: 'e-audio.mkv',
      isPlaying: 'no'

    },
    {
      keyId: 'a',
      audioSrc: 'a-audio.mkv',
      isPlaying: 'no'

    },
    {
      keyId: 's',
      audioSrc: 's-audio.mkv',
      isPlaying: 'no'

    },
    {
      keyId: 'd',
      audioSrc: 'd-audio.mkv',
      isPlaying: 'no'

    },
    {
      keyId: 'z',
      audioSrc: 'z-audio.mkv',
      isPlaying: 'no'

    },
    {
      keyId: 'x',
      audioSrc: 'x-audio.mkv',
      isPlaying: 'no'

    },
    {
      keyId: 'c',
      audioSrc: 'c-audio.mkv',
      isPlaying: 'no'

    }
  ],
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
        theme: state.theme
      })
    default:
      return state;
  }

}


export default rootReducer;