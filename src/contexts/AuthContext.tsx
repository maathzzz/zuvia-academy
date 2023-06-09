"use client"
import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import { useToast } from '@chakra-ui/react'
import Router from 'next/router'
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation'


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
    const [ tokenExists, setTokenExists ] = useState(String)

    async function signIn(data : SignInData) {
        const loginEndpoint = 'https://zuvia-academy.vercel.app/users/login'
        
        axios.post(loginEndpoint, data).then(function (response){

            const token = response.data.token
            setTokenExists(token)
            setisAuthenticated(true)

        }).catch(function (error) {
            console.log(error)
            setisAuthenticated(false)
        })

        return tokenExists;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}