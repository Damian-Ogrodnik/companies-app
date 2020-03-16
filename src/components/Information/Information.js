import React from "react";
import { IconContext } from "react-icons";
import { MdError } from "react-icons/md";

export const Information = ({ msg }) => {
  return (
    <div className="information">
      <IconContext.Provider value={{ className: "information__icon" }}>
        <MdError />
      </IconContext.Provider>
      <p>{msg}</p>
    </div>
  );
};
