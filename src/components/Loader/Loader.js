import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

export const Loader = () => {
  return (
    <div className="loader">
      <FadeLoader size={25} color={"#e2dd28"} loading={true} />
    </div>
  );
};
