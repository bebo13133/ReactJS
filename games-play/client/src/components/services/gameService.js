import { requestFactory } from './requester'

const baseUrl = `http://localhost:3030/data/games`





 export const gameServiceFactory = (token) =>{                    //? config вместо token може да е всичко 
        const request = requestFactory(token)


    const getAll = async () => {

        const result = await request.get(baseUrl)
        const games = Object.values(result)
    
        return games
    
    }
    
     const create = async (gameData) => {
    
        const result = await request.post(baseUrl, gameData)
        return result
    }
    
     const getOne = async (gameId) => await request.get(`${baseUrl}/${gameId}`)

    const deleteGame = (id)=> request.del(`${baseUrl}/${id}`)

    const updateGame = (gameId,data)=> request.put(`${baseUrl}/${gameId}`, data)

    return {
        getAll,
        create,
        getOne,
        delete:deleteGame,
        update:updateGame,
    }

 }