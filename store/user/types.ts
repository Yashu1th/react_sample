export const FETCH_USER_PROFILE_SUCCESS = "user/FETCH_USER_PROFILE_SUCCESS";

export interface UserProfile {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  profile: UserProfile | null;
}

interface FetchUserProfileSuccessAction {
  type: typeof FETCH_USER_PROFILE_SUCCESS;
  payload: UserProfile;
}

export type UserActionTypes = FetchUserProfileSuccessAction;
