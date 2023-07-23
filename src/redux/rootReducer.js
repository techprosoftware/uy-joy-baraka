
import { combineReducers } from "redux";
import { cardReducer } from "./card/cardReducer";
import { phoneIdReducer } from "./phoneId/phoneIdReducer";
import {pageReducer} from "./page/pageReducer";
import { cityReducer } from "./city/citydReducer";

export const rootReducer = combineReducers({
  cards: cardReducer,
  city: cityReducer,
  phoneId: phoneIdReducer,
  page: pageReducer
});