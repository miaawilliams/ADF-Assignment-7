import { useEffect, useState } from 'react';
import { MovieListContext } from './MovieListContext';

export function MovieListProvider({ children }) {
    const [movieList, setMovieList] = useState(
        () => JSON.parse(localStorage.getItem('movieList') || '[]')
    );

    useEffect(() => {
        localStorage.setItem('movieList', JSON.stringify(movieList));
    }, [movieList]);

    const addToMovieList = (movie) => {
        if (!movieList.some(m => m.id === movie.id)) {
            setMovieList(prev => [...prev, movie]);
        }
    };

    const removeFromMovieList = (movieId) => {
        setMovieList(prev => prev.filter(movie => movie.id !== movieId));
    };

    const isInMovieList = (movieId) => {
        return movieList.some(movie => movie.id === movieId);
    };

    const value = {
        movieList,
        addToMovieList,
        removeFromMovieList,
        isInMovieList
    };

    return (
        <MovieListContext.Provider value={value}>
            {children}
        </MovieListContext.Provider>
    );
};