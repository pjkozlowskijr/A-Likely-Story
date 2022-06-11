import React, {useContext, useState} from 'react'
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ButtonGroup, ListItem } from '@mui/material';
import { AppContext } from '../../context/AppContext';
import { Button } from '@mui/material';
import { List } from '@mui/material';

export default function AddRemoveListBook({book}) {
    const {removeBookFromList} = useContext(AppContext)

  return (
    <>
        <Button sx={{width:'50%'}} color='error' aria-label="delete-all-from-readlist" variant='contained' onClick={()=>{removeBookFromList(book)}} startIcon={<DeleteOutlineOutlinedIcon />}>
            Remove
        </Button>
    </>
  )
}
