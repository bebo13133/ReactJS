import styles from './Movie.module.css'



export default function Movie({
    id,
    title,
    year,
    plot,
    posterUrl,
    director,
    onDelete,
    onSelected, 
    selected,
}){


    // useEffect(() => {
    //     console.log(`Movie ${title} - updated!`);
    // }, [selected, title]);
    return(
<article className={styles['movie-article']}>
        <h3 >{title} {year}</h3>
        {selected && <h4>Selected</h4>}
        <main>
        <img src={posterUrl} alt={title} />

            <p>{plot}</p>
        </main>
        <footer>
            <p>{director}</p>
<button onClick={()=>onDelete(id)}>Delete</button>
<button onClick={()=>onSelected(id)}>Select</button>
        
        </footer>
</article>

    )



}