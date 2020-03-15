import * as types from "./dataCompanyTypes";

export const startFetch = () => {
  return {
    type: types.START_FETCH_COMPANY_DETAILS
  };
};

export const fetchSuccess = companyDetails => {
  return {
    type: types.FETCH_COMPANY_DETAILS_SUCCESS,
    payload: { companyDetails }
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
