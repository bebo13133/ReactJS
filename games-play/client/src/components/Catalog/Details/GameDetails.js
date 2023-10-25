import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {gameServiceFactory} from '../../services/gameService'
import { OneGame } from "./OneGame"
import * as commentService from "../../services/commentService"
import { useService } from "../../../Hooks/useService"
import { useContext } from "react"
import { UserContext, useAuthContext } from "../../contexts/UserContext"
import { AddComment } from "./AddComment"

export const GameDetails = () => {
    const { gameId} = useParams()
    const [detailsGame, setDetailsGame] = useState({})
    // const [username, setUsername] = useState('')
    // const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])
    const{userId} = useContext(UserContext)
    
    const{isAuthentication} = useAuthContext()
    const gameService = useService(gameServiceFactory)
    // const commentService = commentServiceFactory(token)

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

    const onCommentSubmit = async (values) => {
     
      const response=  await commentService.create(
            gameId,
          values.comment,
   
         )
     
    setAllComments((prevComments) => [...prevComments,{comment: response.comment, username: response.username}])
        //  console.log(allComments)
        // setComment('')
        // setUsername('')
    }

 const ownerId = detailsGame._ownerId
 const isOwner = ownerId=== userId
    return (
        <section id="game-details">
            <h1>Game Details</h1>

            <OneGame {...detailsGame} allComments={allComments} _ownerId={ownerId}/>

            {(isAuthentication && !isOwner) && <AddComment onCommentSubmit={onCommentSubmit} />}


        </section>

    )
}