import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { sortTitleAlpha, toTitleCase } from '../helpers'

// ##############################################################
// Autocomplete search field for books in browse all books
// ##############################################################

export default function Playground() {
  const navigate = useNavigate()
  let {books} = useContext(AppContext)
  books = books.sort(sortTitleAlpha)

  const handleChange = (event, value) => {
    console.log(value)
    navigate('/book/'+value.id)
  }

  return (
    <Stack spacing={1} sx={{width:'100%', mb:2}}>
      <Autocomplete
        id="auto-complete"
        options={books}
        getOptionLabel={option => toTitleCase(option.title)}
        autoComplete
        autoHighlight
        includeInputInList
        clearOnEscape
        renderInput={
          (params) => (<TextField {...params} label="Search for book..." variant="standard" />)
        }
        onChange={handleChange}
      />
    </Stack>
  );
}
