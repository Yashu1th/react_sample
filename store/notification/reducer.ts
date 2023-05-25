import {
  NotificationState,
  NotificationActionTypes,
  FETCH_NOTIFICATIONS_SUCCESS
} from "./types";

const initialState: NotificationState = {
  notifications: []
};

const notificationReducer = (
  state = initialState,
  action: NotificationActionTypes
): NotificationState => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.payload
      };
    default:
      return state;
  }
};

export default notificationReducer;
