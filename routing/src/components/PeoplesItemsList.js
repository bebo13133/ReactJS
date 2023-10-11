import {Link} from 'react-router-dom'

export const PeoplesItemsList = ({
    name,
    url
}) => {
    const id = url.split('/').filter(x=>x).pop()
    console.log(id)
    return (
        <div>
            <Link to={`/people/${id}`}>{name}</Link>              
            </div>
    )


}