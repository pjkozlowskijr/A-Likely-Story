import React, {useContext, useState} from 'react';
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
import { useNavigate } from 'react-router-dom';
import Autocomplete from './Autocomplete'
import { Button } from '@mui/material';
import { toTitleCase } from '../helpers';

export default function BrowseAllBooks() {
  const {error, books} = useContext(AppContext)
  const {addToList, removeOneFromList, readingList} = useContext(AppContext)
  const navigate = useNavigate()

  const handleAddToList = (book) => {
    addToList(book)
  }

  const handleRemoveOneFromList = (book) => {
    removeOneFromList(book)
  }

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
        <Autocomplete/>
        <FilterBooks/>
      </Grid>
      <Grid item md={10}>
        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid key={book.title} item md={3}>
              <Card key={book.title} sx={{height:'60vh', display:'flex', flexDirection:'column', justifyContent:'space-between', p:2}}>
                <CardActionArea onClick={()=>{navigate('/book/'+book.id)}}>
                  <CardHeader
                  title={
                    toTitleCase(book.title)
                  }
                  subheader={'By: '+book.author}
                  sx={{p:0}}
                  titleTypographyProps={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}
                  subheaderTypographyProps={{fontSize: 16, textAlign: 'center'}}
                  />
                </CardActionArea>
                <CardActionArea onClick={()=>{navigate('/book/'+book.id)}}>
                  <CardMedia
                  component='img' image={book.img} alt={`Book cover for ${book.title}`} sx={{objectFit:'contain', height:'30vh'}}
                  />
                </CardActionArea>
                <CardActions sx={{p:0}}>
                  <>
                  {(readingList.includes(book)) ?
                  <Button sx={{margin:'auto'}} variant='contained' aria-label="remove-from-readlist" onClick={()=>{handleRemoveOneFromList(book)}} startIcon={<RemoveCircleOutlineOutlinedIcon/>}>
                    Remove From List
                  </Button>
                    :
                  <Button sx={{margin:'auto'}} variant='contained' aria-label="add-to-readlist" onClick={()=>{handleAddToList(book)}} startIcon={<AddCircleOutlineOutlinedIcon />}>
                    Add To List
                  </Button>
                  }
                  </>
                  {/* <IconButton aria-label="unread">
                    <VisibilityOffOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="read">
                    <VisibilityOutlinedIcon />
                  </IconButton> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
