import { SET_LIKED_CARDS } from "./likedType"

export const setLikedCard = (liked) => {
  return {
    type: SET_LIKED_CARDS,
    payload: liked,
  }
}
