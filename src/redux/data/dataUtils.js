import * as actions from "./dataActions";

import axios from "axios";

import { getIncomes } from "../../services/data";

export const fetchCompanies = () => async dispatch => {
  try {
    await dispatch(actions.startFetch());
    const response = await axios.get(
      "https://recruitment.hal.skygate.io/companies"
    );
    const companiesSortedIncome = await getIncomes(response.data);
    console.log(companiesSortedIncome);
    dispatch(actions.fetchSuccess(companiesSortedIncome));
  } catch (error) {
    dispatch(actions.fetchFailure(error.message));
  }
};
