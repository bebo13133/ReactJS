import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import * as gameService from '../../services/gameService'
import { OneGame } from "./OneGame"
import * as commentService from '../../services/commentService'



export const GameDetails = () => {
    const { gameId } = useParams()
    const [detailsGame, setDetailsGame] = useState({})
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])
    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {

                setDetailsGame(result)
                return commentService.getAll(gameId)

            }).then(result => {
                console.log(result)
                setAllComments(result)

            })


    }, [gameId])

    const onCommentSubmit = async (e) => {
        e.preventDefault()
        await commentService.create({
            gameId,
            username,
            comment
        })
        setComment('')
        setUsername('')
    }



    return (
        <section id="game-details">
            <h1>Game Details</h1>

            <OneGame {...detailsGame} allComments={allComments} />

            {/* <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    <input type="text" name="username" placeholder="name" value={username} onChange={(e) => setUsername(e.target.value)} ></input>
                    <textarea name="comment" placeholder="Comment......" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>

    )
}