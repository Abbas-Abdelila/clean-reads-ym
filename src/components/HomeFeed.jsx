"use client";

import { useEffect, useState } from "react";
import PostsList from "./PostsList";
import Tags from "./Tags.jsx";

const HomeFeed = () => {
  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1076) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-9 md:px-20 gap-x-24 my-16 ">
      <div className="w-full md:w-[65%] md:max-w-[710px]">
        <PostsList />
      </div>
      <div
        className={`flex flex-col w-full md:w-[35%] order-first md:order-last mt-12 md:max-w-[349px] ${
          fixed &&
          `md:fixed z-50 py-10 md:-top-[6%] md:right-[290px] transition-transform duration-600 ease-in`
        }`}
      >
        <Tags />
      </div>
    </div>
  );
};

export default HomeFeed;
