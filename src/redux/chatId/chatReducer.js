
import {SET_CHAT} from "./chatType";

const initialState = {
  chat: {}
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT:
      return {
        ...state,
        chat: action.payload,
      };

    default:
      return state;
  }
};