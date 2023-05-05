"use client";
import { useState } from "react";
import { plusIcon } from "../../../../public/icons/icons";

const PostSorter = () => {
  const [forYou, setForYou] = useState(true);
  const [following, setFollowing] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [mentalModels, setMentalModels] = useState(false);

  return (
    <div className="flex items-center space-x-8 border-b text-gray-500 text-sm border-gray-200 mt-8  ">
      <div className="cursor-pointer">{plusIcon}</div>
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${
          forYou ? "border-b" : ""
        }`}
        onClick={() => {
          setForYou(true);
          setFollowing(false);
          setProgramming(false);
          setMentalModels(false);
        }}
      >
        For you
      </p>
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${
          following ? "border-b" : ""
        }`}
        onClick={() => {
          setForYou(false);
          setFollowing(true);
          setProgramming(false);
          setMentalModels(false);
        }}
      >
        Following
      </p>
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${
          programming ? "border-b" : ""
        }`}
        onClick={() => {
          setForYou(false);
          setFollowing(false);
          setProgramming(true);
          setMentalModels(false);
        }}
      >
        Programming
      </p>
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${
          mentalModels ? "border-b" : ""
        }`}
        onClick={() => {
          setForYou(false);
          setFollowing(false);
          setProgramming(false);
          setMentalModels(true);
        }}
      >
        Mental Models
      </p>
    </div>
  );
};

export default PostSorter;
