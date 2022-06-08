import React, {useContext, useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import AddRemoveListBook from './AddRemoveListBook';
import ChangeBookQty from './ChangeBookQty';
import { AppContext } from '../../context/AppContext';
import { Grid } from '@mui/material';

export default function ListBook({book}) {
  const {readingList} = useContext(AppContext)

  const [qty, setQty] = useState(readingList.filter((listBook)=>listBook.title === book.title).length)

  useEffect(
      ()=>{
          setQty(readingList.filter((listBook)=>listBook.title === book.title).length)
      },
      [readingList, book]
  )

  return (
    <Card sx={{display:'flex', width:'80%', margin:'auto'}}>
      <CardMedia
        component="img"
        sx={{width:'20%', height:'100%', objectFit:'contain', m:1}}
        image={book.img}
        alt={`Book cover for ${book.title}`}
      />
      <CardContent sx={{width:'60%'}}>
        <Typography variant="h2" textAlign='center'>
          {book.title}
        </Typography>
        <Typography variant="h5" color="text.secondary" textAlign='center'>
          By: {book.author}
        </Typography>
        <br/>
        <Divider/>
        <br/>
        <Typography variant="h6" color="text.secondary">
          <strong>Pages:</strong> {book.pages}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <strong>Summary:</strong> {book.summary}
        </Typography>
      </CardContent>
      <CardContent sx={{width:'20%'}}>
        <CardActions sx={{p:0, mt:1, justifyContent:'center'}} disableSpacing>
            <Grid container spacing={2}>
                <Grid item md={12}>
                <AddRemoveListBook book={book}/>
                </Grid>
                <Grid item md={12}>
                <ChangeBookQty qty={qty} book={book}/>
                </Grid>
            </Grid>
        </CardActions>
      </CardContent>
    </Card>
  );
}
