"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import writeIcon from "../../public/images/write.jpg";
import SearchBox from "./SearchBox";
import DropDownProfile from "./DropDownProfile";
const ethio = Inter({ subsets: ["latin"] });

const UserNavbar = () => {
  const [text, setText] = useState("");

  return (
    <div className="border-b border-slate-900 w-100% bg-white">
      <div className="h-[65px] flex justify-between items-center w-[98%]">
        <div className="logo flex items-center">
          <Image
            src="/images/medium.png"
            height={70}
            width={110}
            alt="medium logo"
          />
          <SearchBox setText={setText} />
        </div>
        <div className="left flex justify-between space-x-4">
          <p className="flex items-center space-x-2 cursor-pointer">
            <Image
              src={writeIcon}
              width={20}
              height={20}
              alt="write icon"
            />
            <span className="text-[#191919] font-normal">Write</span>
          </p>
          <button className="px-3 pt-1 pb-[6px] bg-[#0F730C] rounded-full text-white w-[72px] flex justify-center items-center font-normal">
            SignUp
          </button>
          <button className="w-[72px] flex justify-center items-center font-normal text-[#191919]">
            SignIn{" "}
          </button>
          <DropDownProfile />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
