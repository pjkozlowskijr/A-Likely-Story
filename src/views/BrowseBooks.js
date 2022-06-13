import React from 'react'
import Typography from '@mui/material/Typography'
import BrowseAllBooks from '../components/BrowseAllBooks'

// ##############################################################
// View to browse all books
// ##############################################################

export default function BrowseBooks() {
  return (
      <>
        <Typography variant='h2' sx={{textAlign:'center', mb:3}}>Browse our book selection...</Typography>
        <BrowseAllBooks/>
      </>
  )
}
