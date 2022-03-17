import React, { useState } from 'react';
import Movie from '../components/movie';
import MovieForm from '../components/movieForm';

const MoviePage = () => {
    const [movies, setmovies] = useState([]);

    const addMoive = (movie) => {
        setmovies([...movies, movie]);
    };

    const removemovie = (id) => {
        setmovies(movies.filter(movie => {return movie.id !== id }));
    };

    const renderMovies = movies.length ? movies.map(movie => {
        return (
        <Movie movie={movie} removemovie={removemovie} key={movie.id}/>
        );
    }) : '추가된 영화가 없습니다.';
    return (
        <>
            <h1>Movie List</h1>
            <MovieForm addMoive={addMoive}/>
            {renderMovies}
        </>
    )
};

export default MoviePage;