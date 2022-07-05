import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'

// ##############################################################
// Homepage
// ##############################################################

export default function Home() {
  return (
    <Card sx={{maxWidth:'80vw', m:'auto', mt:2}}>
      <CardContent>
        <Typography sx={{textAlign:'center'}} variant="h4">
          Welcome to A Likely Story! Please log in to begin adding books to your reading list. Enjoy!
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="Ban bigots, not books"
        sx={{objectFit:'contain', width:'100%'}}
        image="https://res.cloudinary.com/detcvmtip/image/upload/v1657050201/bookstore/books-g542de95ed_1920_o8fbdt.png"
      />
    </Card>
  )
}
