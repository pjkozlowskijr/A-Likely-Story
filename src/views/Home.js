import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'

// ##############################################################
// Homepage
// ##############################################################

export default function Home({theme}) {
  return (
    <Card sx={{maxWidth:'80vw', m:'auto', mt:2}}>
      <CardContent>
        <Typography sx={{textAlign:'center'}}gutterBottom variant="h4">
          "The books that the world calls immoral are the books that show the world its own shame."
        </Typography>
        <Typography sx={{textAlign:'center', color:'rgba(0, 0, 0, 0.54)'}}gutterBottom variant="h4">
          - Oscar Wilde
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="Ban bigots, not books"
        sx={{objectFit:'contain', width:'100%'}}
        image="https://res.cloudinary.com/detcvmtip/image/upload/v1655134007/bannedbooksweek_gmle6f.png"
      />
    </Card>
  )
}
