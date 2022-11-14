import { FaGithub } from "react-icons/fa";
import {FiArrowRight} from 'react-icons/fi'
import HeadingTwo from "../UI/HeadingTwo";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-2/3 mx-auto space-y-3 text-center">
      <HeadingTwo title="About" />
      <p>
        A movie recommendation tool built with the help of Machine Learning
        (content-based recommender system). Ever take too much time trying to
        find similar movies? Search up a movie on our site and get recommended
        with simlar movies to match your taste!
      </p>
      <p>PS: We built this project to practice our skills.</p>
      <a className="bg-black-bg text-white btn-custom space-x-3 hover:(border-2 border-black-bg bg-white text-black-bg shadow-3xl shadow-black-bg)"
      href="https://github.com/Greeshma2903/movie-recommendation-system">
        <FaGithub />
        <span>GitHub repository</span>
        <FiArrowRight/>
      </a>
    </div>
  );
};

export default React.memo(Contact);
