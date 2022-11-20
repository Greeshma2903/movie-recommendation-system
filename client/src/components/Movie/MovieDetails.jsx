import ImageCard from "../UI/ImageCard";
import { HiStar } from "react-icons/hi";

const MovieDetails = (props) => {
  const releaseDate = new Date(props.movie.release_date);
  const readableDate = `${releaseDate
    .toLocaleString("en-US", {
      month: "long",
    })
    .slice(0, 3)} ${releaseDate.getFullYear()}`;
  const movieGenres = props.movie.genres.map((genre) => {
    return (
      <span
        key={genre.id}
        className="text-sm bg-teal-light px-3 py-1 rounded-xl mr-2 lowercase text-teal-bright"
      >
        {genre.name}
      </span>
    );
  });
  const runtime = props.movie.runtime.toString();
  const movieRuntime = `${Math.floor(runtime / 60)} hours ${runtime % 60} min`;

  return (
    <div className="lg:w-3/4 mx-auto flex flex-col items-start justify-center lg:flex-row lg:items-center lg:space-x-4 my-6">
      <div>
        <ImageCard source={`original/${props.movie.poster_path}`} />
      </div>
      <div className="movie__description space-y-4">
        <h3 className="my-1 text-xl font-bold">{props.movie.original_title}</h3>
        <div className="flex items-center justify-between text-sm italic font-bold text-xl">
          <div className="rating__div flex items-start">
            <HiStar className="text-red-mild mr-1 text-lg" />
            <p className="text-gray-500">{props.movie.vote_average}/10</p>
          </div>
          <p className="text-teal-bright">{readableDate}</p>
        </div>
        <h4 className="font-bold">Overview:</h4>
        <p>{props.movie.overview}</p>
        <p className="text-sm font-semibold">Runtime: {movieRuntime}</p>
        <div className="flex">{movieGenres}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
