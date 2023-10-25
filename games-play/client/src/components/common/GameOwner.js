import { Navigate, useParams,Outlet } from "react-router-dom"
import { useGameContext } from "../contexts/GameContext"
import { useAuthContext } from "../contexts/UserContext"


export const GameOwner = ({
    children,
}) =>{

const {getGame} = useGameContext()

const {gameId} = useParams()

const {userId} = useAuthContext()

const currentGame = getGame(gameId)

if (currentGame && currentGame._ownerId !== userId) return <Navigate to={`/catalog/${gameId}`}/>

return  children ? children : <Outlet/>

 


}