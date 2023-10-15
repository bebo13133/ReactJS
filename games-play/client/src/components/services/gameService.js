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

    return {
        getAll,
        create,
        getOne,
    }

 }