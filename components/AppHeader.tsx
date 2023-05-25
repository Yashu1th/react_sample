import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface AppHeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  isLoggedIn,
  onLogout
}) => {
  const notificationCount = useSelector(
    (state: RootState) => state.notification.notifications.length
  );

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/notification">
              Notifications{" "}
              {notificationCount > 0 && <span>({notificationCount})</span>}
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
