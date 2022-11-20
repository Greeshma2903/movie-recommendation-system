import { AiTwotoneFire } from "react-icons/ai";
import HeadingTwo from "../UI/HeadingTwo";
import MoviesContainer from "../Movie/MoviesContainer";
import SearchSection from "../Search/SearchSection";
import SearchContext from "../../helpers/search-context";
import { useContext } from "react";

const Popular = (props) => {

  return (
    <>
      <SearchSection />
      <section id="popular__movies">
        <HeadingTwo title="popular">
          <AiTwotoneFire className="text-yellow-golden w-6 h-6" />
        </HeadingTwo>
        <MoviesContainer movieList={props.movieList} />
      </section>
    </>
  );
};
export default Popular;
