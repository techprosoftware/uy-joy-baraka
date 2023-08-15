
import { combineReducers } from "redux";
import { cardReducer } from "./card/cardReducer";
import { phoneIdReducer } from "./phoneId/phoneIdReducer";
import {pageReducer} from "./page/pageReducer";
import { cityReducer } from "./city/citydReducer";
import { chatReducer } from "./chatId/chatReducer";

export const rootReducer = combineReducers({
  cards: cardReducer,
  city: cityReducer,
  phoneId: phoneIdReducer,
  page: pageReducer,
  chat: chatReducer
});