import {get, post} from './requester'
const baseUrl = `http://localhost:3030/jsonstore/comments`

export const create =async(data)=> {
    const result = await post(baseUrl,data)
}
export const getAll = async(gameId)=> {
    // const query = encodeURIComponent(`gameId="${gameId}"`)
    const result=await get(`${baseUrl}?where=gameId%3D%22${gameId}%22`)
    const comments = Object.values(result)

    return comments
}