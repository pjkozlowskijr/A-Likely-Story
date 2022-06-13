import {useContext, useEffect} from 'react';
import { CancelToken } from 'apisauce';
import apiUser from '../api/apiUser';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

// ##############################################################
// API hook to delete user
// ##############################################################

export default function useDeleteUser(delUser){
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()
    useEffect(
        () => {
            let response
            const source = CancelToken.source()
            if (user?.token && delUser?.key){
                (async () => {
                    response = await apiUser.del(user.token, source.token)
                    if (response){
                        setAlert({msg:`User ${user.user_id} deleted`, cat:'success'})
                        localStorage.clear()
                        navigate('/logout')
                    }else if (response === false && response !== undefined){
                        setAlert({msg:'An unexpected error occured.', cat:'error'})
                    }
                })()
            }
            return () => {source.cancel()}
        },
        [user?.token, delUser, user?.user_id, setAlert, navigate]
    )
}