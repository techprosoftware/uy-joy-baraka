import { combineReducers } from "redux";
import { cardReducer } from "./card/cardReducer";

export const rootReducer = combineReducers({
  cards: cardReducer,
});