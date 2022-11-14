import ImageCard from "../UI/ImageCard";
import { HiStar } from "react-icons/hi";

const MovieDetails = (props) => {
  // const releaseDate = `${props.release_date
  //     .toLocaleString("en-US", {
  //       month: "long",
  //     })
  //     .slice(0, 3)} ${props.release_date.getFullYear()}`;
  // const movieGenres = props.genres.map((genre) => {
  //   return genre.name;
  // });

  return (
    <div className="flex items-center">
      <ImageCard
        source={`original/${props.poster}`}
        className="border-2 border-teal-bright"
      />
      <div>
        <h3 className="my-1 text-xl font-bold">{props.original_title}</h3>
        <div className="flex items-center justify-between text-sm italic font-medium">
          <div className="rating__div flex items-start">
            <HiStar className="text-red-mild mr-1 text-lg" />
            <p className="text-gray-500">{props.vote_average}/10</p>
          </div>
          <p className="text-teal-bright">{props.release_date}</p>
        </div>
        <h4>Overview</h4>
        <p>{props.overview}</p>
        {/* {movieGenres.map((genre) => {
          return <p>{genre}</p>;
        })} */}
      </div>
    </div>
  );
};

export default MovieDetails;
