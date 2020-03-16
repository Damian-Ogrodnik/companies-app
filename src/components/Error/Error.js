import React from "react";
import { IconContext } from "react-icons";
import { MdError } from "react-icons/md";

export const Error = () => {
  return (
    <div className="error">
      <IconContext.Provider value={{ className: "error__icon" }}>
        <MdError />
      </IconContext.Provider>
      <p>Ooops... Something went wrong.</p>
      <p>Try again later.</p>
    </div>
  );
};
