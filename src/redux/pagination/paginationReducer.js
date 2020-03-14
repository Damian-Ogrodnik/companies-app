import * as types from "./paginationTypes";

const initialState = {
  pageNumber: 1,
  paginatedCompanies: [],
  loading: false,
  error: null
};

const paginationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_PAGE:
      return {
        ...state,
        pageNumber: payload.pageNumber,
        loading: true
      };
    case types.PAGINATE_SUCCESS:
      return {
        ...state,
        loading: false,
        paginatedCompanies: payload.paginatedCompanies
      };
    case types.PAGINATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };
    default:
      return state;
  }
};

export default paginationReducer;
