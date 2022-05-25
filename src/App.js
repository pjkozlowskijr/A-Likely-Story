import './App.css';
import Navbar from './components/Navbar'
import Rating from './components/Rating'
import Autocomplete from './components/Autocomplete'
import Card from './components/Card'

function App() {
  return (
    <Navbar>
      <Rating/>
      <br/>
      <Autocomplete/>
      <br/>
      <Card/>
    </Navbar>
  );
}

export default App;
