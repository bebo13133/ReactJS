

export const OneGame = ({
    title,
    category,
    imageUrl,
    maxLevel,
    _id,
    summary,
    allComments
}) => {

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
                            <p>{c.username}: {c.comment}</p>
                        </li>
                    )}
                </ul>
                {allComments.length === 0 && <p className="no-comment">No comments.</p>}

                {/* <!-- Display paragraph: If there are no games in the database --> */}

            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>
    )


}