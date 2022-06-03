import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FilterBooks() {
  const subjects = ['all', 'sub1', 'sub2', 'sub3']
  const [value, setValue] = React.useState('all');

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
        {subjects.map(sub => (
        <FormControlLabel key={sub} value={sub} control={<Radio />} label={sub} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
