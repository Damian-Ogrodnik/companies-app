import React from "react";
import "./css/main.css";
import { Search } from "./components/Search";
import { Table } from "./components/Table/Table";

export const App = () => {
  return (
    <div className="App">
      <Search />
      <Table />
    </div>
  );
};
