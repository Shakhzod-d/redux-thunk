import { getUsers } from "../Serveces";
import { getUsersAction } from "./Actions/ActionCreator";

// test
export const fetchUsers = () => async (dispatch) => {
  const response = await getUsers();
  //   console.log("response", response);
  dispatch(getUsersAction(response));
};
