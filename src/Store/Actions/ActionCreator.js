import { SAVE_USERS } from "./ActionTypes";

export const getUsersAction = (response) => ({
  type: SAVE_USERS,
  payload: { response },
});
