export interface LoginData {
    email?: string;
    password?: string;
    accountType?: string;
}

export interface User {
    id?: string;
    email?: string;
    name?: string;
    avatar?: string;
}

export interface AuthContextProps {
    user?: User;
    isLoggedIN?: boolean;
    login?: (user: LoginData) => Promise<void>;
    logout?: () => Promise<void>;
    sendCode?: (email: string) => Promise<void>;
}

export interface DefaultStateProps {
    user: User;
    isLoggedIN: boolean;
}

export interface ForgetPasswordProps {
    email: string;
}
