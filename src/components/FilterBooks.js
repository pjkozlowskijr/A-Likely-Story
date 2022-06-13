import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { toTitleCase } from '../helpers';

// ##############################################################
// Component to filter books by subject in book browser
// ##############################################################

export default function FilterBooks(props) {
  const {bookSubs} = useContext(AppContext)
  const [filterValues, setFilterValues] = useState([]);

  const handleChange = (value) => {
    const currentIndex = filterValues.indexOf(value)
    const newFilterValues = [...filterValues]
    if(currentIndex === -1){
      newFilterValues.push(value)
    }else{
      newFilterValues.splice(currentIndex, 1)
    }
    setFilterValues(newFilterValues)
    props.handleFilters(newFilterValues)
    console.log(newFilterValues)
  };

  return (
    <FormControl>
      <FormLabel id="subject-filter">Filter Subject:</FormLabel>
      <FormGroup
        aria-labelledby="subject-filter"
        name="subject-filter"
      >
        {[...bookSubs].map(sub => (
        <FormControlLabel 
          key={sub} 
          control={<Checkbox 
            onChange={()=>handleChange(sub)} 
            checked={filterValues.indexOf(sub) === -1 ? false : true} 
            name={sub}/>} 
          label={toTitleCase(sub)}
        />
        ))}
      </FormGroup>
    </FormControl>
  );
}
