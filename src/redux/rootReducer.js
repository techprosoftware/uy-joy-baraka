import { combineReducers } from "redux";
import { cardReducer } from "./card/cardReducer";
import { phoneReducer } from "./phoneNumber/phoneReducer";

export const rootReducer = combineReducers({
  cards: cardReducer,
  phone: phoneReducer
});