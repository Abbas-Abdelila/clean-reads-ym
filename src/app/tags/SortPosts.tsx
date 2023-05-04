"use client";
import { useState } from "react";

const SortPosts = () => {
  const [trending, setTrending] = useState(true);
  const [latest, setLatest] = useState(false);
  const [best, setBest] = useState(false);
  const [thisYear, setThisYear] = useState(false);

  return (
    <div className="flex items-center space-x-8 border-b text-gray-600 border-gray-200 mt-8">
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${
          trending ? "border-b" : ""
        }`}
        onClick={() => {
          setTrending(true);
          setLatest(false);
          setBest(false);
          setThisYear(false);
        }}
      >
        Trending
      </p>
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${
          latest ? "border-b" : ""
        }`}
        onClick={() => {
          setTrending(false);
          setLatest(true);
          setBest(false);
          setThisYear(false);
        }}
      >
        Latest
      </p>
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${
          best ? "border-b" : ""
        }`}
        onClick={() => {
          setTrending(false);
          setLatest(false);
          setBest(true);
          setThisYear(false);
        }}
      >
        Best
      </p>
      <p
        className={`py-4 px-2 border-gray-950 cursor-pointer ${
          thisYear ? "border-b" : ""
        }`}
        onClick={() => {
          setTrending(false);
          setLatest(false);
          setBest(false);
          setThisYear(true);
        }}
      >
        This Year
      </p>
    </div>
  );
};

export default SortPosts;
