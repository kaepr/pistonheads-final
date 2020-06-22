import React from "react";

const SearchFilter = ({ value, handleChange }) => {
  return (
    <div>
      <h4>Input here the genre you want to see : </h4>
      <input value={value} onChange={handleChange} />
    </div>
  );
};


export default SearchFilter;
