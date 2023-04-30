import React from "react";
import search from "../../public/images/search.png";
import Image from "next/image";
const SearchBox = ({ setText }) => {
  return (
    <div className="content w-7">
      <div className="flex w-[240px] p-3 justify-between bg-[#FAFBFB] items-center border-black rounded-full">
        <Image
          src={search}
          alt="search"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <input
          className="outline-none bg-inherit font-sans"
          onChange={(e) => setText(e.target.value)}
          type="search"
          name="search"
          placeholder="Search Medium"
        />
      </div>
    </div>
  );
};

export default SearchBox;
