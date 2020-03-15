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

export const filterCompanies = (search, companies) => async dispatch => {
  try {
    dispatch(actions.setSearch(search));
    const filteredCompanies = await filterArray(search, companies);
    dispatch(actions.setFilteredCompanies(filteredCompanies));
  } catch (error) {}
};

const filterArray = async (search, array) => {
  const filteredArray = await array.filter(element =>
    element.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredArray);
  return filteredArray;
};
