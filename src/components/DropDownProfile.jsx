"use client";
import React from "react";
import profileImg from "../../public/images/abbas-profile.jpg";
import Image from "next/image";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
const DropDownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center gap-1 relative">
        <Link href={"/"}>
          <Image
            className="rounded-full cursor-pointer"
            src={profileImg}
            width={40}
            height={40}
            alt="profile img"
          />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <ArrowDropDownIcon />
        </button>
      </div>
    </div>
  );
};

export default DropDownProfile;
