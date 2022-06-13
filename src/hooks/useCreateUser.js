import { CancelToken } from 'apisauce';
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import apiUser from '../api/apiUser';

// ##############################################################
// API hook to create user
// ##############################################################

export default function useCreateUser(data) {
    const {user, setAlert} = useContext(AppContext)
    useEffect(
        () => {
            let response
            const source = CancelToken.source()
            if (!user && data?.first_name){
                (async () => {
                   response = await apiUser.post(data, source.token)
                   if (response){
                       setAlert({msg:`User ${data.email} created.`, cat:'success'})
                   }else{
                       setAlert({msg:'An unexpected error occured.', cat:'error'})
                   }
                })()
            }
            return () => {source.cancel()}
        },
        [user, data, setAlert]
    )
}