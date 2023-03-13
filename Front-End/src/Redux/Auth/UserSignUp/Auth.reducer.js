import { user_signup_isLoading } from "./Auth.actionType";

const initaialState = {
  User_isLoading: false,
};
export const userSignupReducer = (state = initaialState, { type, payload }) => {
  switch (type) {
    case user_signup_isLoading:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state;
  }
};


