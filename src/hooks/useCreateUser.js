import { CancelToken } from 'apisauce';
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import apiUser from '../api/apiUser';
import { useNavigate } from 'react-router-dom';

// ##############################################################
// API hook to create user
// ##############################################################

export default function useCreateUser(data) {
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()
    useEffect(
        () => {
            let response
            console.log('trying to run')
            const source = CancelToken.source()
            if (data?.first_name){
                (async () => {
                   response = await apiUser.post(data, source.token)
                   if (response){
                        console.log(response)
                       setAlert({msg:`User ${data.email} created.`, cat:'success'})
                   }else{
                        console.log(response)
                       setAlert({msg:'An unexpected error occured.', cat:'error'})
                   }
                })()
                navigate('/login')
            }
            return () => {source.cancel()}
        },
        [user, data, setAlert, navigate]
    )
}