import {useContext, useEffect} from 'react'
import { AppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom'

// ##############################################################
// Logout
// ##############################################################

export default function Logout() {
  const {setUser, setAlert} = useContext(AppContext)

  useEffect(
      ()=>{
          setUser({})
          setAlert({msg:'You are now logged out.', cat:'success'})
      },[setUser, setAlert]
  )

  return (
    <>
        <Navigate to='/login'/>
    </>
  )
}
