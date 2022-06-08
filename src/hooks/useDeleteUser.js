import {useContext, useEffect} from 'react';
import { CancelToken } from 'apisauce';
import apiUser from '../api/apiUser';
import { AppContext } from '../context/AppContext';

export default function useDeleteUser(delUser){
    const {user} = useContext(AppContext)
    useEffect(
        () => {
            let response
            const source = CancelToken.source()
            if (user?.token && delUser?.key){
                (async () => {
                    response = await apiUser.del(user.token, source.token)
                    if (response){
                        console.log(`User ${user.user_id} deleted`)
                    }else if (response === false && response !== undefined){
                        console.log('An unexpected error occured.')
                    }
                })()
            }
            return () => {source.cancel()}
        },
        [user?.token, delUser, user?.user_id]
    )
}