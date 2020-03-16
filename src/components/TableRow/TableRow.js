import React, { useState } from "react";
import { CompanyDetailsModal } from "../CompanyDetailsModal";

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
          <CompanyDetailsModal
            basicData={{ id, name, city, income }}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </>
      )}
    </li>
  );
};
