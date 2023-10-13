import { Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import * as gameService from './components/services/gameService'

import Footer from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { CreateGame } from './components/CreateGame/CreateGame';
import { GameDetails } from './components/Catalog/Details/GameDetails';




function App() {
  const [games,setGames] = useState([])
  const navigate = useNavigate()
  
  
  useEffect(() =>{

    gameService.getAll()
    .then(result=>{
      setGames(result)
    })
  },[])
  const onCreateGameSubmit = async(e,data) =>{
    e.preventDefault()
const game =await gameService.create(data)
setGames(state => [...state,game])

navigate("/catalog")

  }

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/login'} element={<Login/>} />
            <Route path={'/register'} element={<Register/>} />
            <Route path={'/create'} element={<CreateGame onSubmit={onCreateGameSubmit}/>} />
            <Route path={'/catalog'} element={<Catalog games={games}/>} />
            <Route path={'/catalog/:gameId'} element={<GameDetails />} />



            <Route path={'*'} element={<h1>404 Page not Found</h1>}/>
        </Routes>

      </main>

      <Footer />


    </div>


  );
}

export default App;
