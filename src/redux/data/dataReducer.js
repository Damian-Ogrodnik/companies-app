import * as types from "./dataTypes";

const initialState = {
  companies: [],
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
        companies: payload.companies
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
