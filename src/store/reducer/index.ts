import { combineReducers } from "redux";
import { shopReducer } from "./reducer";

export const rootReducer = combineReducers({
  shop: shopReducer,
});