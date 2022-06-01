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

const handleAPITest = async () => {
  const source = CancelToken.source();
  const responseObject = await apiBook.getBook(19, source.token)
  console.log(responseObject)
}

function App() {
  return (
    <Navbar>
    <SingleBook/>
    </Navbar>
  );
}

export default App;
