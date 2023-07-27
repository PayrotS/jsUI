import React, { useState } from 'react';
import {BiSearch} from 'react-icons/bi'

function SearchBar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value); 
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleInputChange}
      placeholder="Pencarian"
      className='border-blue-900'
    ></input>
  );
}

export default SearchBar;
