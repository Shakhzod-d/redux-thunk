import { SAVE_USERS } from "../Actions/ActionTypes";

const initialState = {
  users: [],
};

// const getAllUsers = (state, data) => {
//   return {
//     users: data,
//   };
// };

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USERS:
      // console.log("action.payload.response", action.payload.response);
      return { ...state, users: action.payload.response };
    default:
      return state;
  }
};
