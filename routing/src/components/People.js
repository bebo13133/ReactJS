import { useParams,useNavigate } from 'react-router-dom'
import { useEffect, useState,  } from 'react'
const baseUrl = `https://swapi.dev/api/people`


export const People = () => {
    const { peopleId } = useParams()
const navigate = useNavigate()
    console.log(peopleId)
    const [people, setPeople] = useState({})

    useEffect(() => {
        fetch(`${baseUrl}/${peopleId}`)
            .then(res => res.json())
            .then(data =>{
           
                setPeople(data)}
            )

    }, [peopleId])

const onBackButtonClick = () => {
    navigate('/people')
}

    return (
        <>
            <h1>People page</h1>
            <h2>{people.name}</h2>
            <h3>Height: {people.height}</h3>
            <h3>Mass: {people.mass}</h3>
            <h3>Gender: {people.gender}</h3>

            <button onClick={onBackButtonClick}>Back</button>



        </>

    )
}