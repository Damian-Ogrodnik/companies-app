import * as types from "./dataCompanyTypes";

export const startFetch = () => {
  return {
    type: types.START_FETCH_COMPANY_DETAILS
  };
};

export const fetchSuccess = incomes => {
  return {
    type: types.FETCH_COMPANY_DETAILS_SUCCESS,
    payload: { incomes }
  };
};

export const fetchFailure = error => {
  return {
    type: types.FETCH_COMPANY_DETAILS_FAILURE,
    payload: { error }
  };
};

export const reset = () => {
  return {
    type: types.RESET
  };
};
