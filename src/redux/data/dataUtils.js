import * as actions from "./dataActions";

import axios from "axios";

export const fetchCompanies = () => async dispatch => {
  try {
    await dispatch(actions.startFetch());
    const response = await axios.get(
      "https://recruitment.hal.skygate.io/companies"
    );
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchFailure(error.message));
  }
};
