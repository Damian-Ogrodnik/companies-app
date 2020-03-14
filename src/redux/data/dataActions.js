import * as types from "./dataTypes";

export const startFetch = () => {
  return {
    type: types.START_FETCH
  };
};

export const fetchSuccess = companies => {
  return {
    type: types.FETCH_SUCCESS,
    payload: { companies }
  };
};

export const fetchFailure = error => {
  return {
    type: types.FETCH_FAILURE,
    payload: { error }
  };
};
