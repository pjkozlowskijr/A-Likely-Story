import React from 'react'
import BrowseAllBooks from '../components/BrowseAllBooks'
import {Box, Typography} from '@mui/material'

export default function BrowseBooks() {
  return (
      <>
        <Typography variant='h2'>Browse our book selection...</Typography>
        <BrowseAllBooks/>
      </>
  )
}
