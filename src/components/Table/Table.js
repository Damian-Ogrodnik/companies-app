/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCompanies } from "../../redux/data/dataUtils";
import { paginateCompanies } from "../../redux/pagination/paginationUtils";

import { TableRow } from "../TableRow";
import { Pagination } from "../Pagination";
import { withLoading } from "../withLoading";

const Table = () => {
  const dispatch = useDispatch();
  const companies = useSelector(store => store.data.companies);
  const filteredCompanies = useSelector(store => store.data.filteredCompanies);
  const paginatedCompanies = useSelector(
    store => store.pagination.paginatedCompanies
  );

  useEffect(() => {
    if (!companies.length) dispatch(fetchCompanies());
  }, []);

  useEffect(() => {
    filteredCompanies
      ? dispatch(paginateCompanies(1, filteredCompanies))
      : dispatch(paginateCompanies(1, companies));
  }, [companies, dispatch, filteredCompanies]);
  return (
    <ul>
      <TableRow
        id={"ID"}
        name={"NAME"}
        city={"CITY"}
        income={"INCOME"}
        header={true}
        details={"MORE"}
      />
      {paginatedCompanies.map(({ id, name, city, income }) => (
        <TableRow key={id} id={id} name={name} city={city} income={income} />
      ))}
      <Pagination
        companies={filteredCompanies ? filteredCompanies : companies}
      />
    </ul>
  );
};

const tableWithLoading = withLoading(Table);
export { tableWithLoading as Table };
