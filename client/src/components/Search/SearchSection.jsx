import React from "react";
import { FaSearch } from "react-icons/fa";
import InputForm from "./InputForm";
import HeadingTwo from "../UI/HeadingTwo";

const SearchSection = () => {
  return (
    <div className="my-7">
      <HeadingTwo title="search">
        <FaSearch className="text-red-mild w-6 h-6" />
      </HeadingTwo>
      <InputForm />
    </div>
  );
};
export default SearchSection;
