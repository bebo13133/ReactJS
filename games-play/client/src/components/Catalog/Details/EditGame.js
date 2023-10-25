import { useEffect } from "react"
import { useService } from "../../../Hooks/useService"
import { useForm } from "../../../Hooks/useForm"
import { gameServiceFactory } from "../../services/gameService"
import { useParams } from "react-router-dom"
import { useGameContext } from "../../contexts/GameContext"
export const EditGame = ({

}) => {
const {gameId} = useParams()

const {onEditSubmit} = useGameContext()

    const gameService = useService(gameServiceFactory)
const {onSubmit, onChangeHandler,onChangeValues,values} =useForm({
    _id:"",
    title:"",
    category: "",
    maxLevel: '',
    imageUrl: "",
    summary: "",
}, onEditSubmit)


useEffect(()=>{
gameService.getOne(gameId)
    .then(result=>{
        onChangeValues(result)
    })
},[gameId])

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="POST" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onChangeHandler}/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={onChangeHandler}/>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value={values.maxLevel} onChange={onChangeHandler}/>

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChangeHandler}/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={onChangeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    )

}