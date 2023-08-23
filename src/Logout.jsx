import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { isAuthenticated } = useAuth0();

  const { logout } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <button className="flex justify-center bg-blue-300 p-3 mt-8 ml-8 rounded-md w-24"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>         
      </div>
            
    )
  );
};

export default LogoutButton;