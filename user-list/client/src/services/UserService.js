const userUrl = `http://localhost:3005/api/users`


export const getAll = async () => {

    const response = await fetch(userUrl)
    const result = await response.json()

    return result.users
};

export const getOne = async (userId) => {
    const response = await fetch(`${userUrl}/${userId}`)
    const result = await response.json()

    return result.user
};


export const createUser = async (userData) => {
    try {

        const { country, city, street, streetNumber, ...data } = userData
        data.address = { country, city, street, streetNumber, }



        const response = await fetch(`${userUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)

        })
        const result = await response.json()

        return result.user


    } catch (err) {
        throw new Error("blblblbl")
    }
}

export const deleteUser = async (userId) => {
    const response = await fetch(`${userUrl}/${userId}`,{
        method: 'DELETE',

    })
    const result = await response.json()
    return result;
}


export const updateUser= async(userData, userId)=>{
    const { country, city, street, streetNumber, ...data } = userData
    data.address = { country, city, street, streetNumber, }

    const response = await fetch(`${userUrl}/${userId}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result.user

}