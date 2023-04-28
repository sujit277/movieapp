import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [searchValue, setSearchValue] = useState(props.searchValue);
  return (
    <>
      <div className="search">
        <h3 className="apptitle">netflix roulette</h3>
        <button className="addmoviebutton">+ ADD MOVIE</button>
        <h2 className="findmovie">FIND YOUR MOVIE</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.onSearch(searchValue);
          }}
        >
          <input
            className="searchbox"
            placeholder="What do you want to watch"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                props.onSearch(searchValue);
              }
            }}
            style={{ color: "white" }}
          ></input>
          <button type="submit" className="searchbtn">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
