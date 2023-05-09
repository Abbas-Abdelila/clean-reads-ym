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
    
    <div className="relative flex flex-col lg:flex-row px-9 lg:px-20 lg:gap-x-24 my-16">
    <div className="w-full lg:w-[65%] lg:max-w-[710px]">
      <PostsList />
    </div>
  
    <div className="flex flex-col w-full lg:w-[35%] order-first lg:order-last mt-12">
      <div className="sticky top-0">
        <Tags />
      </div>
    </div>
  </div>
  
  );
};

export default HomeFeed;
