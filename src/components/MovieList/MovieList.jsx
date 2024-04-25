import { Movie } from '../Movie/Movie';
import './MovieList.css';

export function MovieList({ movies }) {
    return (
        <div className="movies">
            {movies.map((movie) =>
                <Movie key={movie.imdbID} movie={movie} {...movie} />)}
        </div>
    )
}