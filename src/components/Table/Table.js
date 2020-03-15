import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCompanies } from "../../redux/data/dataUtils";
import { paginateCompanies } from "../../redux/pagination/paginationUtils";

import { TableRow } from "../TableRow";
import { Pagination } from "../Pagination/Pagination";

export const Table = () => {
  const dispatch = useDispatch();
  const companies = useSelector(store => store.data.companies);
  const filteredCompanies = useSelector(store => store.data.filteredCompanies);
  const paginatedCompanies = useSelector(
    store => store.pagination.paginatedCompanies
  );

  useEffect(() => {
    dispatch(fetchCompanies());
    //dispatch(paginateCompanies(1, companies));
  }, [dispatch]);

  useEffect(() => {
    filteredCompanies
      ? dispatch(paginateCompanies(1, filteredCompanies))
      : dispatch(paginateCompanies(1, companies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companies, filteredCompanies]);

  return (
    <div className="table">
      <div className="table__wrapper">
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
            <TableRow
              key={id}
              id={id}
              name={name}
              city={city}
              income={income}
            />
          ))}
          <Pagination
            companies={filteredCompanies ? filteredCompanies : companies}
          />
        </ul>
      </div>
    </div>
  );
};
