import { ADD_MESSAGE } from "../constants/messageConstants";

export const showMsg = (msg) => {
  return {
    type: ADD_MESSAGE,
    payload: msg,
  };
};
