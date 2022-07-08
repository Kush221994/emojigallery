import React from "react";

const SearchBar = ({ value, ...rest }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Type the emoji"
        className="searchbar"
        value={value}
        {...rest}
      />
    </>
  );
};

export default SearchBar;
