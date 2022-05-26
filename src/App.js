import './App.css';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Autocomplete from './components/Autocomplete';
import Card from './components/Card';
import LoginForm from './forms/LoginForm';
import ProfileForm from './forms/ProfileForm';

function App() {
  return (
    <Navbar>
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
