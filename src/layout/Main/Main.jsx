import { Component } from 'react';
import './Main.css';

import { MovieList } from '../../components/MovieList/MovieList';
import { Preloader } from '../../components/Preloader/Preloader';
import { Search } from '../../components/Search/Search';

const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = 'c1004236';

export class Main extends Component {
    state = {
        movies: []
    }

    /**
     * Get list of movies
     * @param {*} search 
     * @returns 
     */
    fetchMovies = async (search = 'spring') => {
        const url = `${BASE_URL}?apikey=${API_KEY}&s=${search}`;
        const response = await fetch(url);

        if (response.ok) {
            const movies = await response.json();
            return movies.Search;
        } else {
            alert(`HTTP error: ${response.status}`);
            return [];
        }
    }

    /** Update state */
    updateState = (value) => {
        this.fetchMovies(value).then((movies) => {
            if (movies.length) {
                this.setState({ movies });
            }
        });
    }

    /** Search movies */
    searchMovies = (search) => {
        this.updateState(search);
    }

    componentDidMount() {
        this.updateState();
    }

    render() {
        const { movies } = this.state;

        return (
            <main className="container content">
                <Search searchFn={this.searchMovies} />
                {movies.length
                    ? <MovieList movies={movies} />
                    : <Preloader />
                }
            </main>
        )
    }
}