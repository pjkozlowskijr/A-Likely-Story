import {useContext} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Playground() {
  const {books} = useContext(AppContext)
  const navigate = useNavigate()

  const handleChange = (event, value) => {
    console.log(value)
    navigate('/book/'+value.id)
  }

  return (
    <Stack spacing={1} sx={{width:'100%'}}>
      <Autocomplete
        id="auto-complete"
        options={books}
        getOptionLabel={option => option.title}
        autoComplete
        autoHighlight
        includeInputInList
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="Select Book" variant="standard" />
        )}
        onChange={handleChange}
      />
    </Stack>
  );
}
