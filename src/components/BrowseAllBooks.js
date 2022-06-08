import React, {useContext} from 'react';
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
import FilterBooks from './FilterBooks';
import { Box } from '@mui/material';
import { CircularProgress } from '@mui/material';
import Error from './Error';
import { AppContext } from '../context/AppContext';

export default function BrowseAllBooks() {
  const {error, books} = useContext(AppContext)

  if (error){
    return(
      <Box sx={{display:'flex'}}>
        <Error>{error}</Error>
      </Box>
    )
  }

  if (!books){
    return(
      <Box sx={{display:'flex'}}>
        <CircularProgress/>
      </Box>
    )
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={2}>
        <FilterBooks/>
      </Grid>
      <Grid item md={10}>
        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid key={book.id} item md={3}>
              <Card key={book.id}>
                <CardActionArea>
                  <CardHeader
                  title={book.title}
                  subheader={'By: '+book.author}
                  />
                  <CardMedia
                  component='img' image={book.img} alt={`Book cover for ${book.title}`} sx={{objectFit:'contain', height:250}}
                  />
                </CardActionArea>
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
