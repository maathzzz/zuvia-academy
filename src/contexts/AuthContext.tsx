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
    tokenExists: string,
    signIn: (data : SignInData) => Promise<string>,
    logOut: () => void,
}

interface CyclesContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType) 

export function AuthProvider({children} : CyclesContextProviderProps) {
    const [ isAuthenticated, setisAuthenticated ] = useState(false);
    const [ tokenExists, setTokenExists ] = useState(String)

    const toast = useToast()

    async function signIn(data : SignInData) {
        const loginEndpoint = 'https://zuvia-academy.vercel.app/users/login'
        
        axios.post(loginEndpoint, data).then(function (response){
            const token = response.data.usersAuth
            localStorage.setItem('token', token);
            setTokenExists(token)
            setisAuthenticated(true)
            console.log(token)

        }).catch(function (error){
            // alert(error.response.data.message)
            setisAuthenticated(false)
            toast({
                title: 'Falha ao entrar',
                description: "Usuário ou senha podem estar incorretos.",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        })

        return tokenExists;
    }

    function logOut() {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const item = localStorage.getItem('key')
        }
        
        localStorage.removeItem('token')
        setisAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, tokenExists, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}