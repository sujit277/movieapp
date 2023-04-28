import React, { useEffect, useState } from "react";
import axios from "axios";
import GenreSelect from "./Components/GenreSelect/GenreSelect";
import Counter from "./Components/Counter/Counter";
import SearchForm from "./Components/SearchForm/SearchForm";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState();

  useEffect(() => {
    getallMOvies();
  }, []);

  function onSearch(searchText) {
    console.log(searchText);
  }

  function onSelect(movieName) {
    setSelectedGenre(movieName);
    console.log(movieName);
  }

  async function getallMOvies() {
    const result = await axios.get("http://localhost:4000/movies");
    setMovieData(result.data.data);
  }

  return (
    <>
     {/*  <Counter count={count}></Counter> */}
      <SearchForm
        searchValue="Beauty and the Beast"
        onSearch={onSearch}
      ></SearchForm>
      <GenreSelect
        movieData={movieData}
        onSelect={onSelect}
        selectedGenre={selectedGenre}
      ></GenreSelect>
    </>
  );
};

export default App;
