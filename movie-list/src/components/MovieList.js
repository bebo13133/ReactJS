import Movie from './Movie'
import style from './MovieList.module.css'

export default function MovieList({ movies,onDelete,onSelected }) {


    return (
        <ul className={style.movieList}>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Movie {...movie} 
                    onDelete={onDelete}
                    onSelected={onSelected}
                    />
                    
                </li>

            ))}
        </ul>
    )
}


