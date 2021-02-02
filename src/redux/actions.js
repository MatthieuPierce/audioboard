import { PLAY, FETCH_JSON_REQUEST, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './constants';

export const playPad = (padId) => {
  return {
    type: PLAY,
    padId: padId
  }
}

export const fetchJsonRequest = () => {
  return {
    type: FETCH_JSON_REQUEST
  }
}

export const fetchJsonSuccess = (data) => {
  return {
    type: FETCH_JSON_SUCCESS,
    payload: data
  }
}

export const fetchJsonFailure = (error) => {
  return {
    type: FETCH_JSON_FAILURE,
    payload: error.message
  }
}

export const fetchPads = () => {
  dispatch(fetchJsonRequest());
  return function () {
    fetch('./pads.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json)
    .then(data => dispatch(fetchJsonSuccess(data)))
    .catch(error => dispatch(fetchJsonFailure(error)))
  }
}