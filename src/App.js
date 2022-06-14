import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AlertPopUp from './components/AlertPopUp';
import Navbar from './components/Navbar';
import BrowseBooks from './views/BrowseBooks';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import Profile from './views/Profile';
import ViewBook from './views/ViewBook';
import ViewReadingList from './views/ViewReadingList';

function App() {
  return (
    <>
      <AlertPopUp/>
      <Navbar>
        <Box sx={{minHeight:'100%'}}>
          <Routes>
            <Route path='/ReactLibrary' element={<Home/>}/>
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