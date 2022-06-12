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
import { CardMedia, Typography } from '@mui/material';
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
  const {error, books, addToList, removeOneFromList, readingList, setAlert, user} = useContext(AppContext)
  const navigate = useNavigate()

  const handleAddToList = (book) => {
    if (user?.token){
      addToList(book)
      setAlert({msg:`You added "${toTitleCase(book.title)}" to your reading list.`, cat:'success'})
    }else{
      setAlert({msg:'Please log in to add books to your reading list.', cat:'error'})
      navigate('/login')
    }
  }

  const handleRemoveOneFromList = (book) => {
    removeOneFromList(book)
    setAlert({msg:`You removed "${toTitleCase(book.title)}" from your reading list.`, cat:'success'})
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
        <Box sx={{position:'sticky', top:'15vh'}}>
          <Autocomplete/>
          <FilterBooks/>
        </Box>
      </Grid>
      <Grid item md={10}>
        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid key={book.title} item md={3} lg={4}>
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
                  {(readingList.map(x=>x.id).includes(book.id)) ?
                  <Button sx={{margin:'auto', width:'75%'}} variant='contained' color='error' aria-label="remove-from-readlist" onClick={()=>{handleRemoveOneFromList(book)}} startIcon={<RemoveCircleOutlineOutlinedIcon/>}>
                    Remove from List
                  </Button>
                    :
                  <Button sx={{margin:'auto', width:'75%'}} variant='contained' color='primary' aria-label="add-to-readlist" onClick={()=>{handleAddToList(book)}} startIcon={<AddCircleOutlineOutlinedIcon />}>
                    Add to List
                  </Button>
                  }
                  </>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
