import { combineReducers } from "redux";

import dataReducer from "./data/dataReducer";
import paginationReducer from "./pagination/paginationReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  pagination: paginationReducer
});

export default rootReducer;
