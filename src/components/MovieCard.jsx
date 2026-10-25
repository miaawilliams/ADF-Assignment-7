import { useState, useEffect } from 'react';

function MovieCard({ movie, onFavoriteChange }) {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteMovie')) || [];
    const isMovieFavorite = favorites.some(fav => fav.id === movie.id);
    setIsFavorite(isMovieFavorite);
  }, [movie.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteMovie')) || [];
    const isMovieFavorite = favorites.some(fav => fav.id === movie.id);
    const updatedFavorites = isMovieFavorite
      ? favorites.filter(fav => fav.id !== movie.id)
      : [...favorites, movie];

    localStorage.setItem('favoriteMovie', JSON.stringify(updatedFavorites));
    setIsFavorite(!isMovieFavorite);
    onFavoriteChange?.(updatedFavorites);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
      <img 
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
        alt={movie.title}
      />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">{movie.release_date.substring(0, 4)}</span>
        </div>
        <button 
          className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? '♥ Remove from Favorites' : '♡ Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;