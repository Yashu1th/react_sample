import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";
import notificationReducer from "./notification/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  notification: notificationReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
