
import MovieList from './components/Movies'
import movieData from './components/Data'
import Timer from './components/Timer'
import './App.css';
//todo: MovieList
function App() {

  return (
    <div className="App">
      <h1>Movie list </h1>
      <h2>Time start</h2>
      <Timer start={0}/>
  <MovieList movies={movieData}/>
    </div>
  );
}

export default App;
