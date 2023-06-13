import { REMOVE_CARD, SET_CARD } from "./cardType";

export const setCard = (card) => {
  return {
    type: SET_CARD,
    payload: card,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_CARD,
    payload: "",
  };
};