"use client";
import React from "react";
import profileImg from "../../public/images/abbas-profile.jpg";
import Image from "next/image";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import Modal from "./Modal";
const DropDownProfile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { handleRegister, open, handleLogin, type, handleClose } = props;

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
          <ArrowDropDownIcon className="text-xl" />
        </button>
      </div>
      {isOpen && (
        <div className="w-[250px] top-[55px] left-[-154px] h-[170px] absolute bg-slate-50 rounded-sm transition-shadow shadow-sm duration-100">
          <h1 className="text-center mb-4 font-medium mt-3">
            Get started on Medium
          </h1>
          <ul className="flex justify-center items-center flex-col space-y-3 w-full">
            <li className="w-[80%]">
              <button
                onClick={handleLogin}
                className="px-3 pt-1 pb-[6px] bg-[#0F730C] rounded-full text-white  flex justify-center items-center font-normal w-full"
              >
                SignIn
              </button>
            </li>
            <li
              onClick={handleRegister}
              className="w-[80%]"
            >
              <button className="px-3 pt-1 pb-[6px] text-black border rounded-full   flex justify-center items-center font-normal w-full">
                SignUp
              </button>
            </li>
          </ul>
        </div>
      )}
      <Modal
        handleClose={handleClose}
        open={open}
        type={type}
      />
    </div>
  );
};

export default DropDownProfile;
