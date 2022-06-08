import React, {useContext, useState} from 'react'
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ButtonGroup } from '@mui/material';
import { AppContext } from '../../context/AppContext';

export default function AddRemoveListBook({book}) {
    const {addToList, removeOneFromList, removeBookFromList} = useContext(AppContext)

    const [read, setRead] = useState(false)
    
    const handleRead = () => {
        setRead(true)
    }

    const handleUnread = () => {
        setRead(false)
    }

  return (
    <ButtonGroup>
        <IconButton aria-label="delete-all-from-readlist" onClick={()=>{removeBookFromList(book)}}>
            <DeleteOutlineOutlinedIcon />
        </IconButton>
        <IconButton aria-label="add-to-readlist" onClick={()=>{addToList(book)}}>
            <AddCircleOutlineOutlinedIcon />
        </IconButton>
        <IconButton aria-label="remove-from-readlist" onClick={()=>{removeOneFromList(book)}}>
            <RemoveCircleOutlineOutlinedIcon />
        </IconButton>
        {/* <IconButton>
            {(read === true) ?
            <VisibilityOutlinedIcon aria-label="read" onClick={()=>{handleUnread()}}/>
            :
            <VisibilityOffOutlinedIcon aria-label="unread" onClick={()=>{handleRead()}}/>
            }
        </IconButton> */}
    </ButtonGroup>
  )
}
