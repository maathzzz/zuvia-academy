"use client"
import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import { useToast } from '@chakra-ui/react'
import { redirect } from 'next/navigation';

type RegisterData = {
    name: string,
    email: string,
    password: string
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean,
    tokenExists: string,
    registerUser: (data : RegisterData) => void,
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

    async function registerUser(data : RegisterData){
        const registerEndpoint = 'https://zuvia-academy.vercel.app/users/register'

        axios.post(registerEndpoint, data).then(function (response){
            console.log(response.data.message)
            toast({
                title: 'Cadastro concluído!',
                description: "Usuário criado.",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })

        }).catch(function (error){
            console.log(error)
            toast({
                title: 'Falha ao criar cadastro!',
                description: "E-mail já cadastrado.",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        })
    }

    async function signIn(data : SignInData) {
        const loginEndpoint = 'https://zuvia-academy.vercel.app/users/login'
        
        axios.post(loginEndpoint, data).then(function (response){
            const token = response.data.usersAuth
            console.log(response.status)
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
        <AuthContext.Provider value={{ isAuthenticated, signIn, tokenExists, logOut, registerUser }}>
            {children}
        </AuthContext.Provider>
    )
}