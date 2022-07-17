import React from "react";
import AuthContext from "./AuthContext";
import { useNavigation } from "@react-navigation/native";
import {
    AuthContextProps,
    LoginData,
    User,
    DefaultStateProps,
} from "../interfaces/context";

const intialState: DefaultStateProps = {
    user: {
        id: "",
        email: "",
        name: "",
        avatar: "",
    },
    isLoggedIN: false,
};

const reducer = (
    state: DefaultStateProps,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isLoggedIN: true,
            };
        case "LOGOUT":
            return {
                ...state,
                user: {
                    id: "",
                    email: "",
                    name: "",
                    avatar: "",
                },
                isLoggedIN: false,
            };
        default:
            return state;
    }
};

export default function AuthContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = React.useReducer(reducer, intialState);

    const values = React.useMemo(() => {
        const logInhandler = async (user: LoginData) => {
            const userData: User = {
                id: "",
                email: user.email,
                name: "",
                avatar: "",
            };
            dispatch({ type: "LOGIN", payload: userData });
        };

        const logOuthandler = async () => {
            dispatch({ type: "LOGOUT" });
        };

        const sendCodeHandler = async (email: string) => {
            console.log(email);
        };

        const val: AuthContextProps = {
            user: state.user,
            isLoggedIN: state.isLoggedIN,
            login: logInhandler,
            logout: logOuthandler,
            sendCode: sendCodeHandler,
        };

        return val;
    }, [state]);

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
}
