import { SET_PHONE } from "./phoneType";

const initialState = {
    phone: {},
  };

  export const phoneReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PHONE:
        return {
          ...state,
          phone: action.payload,
        };
  
      
      default:
        return state;
    }
  };