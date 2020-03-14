import React from "react";
import { Provider } from "react-redux";
import "./css/main.css";

import store from "./redux/store";

import { Search } from "./components/Search";
import { Table } from "./components/Table";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Search />
        <Table />
      </div>
    </Provider>
  );
};
