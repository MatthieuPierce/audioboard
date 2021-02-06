import { PLAY, STOP, FETCH_JSON_REQUEST, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './constants';

const baseState = {
  // playCount: 0,
  activePad: '',
  activeDescription: '',
  loading: false,
  error: '',
  pads: []
}

// const tempBaseState = {
//   playCount: 0,
//   activePad: '',
//   activeDescription: '',
//   loading: false,
//   error: '',
//   pads: [
//     {
//       "keyId": "Q",
//       "audioSrc": "./audio/q-audio.mp3",
//       "isPlaying": false,
//       "description": "Q description:  It’s 1790 and If there’s one thing we don’t need here in the United States, it’s that newfangled metric system France just proposed."
//     },
//     {
//       "keyId": "W",
//       "audioSrc": "./audio/w-audio.mp3",
//       "isPlaying": false,
//       "description": "W description: It’s 1866 and if there’s one thing we don’t need here in the United States, it’s to make the metric system mandatory in this new Metric Act of 1866 we just passed."
  
//     },
//     {
//       "keyId": "E",
//       "audioSrc": "./audio/e-audio.mp3",
//       "isPlaying": false,
//       "description": "E description: It’s 1902 and if there’s one thing we don’t need here in the United States, it’s that metric system our congressional committee of scientists just begged us to pass."
  
//     },
//     {
//       "keyId": "A",
//       "audioSrc": "./audio/a-audio.mp3",
//       "isPlaying": false,
//       "description": "A description: It’s 1975 and if there’s one thing we don’t need here in the United States, it’s to give meaningful power to the Metric Conversion Act of 1975 we just passed."
  
//     },
//     {
//       "keyId": "S",
//       "audioSrc": "./audio/s-audio.mp3",
//       "isPlaying": false,
//       "description": "S description: Now that we’ve inbred wolves until they fit down rabbit holes, I’m confident we’ll draw the line here."
  
//     },
//     {
//       "keyId": "D",
//       "audioSrc": "./audio/d-audio.mp3",
//       "isPlaying": false,
//       "description": "D description: Anything can be an adult diaper if you have confidence."
  
//     },
//     {
//       "keyId": "Z",
//       "audioSrc": "./audio/z-audio.mp3",
//       "isPlaying": false,
//       "description": "Z description: If everybody rode public transit, how would they learn to drive?"
  
//     },
//     {
//       "keyId": "X",
//       "audioSrc": "./audio/x-audio.mp3",
//       "isPlaying": false,
//       "description": "X description: if scratching makes it feel better, keep doing it!"
  
//     },
//     {
//       "keyId": "C",
//       "audioSrc": "./audio/c-audio.mp3",
//       "isPlaying": false,
//       "description": "Of course we should bring it inside the city gates-- never look a gift horse in the mouth!"
  
//     }
//   ]
// }


const rootReducer = (state = baseState, action) => {
  switch (action.type) {
    case FETCH_JSON_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_JSON_SUCCESS:
      // console.log(`FETCH_JSON_SUCCESS, action.payload is:`);
      // console.log(action.payload);
      return {
        ...state,
        pads: action.payload.map(pad => {
          //assign random hue to each pad upon successful fetch
          let min = Math.ceil(0);
          let max = Math.floor(360);
          let randomHue = Math.floor(Math.random() * (max - min + 1) + min);

          // will also insert isPlaying: false state for all Pads
          return {
            ...pad,
            padHue: randomHue,
            isPlaying: false
          }
        }),
        loading: false,
        error: ''
      }
    case FETCH_JSON_FAILURE:
      return {
        ...state,
        loading: false,
        pads: [],
        error: action.payload
      }
    case PLAY:
      // console.log("starting PLAY in rootReducer");
      // console.log(`prior to PLAY return, reducer thinks this is state.pads.find(pad => pad["keyId"] === action.padId) :: ${state.pads.find(pad => pad.keyId == action.padId)}`)
      // console.log(`state.pads: ${state.pads}`);
      // console.log(`action.padId: ${action.padId}`);
      // console.log(`state.pads.find: ${state.pads.find(pad => pad.keyId === action.padId)}`);
      return ({
        ...state,
        activePad: action.padId,
        activeDescription: state.pads.find(pad => pad["keyId"] === action.padId)["description"],
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
    case STOP: 
     return ({
       ...state,
       pads: state.pads.map(e => {
        if (e.padId === action.padId) {
          return {
            ...e,
            isPlaying: false
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