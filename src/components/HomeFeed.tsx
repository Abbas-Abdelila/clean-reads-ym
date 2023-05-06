"use client";

import { useEffect, useState } from "react";
import PostsList from "./PostsList";
import Tags from "./Tags";

const HomeFeed = (): JSX.Element => {
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
    <div className="flex flex-col lg:flex-row px-9 lg:px-20 lg:gap-x-24 my-16 ">
      <div className="w-full lg:w-[65%] lg:max-w-[710px]">
        <PostsList />
      </div>
      <div className={`flex flex-col w-full lg:w-[35%] order-first lg:order-last mt-12 lg:max-w-[349px] ${fixed && `xl:fixed z-50 py-10 xl:-top-[80px] xl:right-[114px] transition-transform duration-600 ease-in`}`}>
          <Tags />
      </div>
    </div>
  );
};

export default HomeFeed;
