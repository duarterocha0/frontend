import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { useState } from 'react';

function App() {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(word)
  }
  
  return (
    <div>
      <Header/>
      <SearchBar word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
