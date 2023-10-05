
import MovieList from './components/Movies'
import movieData from './components/Data'
import Timer from './components/Timer'
import Counter from './components/Counter'
import './App.css';
//todo: MovieList
function App() {

  return (
    <div className="App">
      <h1>Movie list </h1>
     <Counter counts={0} />
      <Timer start={0}/>
  <MovieList movies={movieData}/>
    </div>
  );
}

export default App;
