import {useContext} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import sortBooksAlpha from '../helpers'

export default function Playground() {
  const navigate = useNavigate()
  let {books} = useContext(AppContext)
  books = books.sort(sortBooksAlpha)

  const handleChange = (event, value) => {
    console.log(value)
    navigate('/book/'+value.id)
  }

  return (
    <Stack spacing={1} sx={{width:'100%', mb:3}}>
      <Autocomplete
        id="auto-complete"
        options={books}
        getOptionLabel={option => ((option.title).toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))}
        autoComplete
        autoHighlight
        includeInputInList
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="Search for book..." variant="standard" />
        )}
        onChange={handleChange}
      />
    </Stack>
  );
}
