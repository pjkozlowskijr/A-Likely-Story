import { CancelToken } from 'apisauce';
import { useEffect, useState } from 'react';
import apiBook from '../api/apiBook';

// ##############################################################
// API hook to get all books or single if ID provided
// ##############################################################

export default function useBooks(bookId=null){
    const [books, setBooks] = useState ({});

    useEffect(
        () => {
            const source = CancelToken.source()
            bookId ?
            (async () => {
                const response = await apiBook.getBook(bookId, source.token);
                setBooks(response)
            })()
            :
            (async () => {
                const response = await apiBook.getAllBooks(source.token);
                setBooks(response)
            })()
            return () => {source.cancel()}
        },
        [bookId]
    )
    return books
}