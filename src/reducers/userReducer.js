import { DELETE_USER } from "../constants/userContants";

const initialState = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Joe", age: 20 },
  { id: 3, name: "Jane", age: 26 },
];

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state.filter((user) => {
        return user.id !== action.payload;
      });
    default:
      return state;
  }
};
