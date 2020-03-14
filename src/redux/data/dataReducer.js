import * as types from "./dataTypes";

const initialState = {
  data: [],
  loading: false,
  error: null
};

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.START_FETCH:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.data
      };
    case types.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };
    default:
      return state;
  }
};

export default dataReducer;
