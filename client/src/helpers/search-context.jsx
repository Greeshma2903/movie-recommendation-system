import React, { useState } from "react";

const SearchContext = React.createContext({
  searchVal: "",
  searchMovie: () => {},
});

export const SearchContextProvider = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const searchMovieHandler = (movieName) => {
    console.log(movieName);
    setSearchVal(movieName);
  };

  const contextValue = {
    searchVal: searchVal,
    searchMovie: searchMovieHandler,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
