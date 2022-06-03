import {createContext, useState} from 'react';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
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

    const getBooksFromLS = () => {
        let books = localStorage.getItem('books')
        if (books){
            return JSON.parse(books)
        }
    }

    const [books, _setBooks] = useState(getBooksFromLS())

    const setBooks = (books) => {
        localStorage.setItem('books', JSON.stringify(books))
        _setUser(books)
    }

    const values = {user, setUser, books, setBooks}

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider