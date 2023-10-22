import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { gameServiceFactory } from './components/services/gameService'
import Footer from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { CreateGame } from './components/CreateGame/CreateGame';
import { GameDetails } from './components/Catalog/Details/GameDetails';
import { Logout } from './components/Logout/Logout';
import { EditGame } from './components/Catalog/Details/EditGame';
import { UserProvider } from './components/contexts/UserContext';


function App() {
  const [games, setGames] = useState([])
  const navigate = useNavigate()

  const gameService = gameServiceFactory()//isAuth.accessToken

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


  const onDeleteClick = async (id) => {
    const result = await gameService.delete(id)
    console.log(result)

    setGames(state => state.filter(x => x._id !== id))

    navigate("/catalog")

  }

  const onEditSubmit = async (data) => {

    const game = await gameService.update(data._id, data)

    setGames(state => state.map(x => x._id === data._id ? game : x))
    navigate(`/catalog/${data._id}`)
  }





  return (
    <UserProvider>

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
            <Route path={'/catalog/:gameId/edit'} element={<EditGame onEditSubmit={onEditSubmit} />} />



            <Route path={'*'} element={<h1>404 Page not Found</h1>} />
          </Routes>

        </main>

        <Footer />


      </div>
    </UserProvider>

  );
}

export default App;
