import React from "react";
import "./style.scss";

const SearchFilter = ({ value, handleChange }) => {
  return (
    <div>
      <h4>Type your favorite genre to get the latest games : </h4>
      <br />
      <input value={value} onChange={handleChange} />
      <br />
    </div>
  );
};


export default SearchFilter;
