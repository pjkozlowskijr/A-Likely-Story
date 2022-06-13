import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

// ##############################################################
// Remove button for book component within reading list
// ##############################################################

export default function AddRemoveListBook({book}) {
  const {removeBookFromList} = useContext(AppContext)

  return (
    <>
        <Button sx={{width:'50%'}} color='secondary' aria-label="delete-all-from-readlist" variant='contained' onClick={()=>{removeBookFromList(book)}} startIcon={<DeleteOutlineOutlinedIcon />}>
            Remove
        </Button>
    </>
  )
}
