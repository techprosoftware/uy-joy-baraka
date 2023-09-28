import { SET_LIKED_CARDS } from "./likedType"

const initialState = {
  liked: [],
}

export const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKED_CARDS:
      return {
        ...state,
        liked: action.payload,
      }
    default:
      return state
  }
}
