import React, { useEffect } from 'react';
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';

export default function useLogin(loginCreds, setLoginCreds, setError, setUser) {
    const login = async (cancelToken) => {
        const response = await apiUser.get(loginCreds.email, loginCreds.password, cancelToken)
        console.log(response)
        if (response.user?.token){
            console.log('Logged in')
            setUser(response.user)
            setLoginCreds({})
        }setError(response.error)
    }

    useEffect(
        () => {
            const source = CancelToken.source()
            if (loginCreds.email && loginCreds.password)
            login(source.token)
            return () => {source.cancel()}
        },
        [loginCreds, setLoginCreds, setError, setUser]
    )
}
