export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";

export interface AuthState {
  isLoggedIn: boolean;
}

interface LoginAction {
  type: typeof LOGIN;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginAction | LogoutAction;
