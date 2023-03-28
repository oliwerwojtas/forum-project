import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useState } from "react";

import Sorting from "../components/Sorting";
const TopicList = ({ topics }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white lg:w-11/12 min-h-full sm:w-80  shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="title text-center font-bold text-xl mb-6">Lets talk about...</h2>

        {topics.length === 0 && <p>No topics!</p>}
        <div className="lg:flex gap-2 flex-wrap">
          <Sorting topics={topics} />
        </div>
      </div>
    </div>
  );
};

export default TopicList;
