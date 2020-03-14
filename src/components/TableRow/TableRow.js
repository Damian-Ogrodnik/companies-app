import React from "react";

export const TableRow = ({
  id,
  name,
  city,
  income,
  details = false,
  header = false
}) => {
  return (
    <li className={"table__row" + (header ? " header" : "")}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{city}</p>
      <p>{income}</p>
      {details ? details : <button>Details</button>}
    </li>
  );
};
