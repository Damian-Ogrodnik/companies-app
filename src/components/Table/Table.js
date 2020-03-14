import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCompanies } from "../../redux/data/dataUtils";
import { TableRow } from "../TableRow";
import { Pagination } from "../Pagination/Pagination";

export const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const dispatch = useDispatch();
  const companies = useSelector(store => store.data.companies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <>
      <Pagination companies={companies} />
      <ul className="table">
        <TableRow
          id={"ID"}
          name={"NAME"}
          city={"CITY"}
          header={true}
          details={"More"}
        />
        {companies.map(({ id, name, city }) => (
          <TableRow key={id} id={id} name={name} city={city} />
        ))}
      </ul>
    </>
  );
};
