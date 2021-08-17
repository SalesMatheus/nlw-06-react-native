import React, 
{ 
    createContext,
    useContext,
    useState,
    ReactNode
} from "react";

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type AuthContextData = {
    user: User;
}

type AuthProvideProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProvideProps) {
    const [user, setUser] = useState<User>({} as User);

    return(
        <AuthContext.Provider value = {{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}
