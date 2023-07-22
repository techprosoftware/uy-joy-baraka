import { SET_PAGE, INC_PAGE } from "./pageType.js";

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const incPage = (page) => {
  return {
    type: INC_PAGE,
    payload: page += 1,
  };
};