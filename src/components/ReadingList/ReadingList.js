import React, {useContext} from 'react';
import { Box } from '@mui/material';
import ListBook from './ListBook';
import { AppContext } from '../../context/AppContext';

export default function ReadingList() {
  const {readingList} = useContext(AppContext)

  return (
    <Box>
      {
        [...new Set(readingList?.map(JSON.stringify))]?.map(JSON.parse)?.map((book)=><ListBook key={book.title} book={book}/>)
      }
    </Box>
  );
}
