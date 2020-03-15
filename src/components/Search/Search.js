import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterCompanies } from "../../redux/data/dataUtils";

export const Search = () => {
  const dispatch = useDispatch();
  const companies = useSelector(store => store.data.companies);

  const handleChange = async e => {
    dispatch(filterCompanies(e.target.value, companies));
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Filter"
        onChange={e => handleChange(e)}
      />
    </div>
  );
};
