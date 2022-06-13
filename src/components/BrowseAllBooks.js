import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Autocomplete from './Autocomplete'
import Error from './Error';
import FilterBooks from './FilterBooks';
import SortBooks from './SortBooks'
import { toTitleCase, sortTitleReverseAlpha } from '../helpers';

// ##############################################################
// View all books (user view)
// ##############################################################

export default function BrowseAllBooks() {
  const {error, addToList, removeOneFromList, readingList, setAlert, user} = useContext(AppContext)
  let {books} = useContext(AppContext)
  const [displayBooks, setDisplayBooks] = useState(books)
  const navigate = useNavigate()

  // Adding book to reading list
  const handleAddToList = (book) => {
    if (user?.token){
      addToList(book)
      setAlert({msg:`You added "${toTitleCase(book.title)}" to your reading list.`, cat:'success'})
    }else{
      setAlert({msg:'Please log in to add books to your reading list.', cat:'error'})
      navigate('/login')
    }
  }

  // Removing book from reading list
  const handleRemoveOneFromList = (book) => {
    removeOneFromList(book)
    setAlert({msg:`You removed "${toTitleCase(book.title)}" from your reading list.`, cat:'success'})
  }

  // Sorting books A-Z or Z-A
  const [sorting, setSorting] = useState()

  const handleSorting = (sorting) => {
    setSorting(sorting)
  }

  useEffect(
    ()=>{
      setDisplayBooks((sorting === 'Title A-Z') ? books?.sort(sortTitleReverseAlpha) : books)
    },[sorting, books]
  )

  // Filtering books by subject
  const [filters, setFilters] = useState([])

  const handleFilters = (filters) => {
    setFilters(filters)
  }

  useEffect(
    ()=>{
      setDisplayBooks((filters.length < 1) ? books : books.filter(book => filters.includes(book.subject)))
    },[filters, books]
  )

  if (error){
    return(
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Error>{error}</Error>
      </Box>
    )
  }

  // Rotating circular progress to display if books take time to load
  if (!books){
    return(
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <CircularProgress/>
      </Box>
    )
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={2}>
        <Box sx={{position:'sticky', top:'12vh'}}>
          <Typography variant='h6' sx={{fontWeight:'bold'}}>Search/Sort/Filter</Typography>
          <Autocomplete/>
          <SortBooks handleSorting={handleSorting}/>
          <FilterBooks handleFilters={filters => handleFilters(filters)}/>
        </Box>
      </Grid>
      <Grid item md={10}>
        <Grid container spacing={2}>
          {displayBooks?.map((book) => (
            <Grid key={book.title} item md={3} lg={4}>
              <Card 
                key={book.title} 
                sx={{
                  height:'60vh', 
                  display:'flex', 
                  flexDirection:'column', 
                  justifyContent:'space-between', 
                  p:2
                }}
              >
                <CardActionArea onClick={()=>{navigate('/book/'+book.id)}}>
                  <CardHeader
                  title={toTitleCase(book.title)}
                  subheader={'By: '+book.author}
                  sx={{p:0}}
                  titleTypographyProps={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}
                  subheaderTypographyProps={{fontSize: 16, textAlign: 'center'}}
                  />
                </CardActionArea>
                <CardActionArea onClick={()=>{navigate('/book/'+book.id)}}>
                  <CardMedia
                    component='img' 
                    image={book.img} 
                    alt={`Book cover for ${book.title}`} 
                    sx={{objectFit:'contain', height:'30vh'}}
                  />
                </CardActionArea>
                <CardActions sx={{p:0}}>
                  <>
                    {(readingList.map(x=>x.id).includes(book.id)) ?
                      <Button 
                        sx={{margin:'auto', width:'75%'}} 
                        variant='contained' 
                        color='secondary' 
                        aria-label="remove-from-readlist" 
                        onClick={()=>{handleRemoveOneFromList(book)}} 
                        startIcon={<RemoveCircleOutlineOutlinedIcon/>}
                      >
                        Remove from List
                      </Button>
                      :
                      <Button 
                        sx={{margin:'auto', width:'75%'}} 
                        variant='contained' 
                        color='primary' 
                        aria-label="add-to-readlist" 
                        onClick={()=>{handleAddToList(book)}} 
                        startIcon={<AddCircleOutlineOutlinedIcon />}
                      >
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
