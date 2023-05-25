import { AuthState, AuthActionTypes, LOGIN, LOGOUT } from "./types";

const initialState: AuthState = {
  isLoggedIn: false
};

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
