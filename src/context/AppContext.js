import {createContext, useState} from 'react';
import useBooks from '../hooks/useBooks';

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

    const values = {user, setUser, books, error}

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider