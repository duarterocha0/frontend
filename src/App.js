import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ImageCard from './components/ImageCard'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState([]);

  const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!UNSPLASH_KEY || UNSPLASH_KEY === '') {
      alert('Please set your Unsplash API key in the .env file');
    } else if (word === "") {
      alert("Oops! It looks like you forgot to enter a word. Please type a word to find some amazing images!");
    } else {
      fetch(`https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`).then((res) => res.json()).then((data) => {
        console.log(data);
        setResults([{ ...data, title: word }, ...results]);
        setWord("");
      })
        .catch((err) => {
          console.error(err);
        })
    }
  }

  const handleDeleteImage = (id) => {
    setResults(results.filter((image) => image.id !== id));
  }
v 
  return (
    <div>
      <Header />
      <SearchBar word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container>
        <Row>
          {results.map((result, index) => (
            <Col key={index} xs="12" sm="4" md="6" lg="3" xl="2">
              <ImageCard image={result} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
