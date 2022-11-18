import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SearchContext = React.createContext({
  results: {},
  searchMovie: () => {},
});

export const SearchContextProvider = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState({
    searchedMovie: null,
    recommendMovies: null,
  });
  const navigate = useNavigate();

  const searchMovieHandler = (movieName) => {
    setSearchVal(movieName);
  };

  const fetchMovieDetails = async () => {
    const response = await fetch(`http://localhost:1300/user/${searchVal}`);
    if (response.ok) {
      const moviesData = await response.json();
      setSearchResults((prev) => {
        return {
          searchedMovie: moviesData.searchMovie,
          recommendMovies: moviesData.recommendMovies
        };
      });
      console.log(moviesData);
    } else console.log("error in fetching data");
    setSearchVal("");
  };

  useEffect(() => {
    if (searchVal !== "") {
      fetchMovieDetails();
    }
    console.log("context");
    if (searchResults.searchedMovie !== null) {
      navigate(`/movie`);
    }
  }, [searchVal, searchResults]);

  const contextValue = {
    searchMovie: searchMovieHandler,
    results: searchResults,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
