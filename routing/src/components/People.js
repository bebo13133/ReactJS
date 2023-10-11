import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const baseUrl = `https://swapi.dev/api/people`


export const People = () => {
    const { peopleId } = useParams()

    console.log(peopleId)
    const [people, setPeople] = useState({})

    useEffect(() => {
        fetch(`${baseUrl}/${peopleId}`)
            .then(res => res.json())
            .then(data =>{
           
                setPeople(data)}
            )

    }, [peopleId])

    return (
        <>
            <h1>People page</h1>
            <h2>{people.name}</h2>
            <h3>Height: {people.height}</h3>
            <h3>Mass: {people.mass}</h3>
            <h3>Gender: {people.gender}</h3>



        </>

    )
}