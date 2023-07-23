import {SET_CITY } from "./cityType";

export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

