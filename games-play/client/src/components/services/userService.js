import * as requester from './requester'

const baseUrl = `http://localhost:3030/users`
export const login = (data) => requester.post(`${baseUrl}/login`,data )