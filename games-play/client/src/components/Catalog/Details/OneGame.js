import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { useGameContext } from "../../contexts/GameContext"
export const OneGame = ({
    title,
    category,
    imageUrl,
    maxLevel,
    _id,
    summary,
    allComments,
    _ownerId,
    
}) => {
    const {onDeleteClick} = useGameContext()
    const{userId} = useContext(UserContext)
    const isOwner = _ownerId=== userId
    console.log(isOwner)
    return (
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={imageUrl} alt={title} />
                <h1>{title}</h1>
                <span className="levels">Max Level: {maxLevel}</span>
                <p className="type">{category}</p>
            </div>

            <p className="text">{summary}</p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                { }
                <h2>Comments:</h2>
                <ul >
                    {allComments.map(c =>
                        <li key={c._id} className="comment">
                            <p>{c.comment}</p>
                        </li>
                    )}
                </ul>
                {allComments.length === 0 && <p className="no-comment">No comments.</p>}

                {/* <!-- Display paragraph: If there are no games in the database --> */}

            </div>

            {isOwner &&  <div className="buttons">
                <Link to={`/catalog/${_id}/edit`} className="button">Edit</Link>
                <button onClick={()=>onDeleteClick(_id)} className="button">Delete</button>
            </div>}
           
        </div>
    )


}