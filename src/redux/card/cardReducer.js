import { SET_CARD, REMOVE_CARD } from "./cardType";

const initialState = {
  card: {},
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD:
      return {
        ...state,
        card: action.payload,
      };

    case REMOVE_CARD:
      return {
        ...state,
        card: action.payload,
      };
    default:
      return state;
  }
};