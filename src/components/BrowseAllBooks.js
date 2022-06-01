import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';
import { CardActionArea } from '@mui/material';

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
const book2 = {
  id: 2,
  title: 'book2',
  subject: 'subject2',
  summary: 'book2 summary here',
  pages: 200,
  image: 'https://m.media-amazon.com/images/I/51TMmMNtZiL._AC_SY780_.jpg',
  author_first: 'first',
  author_last: 'last'
}
const book3 = {
  id: 3,
  title: 'book3',
  subject: 'subject3',
  summary: 'book3 summary here',
  pages: 200,
  image: 'https://images-na.ssl-images-amazon.com/images/I/91b4gYTeN1L.jpg',
  author_first: 'first',
  author_last: 'last'
}
const book4 = {
  id: 4,
  title: 'book4',
  subject: 'subject4',
  summary: 'book4 summary here',
  pages: 200,
  image: 'https://images-na.ssl-images-amazon.com/images/I/81StSOpmkjL.jpg',
  author_first: 'first',
  author_last: 'last'
}
const book5 = {
  id: 5,
  title: 'book5',
  subject: 'subject5',
  summary: 'book5 summary here',
  pages: 200,
  image: 'https://images-na.ssl-images-amazon.com/images/I/71v0sfhOV3L.jpg',
  author_first: 'first',
  author_last: 'last'
}

const books = [book1, book2, book3, book4, book5]

export default function BrowseAllBooks() {
    return (
        <Grid container spacing={2}>
            {books.map((book) => (
            <Grid key={book.id} item md={3}>
                <Card>
                  <CardActionArea>
                    <CardHeader
                        title={book.title}
                        subheader={'By: '+book.author_first+' '+book.author_last}
                    />
                    <CardMedia
                      component='img' image={book.image} alt={`Book cover for ${book.title}`} sx={{objectFit:'contain', height:250}}
                    />
                    <CardActions disableSpacing>
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
                  </CardActionArea>
                </Card>
            </Grid>
            ))}
        </Grid>
    );
}
