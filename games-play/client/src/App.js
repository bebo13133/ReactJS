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
import { RouteGuard } from './components/common/RouteGuard';
import { GameProvider } from './components/contexts/GameContext';
import { GameOwner } from './components/common/GameOwner';

function App() {


  return (
    <UserProvider>

      <GameProvider>
        <div id="box">
          <Header />

          <main id="main-content">
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/login'} element={<Login />} />

              <Route path={'/register'} element={<Register />} />
              <Route path={'/catalog/:gameId'} element={<GameDetails />} />


              <Route element={<RouteGuard />}>

                <Route path={'/create'} element={<CreateGame />} />
                <Route path={'/catalog/:gameId/edit'} element={
                  <GameOwner>
                    <EditGame />
                  </GameOwner>
                } />
                <Route path={'/logout'} element={<Logout />} />

              </Route>


              <Route path={'/catalog'} element={<Catalog />} />




              <Route path={'*'} element={<h1>404 Page not Found</h1>} />
            </Routes>

          </main>

          <Footer />


        </div>
      </GameProvider>
    </UserProvider>

  );
}

export default App;
