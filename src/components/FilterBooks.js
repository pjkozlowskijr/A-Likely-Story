import {useContext, useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AppContext } from '../context/AppContext';
import { toTitleCase, sortAlpha } from '../helpers';

export default function FilterBooks() {
  const {bookSubs} = useContext(AppContext)
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="subject-filter">Filter Subject</FormLabel>
      <RadioGroup
        aria-labelledby="subject-filter"
        name="subject-filter"
        value={value}
        onChange={handleChange}
      >
        {['All', ...bookSubs].map(sub => (
        <FormControlLabel key={sub} value={sub} control={<Radio />} label={toTitleCase(sub)} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
