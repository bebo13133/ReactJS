import { useEffect, useState } from "react"
import {PeoplesItemsList} from './PeoplesItemsList'

const baseUrl = `https://swapi.dev/api/people`


export const PeopleList = () => {
    const [peoples, setPeoples] = useState([])
    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data.count)
                setPeoples(data.results)
            })
    }, [])
    return (
        <>
            <h1>Star Wars peoples</h1>
            <ul>
            {peoples.map(p => <PeoplesItemsList key={p.url} {...p}/> )}

            </ul>
        </>



    )

}