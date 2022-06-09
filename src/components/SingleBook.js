import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useParams } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import { Box } from '@mui/system';
import Error from './Error';
import { CircularProgress } from '@mui/material';

export default function SingleBook() {
  const {bookId} = useParams()
  const {book, error} = useBooks(bookId)

  if (error){
    return(
      <Box sx={{display:'flex'}}>
        <Error>{error}</Error>
      </Box>
    )
  }

  if (!book){
    return(
      <Box sx={{display:'flex'}}>
        <CircularProgress/>
      </Box>
    )
  }

  return (
    <Card sx={{display:'flex', width:'80%', margin:'auto'}}>
      <CardMedia
        component="img"
        sx={{width:'30%', height:500, objectFit:'contain', m:1}}
        image={book.img}
        alt={`Book cover for ${book.title}`}
      />
      <CardContent sx={{width:'70%'}}>
        <Typography variant="h2" textAlign='center'>
          {book.title}
        </Typography>
        <Typography variant="h5" color="text.secondary" textAlign='center'>
          By: {book.author}
        </Typography>
        <CardActions sx={{p:0, mt:1, justifyContent:'center'}} disableSpacing>
            <IconButton aria-label="add-to-readlist">
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
            <IconButton aria-label="remove-from-readlist">
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
            <IconButton aria-label="unread">
              <VisibilityOffOutlinedIcon />
            </IconButton>
            <IconButton aria-label="read">
              <VisibilityOutlinedIcon />
            </IconButton>
        </CardActions>
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
    </Card>
  );
}
