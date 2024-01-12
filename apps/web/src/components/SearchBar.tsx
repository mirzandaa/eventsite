import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <input
        type="search"
        placeholder="Search Events..."
        className="w-auto bg-white rounded-lg px-5 py-2 md:inline hidden"
      ></input>
    </form>
  );
};

export default SearchBar;
