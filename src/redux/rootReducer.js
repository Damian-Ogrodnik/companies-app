import { combineReducers } from "redux";

import dataReducer from "./data/dataReducer";
import paginationReducer from "./pagination/paginationReducer";
import dataCompanyReducer from "./dataCompany/dataCompanyReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  pagination: paginationReducer,
  companyDetails: dataCompanyReducer
});

export default rootReducer;
