import { useContext, useEffect } from 'react';
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

// ##############################################################
// API hook to login and get bearer token
// ##############################################################

export default function useLogin(loginCreds, setLoginCreds, setError, setUser) {
    const navigate = useNavigate()
    const {setAlert} = useContext(AppContext)

    useEffect(
        () => {
            const source = CancelToken.source()
            if (loginCreds.email && loginCreds.password){                
                const login = async (cancelToken) => {
                    const response = await apiUser.get(loginCreds.email, loginCreds.password, cancelToken)
                    if (response.user?.token){
                        setAlert({msg: 'You are now logged in!', cat:'success'})
                        setUser(response.user)
                        setLoginCreds({})
                        navigate('/ReactLibrary')
                    }
                    setError(response.error)
                }
                login(source.token)
            }
            return () => {source.cancel()}
        },
        [loginCreds, setLoginCreds, setError, setUser, navigate, setAlert]
    )
}
