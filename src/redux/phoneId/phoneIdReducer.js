import { SET_PHONE_ID } from "./phoneIdType";

const initialState = {
    phoneId: {},
  };

  export const phoneIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PHONE_ID:
        return {
          ...state,
          phoneId: action.payload,
        };
  
      
      default:
        return state;
    }
  };