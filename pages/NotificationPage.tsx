import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const NotificationPage: React.FC = () => {
  const notifications = useSelector(
    (state: RootState) => state.notification.notifications
  );

  return (
    <div>
      <h1>Notification Page</h1>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
};
