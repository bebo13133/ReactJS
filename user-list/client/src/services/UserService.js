const userUrl = `http://localhost:3005/api/users`


export const  getAll= async ()=>{

    const response = await fetch(userUrl)
    const result = await response.json()

    return result.users
}

export  const getOne = async (userId)=>{
const response = await fetch(`${userUrl}/${userId}`)
const result = await response.json()

return result.user
}