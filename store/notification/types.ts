export const FETCH_NOTIFICATIONS_SUCCESS =
  "notification/FETCH_NOTIFICATIONS_SUCCESS";

export interface Notification {
  id: number;
  message: string;
}

export interface NotificationState {
  notifications: Notification[];
}

interface FetchNotificationsSuccessAction {
  type: typeof FETCH_NOTIFICATIONS_SUCCESS;
  payload: Notification[];
}

export type NotificationActionTypes = FetchNotificationsSuccessAction;
