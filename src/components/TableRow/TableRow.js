import React from "react";

export const TableRow = ({
  id,
  name,
  city,
  details = false,
  header = false
}) => {
  return (
    <li className={"table__row" + (header ? " header" : "")}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{city}</p>
      {details ? details : <button>Details</button>}
    </li>
  );
};
