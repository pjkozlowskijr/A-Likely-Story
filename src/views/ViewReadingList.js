import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ReadingList from '../components/ReadingList/ReadingList'
import { Navigate } from 'react-router-dom'

export default function ListPage() {
    const {readingList, user} = useContext(AppContext)

    if (user.token){
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
    }else{
        return(
            <Navigate to={'/login'}/>
        )
    }
}
