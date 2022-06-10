import {createContext, useEffect, useReducer, useState} from 'react';
import useBooks from '../hooks/useBooks';
import { bookActionReducer, listActions } from '../reducers/bookActionReducer';
import {sortTitleAlpha, sortAlpha} from '../helpers'

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    // Context for USER
    const getUserFromLS = () => {
        let user = localStorage.getItem('user')
        if (user){
            return JSON.parse(user)
        }
    }

    const [user, _setUser] = useState(getUserFromLS())

    const setUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }

    // Context for BOOKS
    let {error, books} = useBooks()
    books = books?.sort(sortTitleAlpha)
    let bookSubs = new Set(books?.map(book => book.subject))
    bookSubs = ([...bookSubs]).sort(sortAlpha)

    // Context for READING LIST
    const getListFromLS = () => {
        let readingList = localStorage.getItem('readingList')
        if (readingList){
            return JSON.parse(readingList)
        }
    }

    const [readingList, dispatch] = useReducer(bookActionReducer, getListFromLS()??[])

    useEffect(
        () => {
            localStorage.setItem('readingList', JSON.stringify(readingList))
        },
        [readingList]
    )

    // Context for ALERTS
    const [alert, setAlert] = useState({})

    // Values AppContext is providing
    const values = {
        alert,
        setAlert,
        user, 
        setUser, 
        books,
        bookSubs, 
        error, 
        readingList,
        addToList: (book)=>{
            dispatch({type: listActions.addToList, book})
        },
        addMultipleToList: (book)=>{
            dispatch({type: listActions.addMultipleToList, book})
        },
        removeOneFromList: (book)=>{
            dispatch({type: listActions.removeOneFromList, book})
        },
        removeBookFromList: (book)=>{
            dispatch({type: listActions.removeBookFromList, book})
        },
        emptyList: ()=>{
            dispatch({type: listActions.emptyList})
        }
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider