import * as types from "./dataCompanyTypes";

const initialState = {
  companyDetails: [],
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
        companyDetails: payload.companyDetails
      };
    case types.FETCH_COMPANY_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };
    case types.RESET:
      return {
        companyDetails: [],
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default dataComanyReducer;
