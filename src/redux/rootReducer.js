
import { combineReducers } from "redux";
import { cardReducer } from "./card/cardReducer";
import { phoneIdReducer } from "./phoneId/phoneIdReducer";
import {pageReducer} from "./page/pageReducer";

export const rootReducer = combineReducers({
  cards: cardReducer,
  phoneId: phoneIdReducer,
  page: pageReducer
});