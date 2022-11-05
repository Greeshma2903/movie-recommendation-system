import Button from "../UI/Button";
import { FiArrowRight } from "react-icons/fi";
import { IconContext } from "react-icons";

const InputForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("fetch movie results");
  };

  return (
    <form className="w-full flex flex-col items-center justify-between md:space-x-3 md:flex-row space-y-2 md:space-y-0">
      <input
        type="text"
        placeholder="Type movie name..."
        className="w-full px-3 py-2 rounded-full border-3 border-teal-bright"
      />
      <Button
        type="submit"
        ariaLabel="search movie"
        onClick={onSubmitHandler}
        className="btn-custom text-lg bg-teal-light space-x-3 hover:(shadow-teal-bright shadow-3xl)"
      >
        <span>search</span>
        <FiArrowRight
          className="text-red-500 font-font-extrabold"
          strokeWidth="3.5"
        />
      </Button>
    </form>
  );
};
export default InputForm;
