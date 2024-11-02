import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="w-64 p-2 pl-10 rounded border border-gray-300"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
    </div>
  );
};

export default SearchBar;
