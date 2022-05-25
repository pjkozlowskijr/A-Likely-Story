import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value] = React.useState(5);

  return (
    <Box sx={{'& > legend': { mt: 2 },}}>
      <Typography component="legend">Book Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}
