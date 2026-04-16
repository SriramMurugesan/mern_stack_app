import React from 'react';

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="search-icon">🔍</div>
    </div>
  );
};

export default SearchBox;
