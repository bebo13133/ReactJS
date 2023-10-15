import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import {gameServiceFactory} from './components/services/gameService'
import { UserContext } from './components/contexts/UserContext'
import { useService } from './Hooks/useService';
import Footer from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { CreateGame } from './components/CreateGame/CreateGame';
import { GameDetails } from './components/Catalog/Details/GameDetails';
import {userServiceFactory}from './components/services/userService'
import { Logout } from './components/Logout/Logout';




function App() {
  const [games, setGames] = useState([])
  const navigate = useNavigate()
  const [isAuth, setAuth] = useState({})

  const gameService = gameServiceFactory(isAuth.accessToken)
  const userService = userServiceFactory(isAuth.accessToken)

  useEffect(() => {

    gameService.getAll()
      .then(result => {
        setGames(result)
      })
  }, [])
  const onCreateGameSubmit = async (data) => {

    const game = await gameService.create(data)
    setGames(state => [...state, game])

    navigate("/catalog")

  }


  const onLoginSubmit = async (data) => {
    try {
      const newUser = await userService.login(data)
      setAuth(newUser)
      navigate("/catalog")
    } catch (err) {
      console.log("PROBLEM")
    }

  }

  const onRegisterSubmit = async (data) => {
    const {confirmPassword, ...registerData} = data 
if(registerData.password !== confirmPassword) throw new Error("Please enter valid password")

    try {
      const newUser = await userService.register(registerData)
      console.log(newUser)
      setAuth(newUser)
      navigate("/catalog")
    } catch (err) {
      console.log("PROBLEM")

    }
  }

const onLogout = async()=> {
   await userService.logout()
  setAuth({})
}
  const contextService = {
    onLoginSubmit,
    userId: isAuth._id,
    userEmail: isAuth.email,
    token: isAuth.accessToken,
    isAuthentication: !!isAuth.accessToken,
    onRegisterSubmit,
    onLogout,
    onCreateGameSubmit
  }

  return (
    <UserContext.Provider value={contextService}>

      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/logout'} element={<Logout />} />

            <Route path={'/register'} element={<Register />} />
            <Route path={'/create'} element={<CreateGame onSubmit={onCreateGameSubmit} />} />
            <Route path={'/catalog'} element={<Catalog games={games} />} />
            <Route path={'/catalog/:gameId'} element={<GameDetails />} />



            <Route path={'*'} element={<h1>404 Page not Found</h1>} />
          </Routes>

        </main>

        <Footer />


      </div>
    </UserContext.Provider>

  );
}

export default App;
