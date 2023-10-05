import Movie from '../components/Movie'

const MovieList = (props)=>{

    return(
        <div>
    <Movie 
      title={props.movies[0].title}
      years={props.movies[0].years}
      cast={props.movies[0].cast}
       />
         <Movie 
      title={props.movies[1].title}
      years={props.movies[1].years}
      cast={props.movies[1].cast}
       />
         <Movie 
      title={props.movies[2].title}
      years={props.movies[2].years}
      cast={props.movies[2].cast}
       />

        </div>
    )
}
export default MovieList