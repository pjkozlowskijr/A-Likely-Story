import React, {useContext} from 'react';
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
import { AppContext } from '../context/AppContext';
import Button from '@mui/material/Button';
import { toTitleCase } from '../helpers';
import {useNavigate} from 'react-router-dom'

export default function SingleBook() {
  const {bookId} = useParams()
  const {book, error} = useBooks(bookId)
  const {readingList, user, addToList, removeOneFromList, setAlert} = useContext(AppContext)
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

  if (!book){
    return(
      <Box sx={{display:'flex'}}>
        <CircularProgress/>
      </Box>
    )
  }

  return (
    <Card sx={{display:'flex', width:'70%', margin:'auto', p:1, mt:3}}>
      <CardMedia
        component="img"
        sx={{width:'30%', height:400, objectFit:'contain', m:1, my:'auto'}}
        image={book.img}
        alt={`Book cover for ${book.title}`}
      />
      <CardContent sx={{width:'70%'}}>
        <Typography variant="h3" textAlign='center' sx={{mb:3}}>
          {toTitleCase(book.title)}
        </Typography>
        <Typography variant="h5" color="text.secondary" textAlign='center' sx={{mb:3}}>
          By: {book.author}
        </Typography>
        <CardActions sx={{p:0, mt:1, justifyContent:'center'}} disableSpacing>
          {(readingList.map(x=>x.id).includes(book.id)) ?
          <Button sx={{margin:'auto', width:'75%'}} variant='contained' color='error' aria-label="remove-from-readlist" onClick={()=>{handleRemoveOneFromList(book)}} startIcon={<RemoveCircleOutlineOutlinedIcon/>}>
            Remove from List
          </Button>
            :
          <Button sx={{margin:'auto', width:'75%'}} variant='contained' color='primary' aria-label="add-to-readlist" onClick={()=>{handleAddToList(book)}} startIcon={<AddCircleOutlineOutlinedIcon />}>
            Add to List
          </Button>
          }
        </CardActions>
        <br/>
        <Divider/>
        <br/>
        <Typography variant="h6" color="text.secondary">
          <strong>Subject:</strong> {toTitleCase(book.subject)}
        </Typography>
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
