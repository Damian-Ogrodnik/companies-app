import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCompanies } from "../../redux/data/dataUtils";
import { paginateCompanies } from "../../redux/pagination/paginationUtils";

import { TableRow } from "../TableRow";
import { Pagination } from "../Pagination/Pagination";

export const Table = () => {
  const dispatch = useDispatch();
  const companies = useSelector(store => store.data.companies);
  const paginatedCompanies = useSelector(
    store => store.pagination.paginatedCompanies
  );

  useEffect(() => {
    dispatch(fetchCompanies());
    //dispatch(paginateCompanies(1, companies));
  }, [dispatch]);

  useEffect(() => {
    dispatch(paginateCompanies(1, companies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companies]);

  return (
    <>
      <ul className="table">
        <TableRow
          id={"ID"}
          name={"NAME"}
          city={"CITY"}
          income={"INCOME"}
          header={true}
          details={"More"}
        />
        {paginatedCompanies.map(({ id, name, city, income }) => (
          <TableRow key={id} id={id} name={name} city={city} income={income} />
        ))}
        <Pagination companies={companies} />
      </ul>
    </>
  );
};
