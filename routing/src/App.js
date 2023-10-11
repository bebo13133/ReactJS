import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation';
import { PeopleList } from './components/PeopleList';
import {People} from './components/People'
function App() {
  return (
    
    <div className="App">
    <header>
      <Navigation> </Navigation>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/about'} element={<About/>}/>
      <Route path={'/people'} element={<PeopleList/>}/>
      <Route path={'/people/:peopleId'} element={<People/>}/>


      <Route path={'*'} element={<h1>404</h1>}/>


    </Routes>
      </header>
    </div>
  );
}

export default App;
