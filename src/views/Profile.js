import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ProfileForm from '../forms/ProfileForm'

// ##############################################################
// Register OR edit profile (determined by user token)
// ##############################################################

export default function Profile() {
    const {user} = useContext(AppContext)

  return (
    <Paper sx={{width:'50vw', p:2, m:'auto', mt:3}}>
        {(user?.token)?
        <Typography variant='h3' sx={{fontWeight:'bold'}}>Edit Profile</Typography>
        :
        <Typography variant='h3' sx={{fontWeight:'bold'}}>Register</Typography>
        }
        <ProfileForm user={user}/>
    </Paper>
  )
}