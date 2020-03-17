import React from "react";
import { useSelector } from "react-redux";

import { Table } from "../Table";

export const TableWrapper = () => {
  const error = useSelector(store => store.data.error);
  const loading = useSelector(store => store.data.loading);

  return (
    <div className="table">
      <div className="table__wrapper">
        <Table loading={loading} error={error} />
      </div>
    </div>
  );
};
