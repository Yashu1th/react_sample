import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const HomePage: React.FC = () => {
  const userProfile = useSelector((state: RootState) => state.user.profile);

  return (
    <div>
      <h1>Home Page</h1>
      {userProfile && (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
        </div>
      )}
    </div>
  );
};
