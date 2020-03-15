import * as actions from "./dataCompanyActions";

import axios from "axios";

export const fetchCompanyDetails = id => async dispatch => {
  try {
    await dispatch(actions.startFetch());
    const response = await axios.get(
      `https://recruitment.hal.skygate.io/incomes/${id}`
    );
    dispatch(actions.fetchSuccess(response.data.incomes));
  } catch (error) {
    dispatch(actions.fetchFailure(error.message));
  }
};

export const setDates = (beginDate, endDate) => async dispatch => {
  try {
    dispatch(actions.setBeginDate(beginDate));
    dispatch(actions.setEndDate(endDate));
  } catch (error) {
    console.log(error);
  }
};
