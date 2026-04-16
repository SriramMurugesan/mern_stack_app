import React, { useState } from 'react';
import { movies } from './data/movies';
import MovieGrid from './components/MovieGrid';
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // The Re-render Cycle in action:
  // When setSearchQuery is called, App re-renders, and filteredMovies is re-calculated.
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="logo">Cine<span>Search</span></h1>
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>

      <main className="main-content">
        <div className="section-title">
          <h2>{searchQuery ? `Results for "${searchQuery}"` : "Trending Movies"}</h2>
          <span className="count-badge">{filteredMovies.length} movies</span>
        </div>
        
        <MovieGrid movies={filteredMovies} />
      </main>

      <footer className="footer">
        <p>Day 3: React Foundations Lab • Built with ❤️ and React</p>
      </footer>
    </div>
  );
}

export default App;
