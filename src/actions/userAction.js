import { DELETE_USER } from "../constants/userContants";

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
