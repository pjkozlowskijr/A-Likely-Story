import React, { useContext } from 'react'
import { Paper, Typography } from '@mui/material'
import { AppContext } from '../context/AppContext'
import ProfileForm from '../forms/ProfileForm'

export default function Profile() {
    const {user} = useContext(AppContext)

  return (
    <Paper sx={{width:'50vw'}}>
        {(user?.token)?
        <Typography variant='h2'>Edit Profile</Typography>
        :
        <Typography variant='h2'>Register</Typography>
        }
        <ProfileForm/>
    </Paper>
  )
}