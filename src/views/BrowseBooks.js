import React from 'react'
import BrowseAllBooks from '../components/BrowseAllBooks'
import {Box, Typography} from '@mui/material'

export default function BrowseBooks() {
  return (
      <>
        <Typography variant='h2' sx={{textAlign:'center', mb:3}}>Browse our book selection...</Typography>
        <BrowseAllBooks/>
      </>
  )
}
