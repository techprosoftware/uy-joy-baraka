import {SET_PAGE, INC_PAGE} from "./pageType";

const initialState = {
  page: {},
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case INC_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};