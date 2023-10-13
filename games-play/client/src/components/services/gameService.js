import {get, post} from './requester'

const baseUrl = `http://localhost:3030/jsonstore/games`


export const getAll =async() =>{

    const result= await get(baseUrl)
    
const games = Object.values(result)

    return games

}
export const create = async(gameData) =>{

    const result= await post(baseUrl,gameData)


    return result
}

export const getOne = async(gameId) => await get(`${baseUrl}/${gameId}`)