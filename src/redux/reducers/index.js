import { combineReducers } from "redux";
import regisReducer from "./regisReducer";
import authReducer from "./authReducer";
import { carReducer } from "./carReducer";

const rootReducer = combineReducers({
  regisReducer,
  authReducer,
  carReducer,
});

export default rootReducer;
