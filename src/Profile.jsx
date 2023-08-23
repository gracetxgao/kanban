import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import moment from 'moment';
import LiveClockUpdate from "./components/LiveClockUpdate";


const Profile = () => {
    const date = moment().format("dddd MMM DD YYYY")
    const day = moment().day()

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
            <h1 className="flex justify-center text-2xl mt-11">{date}</h1>
            <h1 className="flex justify-center text-6xl mt-5"><LiveClockUpdate /></h1>
            <h3 className="flex justify-center text-xl mt-5">Hello {user.name}, here are your tasks for today:</h3>
            </div>
        )
    );
};

export default Profile;