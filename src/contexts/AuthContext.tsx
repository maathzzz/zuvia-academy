"use client"
import axios from "axios";
import { createContext, ReactNode, useState } from "react";


type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean,
    signIn: (data : SignInData) => Promise<string>,
}

interface CyclesContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType) 

export function AuthProvider({children} : CyclesContextProviderProps) {
    const [ isAuthenticated, setisAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    async function signIn(data : SignInData) {
        let token = ''

        const loginEndpoint = 'https://zuvia-academy.vercel.app/users/login'
        // const credentials = {
        //     email: 'matheus.amorim@zuvia.com.br',
        //     password: '123456'
        // };
        
        axios.post(loginEndpoint, data).then(response => {
            token = response.data.token
            console.log(token)
        }).catch(error => {
            console.log(error)
        })


        return token;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}