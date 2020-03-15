import * as types from "./dataCompanyTypes";

const initialState = {
  incomes: [],
  loading: false,
  error: null
};

const dataComanyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.START_FETCH_COMPANY_DETAILS:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        incomes: payload.incomes
      };
    case types.FETCH_COMPANY_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };
    case types.RESET:
      return {
        incomes: [],
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default dataComanyReducer;
