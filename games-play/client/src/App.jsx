import { Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import * as gameService from './components/services/gameService'
import {UserContext} from './components/contexts/UserContext'

import Footer from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { CreateGame } from './components/CreateGame/CreateGame';
import { GameDetails } from './components/Catalog/Details/GameDetails';
import * as userService from './components/services/userService'



function App() {
  const [games,setGames] = useState([])
  const navigate = useNavigate()
  const [isAuth,setAuth] = useState({})
  
  
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


  const onLoginSubmit= async(data) => {
    try{
      const newUser = await userService.login(data)
      setAuth(newUser)
    console.log(isAuth)
    }catch(err){
      console.log("PROBLEM")

    }

  }

const contextService = {
  onLoginSubmit
}

  return (
    <UserContext.Provider value={contextService}>

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
    </UserContext.Provider>

  );
}

export default App;
