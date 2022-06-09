import React from 'react'
import LoginForm from '../forms/LoginForm'
import { Paper, Typography } from '@mui/material'

export default function Login() {
  return (
    <Paper sx={{width:'50vw'}}>
        <Typography variant='h2'>Login</Typography>
        <LoginForm/>
    </Paper>
  )
}
