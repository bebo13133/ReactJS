import {Link} from 'react-router-dom'



export const Game = ({ 
    title,
    category,
  imageUrl,
_id  
}) => {
    return (
        <>
        
            <div className="allGames">
                <div className="allGames-info">
                    <img src={imageUrl} alt={title}/>
                    <h6>{category}</h6>
                    <h2>{title}</h2>
                    <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
                </div>

            </div>
        </>

    )

}