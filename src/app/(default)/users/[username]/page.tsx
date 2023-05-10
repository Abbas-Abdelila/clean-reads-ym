"use client";
import React, { useState } from "react";
import { Modal, Switch } from "antd";
import { Post } from "@/components/Post";
import Image from "next/image";
import { splitAndJoinSpace, splitAndJoinHyphen } from "@/utils/UserDecipher";


type Params = { params: { username: string } };


const UserProfile = ({ params: { username } }: Params) => {
  const [profilePicture, setProfilePicture] = useState(false);
  const [password, setPassword] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const userName = splitAndJoinSpace(username);
  const image = splitAndJoinHyphen(username);
  

  return (
    <>
    <head>
      <title>{`${userName}'s Profile`}</title>
    </head>
    <div className="px-5 md:px-10 lg:px-20 flex justify-between space-x-8 md:divide-x-[1px] mt-16">
      <div className="w-full md:w-[65%] order-first">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-semibold items-start">{userName}</h1>
          <div className="flex items-center space-x-8 border-b text-gray-600 border-gray-200 mt-8">
            <p className="py-4 px-2 border-b border-gray-950 cursor-pointer">
              Home
            </p>
            <p className="py-4 px-2 cursor-pointer">About</p>
          </div>
          <Post
            imageName={`${image}.jpg`}
            userName={userName}
          />
        </div>
      </div>
      <div className="w-full hidden md:flex  md:w-[35%] order-last md:fixed md:top-[100px] md:right-0 md:h-screen">
        <div className="profile flex flex-col space-y-3 ml-8">
          <Image
            src={`/images/${image}.jpg`} // Route of the image file
            height="88"
            width={88}
            alt="Profile Picture"
            className="rounded-full"
          />
          <h1 className="text-[16px] font-semibold">{userName}</h1>
          <p className="text-[14px] text-slate-500 text-light">Entrepreneur</p>
          <p className="text-[14px] text-slate-500 text-light">
            Founder of{" "}
            <span className="text-red-400 font-semibold italic">
              Pick-Turkish
            </span>
          </p>

          <p
            className="text-[16px] text-blue-500 cursor-pointer pt-10"
            onClick={() => setProfilePicture(true)}
          >
            Change profile picture
          </p>
          <p
            className="text-[16px] text-blue-500 cursor-pointer"
            onClick={() => setPassword(true)}
          >
            Change your password
          </p>
          <p
            className="text-[16px] text-blue-500 cursor-pointer"
            onClick={() => setVisibility(true)}
          >
            Change account visibility
          </p>

          <Modal
            title="Change Profile Picture"
            centered
            open={profilePicture}
            onCancel={() => setProfilePicture(false)}
            footer={null}
          >
            <div className="flex flex-col justify-start space-y-4 my-20">
              <div className="flex justify-center items-center cursor-pointer">
                <div className="h-[130px] w-[130px] flex justify-center items-center rounded-full bg-gray-100 border border-green-500">
                  <p className="text-3xl text-light ">+</p>
                </div>
              </div>

              <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-100 text-gray-700 rounded-lg shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-green-500">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M17 2H3a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zM8 9a1 1 0 011-1h2a1 1 0 010 2H9a1 1 0 01-1-1zm7 6H5a1 1 0 01-1-1V7h14v7a1 1 0 01-1 1z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  Select a Photo
                </span>
                <input
                  type="file"
                  className="hidden"
                />
              </label>

              <div className="flex justify-center items-center">
                <button className="bg-green-500 text-white py-2 px-4 rounded-md w-24 mb-10">
                  Upload
                </button>
              </div>

              <button className="bg-green-500 text-white py-2 px-4 rounded-md">
                Change Profile Picture
              </button>
            </div>
          </Modal>

          <Modal
            title="Change your password"
            centered
            open={password}
            onCancel={() => setPassword(false)}
            footer={null}
          >
            <div className="flex flex-col justify-start space-y-4 my-20">
              <h1 className="text-2xl font-semibold justify-start">
                Old Password
              </h1>
              <input
                placeholder="old password"
                type="password"
                className="py-2 px-4 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
              />
              <h1 className="text-2xl font-semibold justify-start mt-4">
                New password
              </h1>
              <input
                placeholder="new password"
                type="password"
                className="py-2 px-4 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
              />
              <button className="bg-green-500 text-white text-xl py-2 px-4 rounded-md hover:bg-green-600 transition-transform ease-out duration-150">
                Change password
              </button>
            </div>
          </Modal>

          <Modal
            title="Change visibility"
            centered
            open={visibility}
            onCancel={() => setVisibility(false)}
            footer={null}
          >
            <div className="flex justify-center items-center space-x-4 my-20">
              <h1 className="text-2xl font-semibold justify-start">Public</h1>
              <Switch
                defaultChecked
                autoFocus
                className="bg-gray-400"
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserProfile;
