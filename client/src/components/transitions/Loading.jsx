import { FiLoader } from "react-icons/fi";

const Loading = () => {
  return (
    <div className="load__state fixed top-0 left-0 right-0 w-full h-screen z-50 bg-gradient-to-tr from-teal-light flex items-center justify-center transition-all duration-150">
      <div className="rounded border-teal-bright border-3 flex justify-center items-center space-x-3 w-max p-5 bg-teal-light">
        <p>loading</p>
        <FiLoader />
      </div>
    </div>
  );
};

export default Loading;
