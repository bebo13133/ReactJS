import { requestFactory } from './requester'
const baseUrl = `http://localhost:3030/data/comments`


export const commentServiceFactory = (token) => {
    const request = requestFactory(token)

    const create = async (data) => {
        const result = await request.post(baseUrl, data)
        return result
    }
    const getAll = async (gameId) => {
        // const query = encodeURIComponent(`gameId="${gameId}"`)
        const result = await request.get(`${baseUrl}?where=gameId%3D%22${gameId}%22`)
        const comments = Object.values(result)

        return comments
    }

    return {
        getAll,
        create,
    }

}