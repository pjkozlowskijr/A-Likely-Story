import {useContext, useEffect} from 'react'
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';
import { AppContext } from '../context/AppContext';

export default function useCreateUser(data) {
    const {user} = useContext(AppContext)
    useEffect(
        () => {
            let response
            const source = CancelToken.source()
            if (!user && data?.first_name){
                (async () => {
                   response = await apiUser.post(data, source.token)
                   if (response){
                       console.log(`User ${data.email} created.`)
                   }else{
                       console.log('An unexpected error occured.')
                   }
                })()
            }
            return () => {source.cancel()}
        },
        [user, data]
    )
}