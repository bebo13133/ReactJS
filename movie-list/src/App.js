
// import './App.css';
import MovieList from './components/MovieList'
import { useState, useEffect } from 'react'
import styles from './components/Movie.module.css'


function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/movies.json`)
      .then(res => res.json())
      .then(data => setMovies(data.movies))
  }, [])
  const onDelete = (id) => {

    setMovies(state => state.filter(x => x.id !== id))
  }


  const onSelected = (id) => {

    setMovies(state => state.map(x => ({ ...x, selected: x.id === id })))
  }
  return (


    <div className="App">
      <h1> My Movie collection</h1>
      <MovieList movies={movies} onDelete={onDelete} onSelected={onSelected} />
    </div>
  );
}

export default App;
