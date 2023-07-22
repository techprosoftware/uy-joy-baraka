import { combineReducers } from "redux";
import { cardReducer } from "./card/cardReducer";
import { phoneIdReducer } from "./phoneId/phoneIdReducer";

export const rootReducer = combineReducers({
  cards: cardReducer,
  phoneId: phoneIdReducer
});