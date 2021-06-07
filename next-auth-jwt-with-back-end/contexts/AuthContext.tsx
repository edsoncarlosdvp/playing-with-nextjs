import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from "../service/auth";
import { api } from "../service/api";

type User = {
    name: string;
    email: string;
    avatar_url: string;
}

type SignInData = {
    email: string;
    senha: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'appnextauth.token': token } = parseCookies()

        if (token) {
            recoverUserInformation().then(response => {
                setUser(response.user)
            })
        }
    }, [])

    async function signIn({ email, senha }: SignInData) {
        const { token, user } = await signInRequest({
            email,
            senha,
        })

        setCookie(undefined, 'appnextauth.token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        setUser(user)

        Router.push('/logged');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}