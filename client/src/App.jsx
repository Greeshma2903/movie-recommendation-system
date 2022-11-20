import ReactDOM from "react-dom";
import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Popular from "./components/PopularMovies/Popular";
import Contact from "./components/Contact/Contact";
import MovieRecommend from "./components/Movie/MovieRecommend";
import NotFound from "./components/transitions/NotFound"
import SearchContext from "./helpers/search-context";
import Loading from "./components/transitions/Loading";

function App() {
  const navRoot = document.getElementById("nav-root");
  const [popularMovies, setPopularMovies] = useState([]);
  const searchCtx = useContext(SearchContext);
  const loadState = searchCtx.loadingState;

  // Fetch popular movies from server
  async function fetchPopularMovies() {
    const res = await fetch("http://localhost:1300/api");
    const popularMoviesData = await res.json();
    // Save movies to state variable
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
      {loadState && <Loading/>}
      <Routes>
        <Route path="/" element={<Popular movieList={popularMovies} />} />
        <Route path="/movie" element={<MovieRecommend />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
