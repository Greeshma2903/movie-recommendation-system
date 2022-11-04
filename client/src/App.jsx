import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Nav/Navbar";
import Popular from "./components/PopularMovies/Popular";
import SearchSection from "./components/Search/SearchSection";

function App() {
  const navRoot = document.getElementById("nav-root");
  const [popularMovies, setPopularMovies] = useState([]);

  async function fetchPopularMovies() {
    const res = await fetch("http://localhost:1300/");
    const popularMoviesData = await res.json();
    setPopularMovies(
      popularMoviesData.map((movieObjects) => {
        return movieObjects.results[0];
      })
    );
  }

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      {ReactDOM.createPortal(<Navbar />, navRoot)}
      <SearchSection />
      <Popular movieList={popularMovies} />
    </>
  );
}

export default App;
