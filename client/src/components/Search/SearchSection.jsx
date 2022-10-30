import React from "react";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import InputForm from "./InputForm";

const SearchSection = () => {
  return (
    <div className="my-7">
      <div className="h2__wrapper flex items-center justify-left space-x-3 my-3">
        <h2 className="text-2xl font-extrabold">Search</h2>
        <FaSearch className="text-red-mild w-6 h-6" />
      </div>
      <InputForm />
    </div>
  );
};
export default SearchSection;
