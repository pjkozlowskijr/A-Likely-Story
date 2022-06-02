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

const book1 = {
    id: 1,
    title: 'book1',
    subject: 'subject1',
    summary: 'book1 summary here',
    pages: 200,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71QcX1DbklL.jpg',
    author_first: 'first',
    author_last: 'last'
  }

export default function SingleBook() {
  return (
    <Card sx={{display:'flex', width:'80%', margin:'auto'}}>
      <CardMedia
        component="img"
        sx={{width:'30%', height:500, objectFit:'contain', m:1}}
        image={book1.image}
        alt={`Book cover for ${book1.title}`}
      />
      <CardContent sx={{width:'70%'}}>
        <Typography variant="h2" textAlign='center'>
          {book1.title}
        </Typography>
        <Typography variant="h5" color="text.secondary" textAlign='center'>
          By: {book1.author_first+' '+book1.author_last}
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
          <strong>Pages:</strong> {book1.pages}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <strong>Summary:</strong> {book1.summary}
        </Typography>
      </CardContent>
    </Card>
  );
}
