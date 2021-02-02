import { PLAY, FETCH_JSON_REQUEST, FETCH_JSON_SUCCESS, FETCH_JSON_FAILURE } from './constants';

export const setPlay = (padId) => {
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
    payload: error
  }
}

export const fetchJson = () => {
  return function () {


  }
}