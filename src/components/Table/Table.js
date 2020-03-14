import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCompanies } from "../../redux/data/dataUtils";
import { TableRow } from "../TableRow";

export const Table = () => {
  const dispatch = useDispatch();
  const companies = useSelector(store => store.data.companies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <div className="table">
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
    </div>
  );
};
