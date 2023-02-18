import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux";
import logger from "redux-logger";
import AuthReducer from "./Auth/AuthReducer";
// import ReportReducer from "./Reducer/ReportReducer";

const combinedata = combineReducers({
  Login:AuthReducer,
//   Report:ReportReducer
})
const store = createStore(combinedata,applyMiddleware(logger)) ;


export { store };