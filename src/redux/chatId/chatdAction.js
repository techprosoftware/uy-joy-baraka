import { SET_CHAT } from "./chatType";

export const chatId = (chat) => {
  return {
    type: SET_CHAT,
    payload: chat,
  };
};

