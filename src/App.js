import './App.css';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Autocomplete from './components/Autocomplete';
import Card from './components/Card';
import LoginForm from './forms/LoginForm';
import ProfileForm from './forms/ProfileForm';
import Button from './components/Button';
import { CancelToken } from 'apisauce';
import apiUser from './api/apiUser'
import apiBook from './api/apiBook'

const handleAPITest = async () => {
  const source = CancelToken.source();
  const responseObject = await apiBook.getBook(19, source.token)
  console.log(responseObject)
}

function App() {
  return (
    <Navbar>
      <Button onClick={handleAPITest}>Test API</Button>
      <br/>
      <Rating/>
      <br/>
      <Autocomplete/>
      <br/>
      <Card/>
      <br/>
      <LoginForm/>
      <br/>
      <ProfileForm/>
    </Navbar>
  );
}

export default App;
