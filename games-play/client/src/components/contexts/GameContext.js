import { useContext,useState,useEffect ,createContext} from "react";
// import { UserContext } from "./UserContext";
import { gameServiceFactory } from "../services/gameService";
import { useNavigate } from "react-router-dom";


export const GameContext = createContext()



export const GameProvider = ({
    children
})=>{
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
      const getGame = (gameId) => {
        return games.find(game => game._id === gameId);
    };
      const onEditSubmit = async (data) => {
    
        const game = await gameService.update(data._id, data)
    
        setGames(games => games.map(x => x._id === data._id ? game : x))
        navigate(`/catalog/${data._id}`)
      }
    
const contextValue = {
games,
onDeleteClick,
onEditSubmit,
onCreateGameSubmit,
getGame


}

return (
    <>
    <GameContext.Provider value={contextValue}>

        {children}

    </GameContext.Provider>


</>
)



};
export const useGameContext = ()=>{

    const context = useContext(GameContext)
    return context
}