import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.scss';

function SearchBar({ handleSearch }) {
  return (
    <div className="searchbar">
      <FaSearch />
      <input placeholder="Search for News..." onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
