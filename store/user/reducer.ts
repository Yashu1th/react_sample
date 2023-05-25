import {
  UserState,
  UserActionTypes,
  FETCH_USER_PROFILE_SUCCESS
} from "./types";

const initialState: UserState = {
  profile: null
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
