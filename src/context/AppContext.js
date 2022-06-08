import {createContext, useEffect, useReducer, useState} from 'react';
import useBooks from '../hooks/useBooks';
import { bookActionReducer, listActions } from '../reducers/bookActionReducer';

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
    const {error, books} = useBooks()

    // Context for READING LIST
    const getListFromLS = () => {
        let readingList = localStorage.getItem('readingList')
        if (readingList){
            return JSON.parse('readingList')
        }
    }

    const [readingList, dispatch] = useReducer(bookActionReducer, getListFromLS() ?? [])

    useEffect(
        () => {
            if (readingList.length > 0){
                localStorage.setItem('readingList', JSON.stringify(readingList))
            }
        },
        []
    )

    // Values AppContext is providing
    const values = {
        user, 
        setUser, 
        books, 
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
        removeItemFromList: (book)=>{
            dispatch({type: listActions.removeItemFromList, book})
        },
        emptyList: (book)=>{
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