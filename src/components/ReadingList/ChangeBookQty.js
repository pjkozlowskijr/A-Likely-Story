import React, { useContext, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AppContext } from '../../context/AppContext';

const range = (num) =>[...Array(num).keys()]

export default function ChangeBookQty({book, qty}) {
    const {removeBookFromList, addMultipleToList} = useContext(AppContext)

    const handleChange=(event, book)=>{
       removeBookFromList(book)
       addMultipleToList(Array(event.target.value).fill(book))
    }

  return (
    <FormControl fullWidth>
        <InputLabel id="select-qty">Quantity</InputLabel>
        <Select
            labelId = 'select-qty'
            value = {qty}
            onChange = {event => handleChange(event, book)}
            >
            {range(11).map(
                (selectedQty)=><MenuItem key={selectedQty} value={selectedQty}>{selectedQty}</MenuItem>
                )}
        </Select>
    </FormControl>
  )
}
