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
    reqStatus: "error",
    searchedMovie: null,
    recommendMovies: null,
  });

  const navigate = useNavigate();

  const searchMovieHandler = (movieName) => {
    setSearchVal(movieName);
  };

  const fetchMovieDetails = async () => {
    const response = await fetch(`http://localhost:1300/user/${searchVal}`);
    const moviesData = await response.json();
    console.log(moviesData);
    if (Object.keys(moviesData)[0] == "error")
      setSearchResults({
        reqStatus: "error",
        searchedMovie: moviesData[0].error,
        recommendMovies: null,
      });
    else
      setSearchResults({
        reqStatus: "fullfilled",
        searchedMovie: moviesData.searchMovie,
        recommendMovies: moviesData.recommendMovies.splice(1),
      });
  };

  useEffect(() => {
    if (searchVal !== "") {
      fetchMovieDetails();
    }
    console.log("count");
    if (searchResults.reqStatus === "fullfilled") navigate("/movie");
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
