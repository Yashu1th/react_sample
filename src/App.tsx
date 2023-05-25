import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { fetchUserProfile } from "./store/user/types.ts";
import { login, logout } from "./store/auth/actions";
import { AppHeader } from "./components/AppHeader";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { NotificationPage } from "./pages/NotificationPage";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    // Fetch user profile when the app starts
    if (isLoggedIn) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, isLoggedIn]);

  const handleLogin = () => {
    // Simulate successful login
    dispatch(login());
  };

  const handleLogout = () => {
    // Simulate logout
    dispatch(logout());
  };

  return (
    <Router>
      <AppHeader isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? (
            <Redirect to="/home" />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )}
        </Route>
        <Route exact path="/signup">
          {isLoggedIn ? <Redirect to="/home" /> : <SignupPage />}
        </Route>
        <Route exact path="/home">
          {isLoggedIn ? <HomePage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/notification">
          {isLoggedIn ? <NotificationPage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
