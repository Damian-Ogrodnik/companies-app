import * as types from "./dataTypes";

const initialState = {
  companies: [],
  loading: false,
  error: null,
  search: null,
  filteredCompanies: null
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
    case types.SET_SEARCH:
      return {
        ...state,
        search: payload.search
      };
    case types.FILTERED_COMPANIES:
      return {
        ...state,
        filteredCompanies: payload.filteredCompanies
      };

    default:
      return state;
  }
};

export default dataReducer;
