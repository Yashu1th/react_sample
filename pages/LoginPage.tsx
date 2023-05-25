import React from "react";

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};
