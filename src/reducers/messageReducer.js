import { ADD_MESSAGE } from "../constants/messageConstants";

export const messageReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
