

const Movie = (props) => {

    return (
        <article>
            <h2>{props.title}</h2>
            <ul>
                <li>{props.years}</li>
                <li>{props.cast}</li>

            </ul>
        </article>
    )
}
export default Movie