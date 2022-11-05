import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
const ImageHover = (props) => {
  const parentClasses =
    `img-card-size rounded-xl overflow-hidden flex justify-center items-center bg-gradient-to-b from-red-100 to-gradient` +
    props.className;
  return (
    <div className={parentClasses}>
      <Button className="btn-custom bg-teal-light space-x-1 hover:(shadow-teal-bright shadow-3xl)">
        <span>read more</span>
        <FiArrowRight
          className="text-red-500 font-font-extrabold"
          strokeWidth="3.5"
        />
      </Button>
    </div>
  );
};
export default ImageHover;
