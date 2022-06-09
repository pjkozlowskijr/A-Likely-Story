import './App.css';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Autocomplete from './components/Autocomplete';
import BookCard from './components/BookCard';
import LoginForm from './forms/LoginForm';
import ProfileForm from './forms/ProfileForm';
import Button from './components/Button';
import { CancelToken } from 'apisauce';
import apiUser from './api/apiUser'
import apiBook from './api/apiBook'
import BrowseAllBooks from './components/BrowseAllBooks'
import UserBooks from './components/UserBooks'
import SingleBook from './components/SingleBook'
import FilterBooks from './components/FilterBooks'
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import ReadingList from './components/ReadingList/ReadingList'
import ViewReadingList from './views/ViewReadingList';
import Box from '@mui/material/Box'
import {Route, Routes} from 'react-router-dom'
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import BrowseBooks from './views/BrowseBooks'
import Profile from './views/Profile';
import ViewBook from './views/ViewBook';

// const handleAPITest = async () => {
//   const source = CancelToken.source();
//   const responseObject = await apiUser.put(myToken, patrick, source.token)
//   console.log(responseObject)
// }

function App() {
  const {user} = useContext(AppContext)
  return (
    <>
      <Navbar>
        <Box sx={{minHeight:'90vh'}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/browse' element={<BrowseBooks/>}/>
            <Route path='/book/:bookId' element={<ViewBook/>}/>
            <Route path='/list' element={<ViewReadingList/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </Box>
      </Navbar>
    </>
  );
}

export default App;