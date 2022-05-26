import './App.css';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Autocomplete from './components/Autocomplete';
import Card from './components/Card';
import LoginForm from './forms/LoginForm';

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
    </Navbar>
  );
}

export default App;
