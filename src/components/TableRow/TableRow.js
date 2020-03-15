import React, { useState } from "react";
import { CompanyDetails } from "../CompanyDetails";

export const TableRow = ({
  id,
  name,
  city,
  income,
  details = false,
  header = false
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <li className={"table__row" + (header ? " header" : "")}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{city}</p>
      <p>{income}</p>
      {details ? (
        details
      ) : (
        <>
          <button onClick={() => setOpenModal(true)}>Details</button>
          <CompanyDetails
            basicData={{ id, name, city, income }}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </>
      )}
    </li>
  );
};
