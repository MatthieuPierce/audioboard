import { PLAY, FETCH_JSON_REQUEST, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './constants';

export const playPad = (padId) => {
  return {
    type: PLAY,
    "padId": padId
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
    payload: error
  }
}

export const fetchPads = () => {
  return function(dispatch) {
    dispatch(fetchJsonRequest());
    fetch('./pads.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json)
    .then(data => {
      console.log(data);
      dispatch(fetchJsonSuccess(data));
    })
    .catch(error => dispatch(fetchJsonFailure(error.message)))
  }
}