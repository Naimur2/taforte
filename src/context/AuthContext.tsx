import { AuthContextProps } from "../interfaces/context";
import React from "react";

const AuthContext = React.createContext<AuthContextProps>({
    user: {
        id: "",
        email: "",
        name: "",
        avatar: "",
    },
    isLoggedIN: false,
    logIn: () => {},
    logOut: () => {},
});

export default AuthContext;
