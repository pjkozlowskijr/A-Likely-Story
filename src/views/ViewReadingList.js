import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ReadingList from '../components/ReadingList/ReadingList'

export default function ListPage() {
    const {readingList} = useContext(AppContext)

    if (readingList.length < 1){
        return(
            <Typography>There are no books in your reading list.</Typography>
        )
    }else{
        return(
            <>
                <Typography>Your Reading List:</Typography>
                <ReadingList/>
            </>
        )
    }
}
