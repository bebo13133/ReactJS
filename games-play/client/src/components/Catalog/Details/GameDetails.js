import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {gameServiceFactory} from '../../services/gameService'
import { OneGame } from "./OneGame"
import {commentServiceFactory} from '../../services/commentService'
import { useService } from "../../../Hooks/useService"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export const GameDetails = ({
    
}) => {
    const { gameId} = useParams()
    const [detailsGame, setDetailsGame] = useState({})
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])

    
    const{token} = useContext(UserContext)
    const gameService = useService(gameServiceFactory)
    const commentService = commentServiceFactory(token)

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {

                setDetailsGame(result)
                return commentService.getAll(gameId)

            }).then(result => {
                console.log(result)
                setAllComments(result)

            })


    },[gameId])

    const onCommentSubmit = async (e) => {
        e.preventDefault()
      const game=  await commentService.create({
            gameId,
            username,
            comment
        })

        console.log(...game.comment)
     
        setAllComments((prevComments) => [...prevComments,{comment: game.comment, username: game.username}])
         console.log(allComments)
        setComment('')
        setUsername('')
    }

 const ownerId = detailsGame._ownerId

    return (
        <section id="game-details">
            <h1>Game Details</h1>

            <OneGame {...detailsGame} allComments={allComments} _ownerId={ownerId}/>

            {token && ( <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    <input type="text" name="username" placeholder="name" value={username} onChange={(e) => setUsername(e.target.value)} ></input>
                    <textarea name="comment" placeholder="Comment......" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>) }
           

        </section>

    )
}