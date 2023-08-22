import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
    const { isAuthenticated } = useAuth0();

    const { loginWithRedirect } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>Log In</button>
        )
    );
};

export default LoginButton;