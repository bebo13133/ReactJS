// import { useContext,useState,useEffect } from "react";
// import { UserContext } from "./UserContext";
// import { gameServiceFactory } from "../services/gameService";
// import { useNavigate } from "react-router-dom";

// export const GameProvider = ({
//     children
// })=>{
//     const [games, setGames] = useState([])
//     const navigate = useNavigate()
  
//     const gameService = gameServiceFactory(isAuth.accessToken)//
  
//     useEffect(() => {
  
//       gameService.getAll()
//         .then(result => {
//           setGames(result)
//         })
//     }, [])
  
//     const onCreateGameSubmit = async (data) => {
  
//       const game = await gameService.create(data)
//       setGames(state => [...state, game])
  
//       navigate("/catalog")
  
//     }
  
  
//     const onDeleteClick = async (id) => {
//       const result = await gameService.delete(id)
//       console.log(result)
  
//       setGames(state => state.filter(x => x._id !== id))
  
//       navigate("/catalog")
  
//     }
  
//     const onEditSubmit = async (data) => {
  
//       const game = await gameService.update(data._id, data)
  
//       setGames(state => state.map(x => x._id === data._id ? game : x))
//       navigate(`/catalog/${data._id}`)
//     }


//     const contextService = {
      
//         userId: isAuth._id,
//         userEmail: isAuth.email,
//         token: isAuth.accessToken,
//         isAuthentication: !!isAuth.accessToken,
//         onEditSubmit
//         onCreateGameSubmit,
//         onDeleteClick
//     }



//     return(
        
//         <UserContext.Provider value={contextService}>
//             {children}

//         </UserContext.Provider>
//     )

// }