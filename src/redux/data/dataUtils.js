import * as actions from "./dataActions";

import axios from "axios";

import { getIncomes } from "../../services/data";

export const fetchCompanies = () => async dispatch => {
  try {
    await dispatch(actions.startFetch());
    const response = await axios.get(
      "https://recruitment.hal.skygate.io/companiesss"
    );
    const companiesSortedIncome = await getIncomes(response.data);
    dispatch(actions.fetchSuccess(companiesSortedIncome));
  } catch (error) {
    dispatch(actions.fetchFailure(error.message));
  }
};

export const filterCompanies = (search, companies) => async dispatch => {
  try {
    const filteredCompanies = await filterArray(search, companies);
    dispatch(actions.setFilteredCompanies(filteredCompanies));
  } catch (error) {
    console.log(error);
  }
};

const filterArray = async (search, array) => {
  const filteredArray = await array.filter(element =>
    element.name.toLowerCase().includes(search.toLowerCase())
  );
  return filteredArray;
};
