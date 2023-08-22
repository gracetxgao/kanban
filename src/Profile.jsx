import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
        <div>
          <h1>date and time</h1>
          <h3>hello {user.name}! here are your tasks</h3>
        </div>
    )
  );
};

export default Profile;