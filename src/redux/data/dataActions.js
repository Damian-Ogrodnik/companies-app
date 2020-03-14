import * as types from "./dataTypes";

export const startFetch = () => {
  return {
    type: types.START_FETCH
  };
};

export const fetchSuccess = data => {
  return {
    type: types.FETCH_SUCCESS,
    payload: { data }
  };
};

export const fetchFailure = error => {
  return {
    type: types.FETCH_FAILURE,
    payload: { error }
  };
};
