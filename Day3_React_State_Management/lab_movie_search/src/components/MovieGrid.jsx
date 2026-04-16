import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="no-results">
        <h2>No movies found matching your search.</h2>
        <p>Try searching for something else!</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
