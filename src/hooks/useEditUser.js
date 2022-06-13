import {useContext, useEffect} from 'react'
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';
import { AppContext } from '../context/AppContext';

// ##############################################################
// API hook to edit user
// ##############################################################

export default function useEditUser(data) {
    const {user, setAlert} = useContext(AppContext)
    useEffect(
        () => {
            let response
            const source = CancelToken.source()
            if (user?.token && data?.first_name){
                (async () => {
                   response = await apiUser.put(user.token, data, source.token)
                   if (response){
                       setAlert({msg:`User ID ${user.user_id} edited.`, cat:'success'})
                   }else{
                       setAlert({msg:'An unexpected error occured.', cat:'error'})
                   }
                })()
            }
            return () => {source.cancel()}
        },
        [user?.token, user?.user_id, data, setAlert]
    )
}
