import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="poster-container">
        <img src={movie.poster} alt={movie.title} />
        <div className="rating-badge">{movie.rating}</div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span>{movie.year}</span>
          <span className="genre-tag">{movie.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
