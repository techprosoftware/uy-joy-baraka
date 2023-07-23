
import {SET_CITY} from "./cityType";

const initialState = {
  city: {}
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};