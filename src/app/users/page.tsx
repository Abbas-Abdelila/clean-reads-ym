"use client";

import React, { useState } from "react";
import { Modal, Switch } from "antd";
import { Post } from "@/components/Post";
import Image from "next/image";
const UserProfile: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState(false);
  const [userName, setUserName] = useState(false);
  const [password, setPassword] = useState(false);
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="px-20 flex justify-between space-x-8 md:divide-x-[1px] mt-16">
      <div className="w-full md:w-[65%] order-first">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-semibold items-start">Abbas Abdelila</h1>
          <div className="flex items-center space-x-8 border-b text-gray-600 border-gray-200 mt-8">
            <p className="py-4 px-2 border-b border-gray-950 cursor-pointer">
              Home
            </p>
            <p className="py-4 px-2 cursor-pointer">About</p>
          </div>
          <Post />
        </div>
      </div>
      <div className="w-full hidden sm:flex  md:w-[35%] order-last md:fixed md:top-[100px] md:right-0 md:h-screen">
        <div className="profile flex flex-col space-y-3 ml-8">
          <Image
            src="/images/abbas-profile.jpg"
            height="88"
            width={88}
            alt="Profile Picture"
            className="rounded-full"
          />
          <h1 className="text-[16px] font-semibold">Abbas Abdelila</h1>
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
              <h1 className="text-2xl font-semibold justify-start">
                Image Url
              </h1>
              <input
                placeholder="image url..."
                className="py-2 px-4 border border-green-300 rounded-md focus:border-green-500 focus:outline-none"
              />
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
              <h1 className="text-2xl font-semibold justify-start">
                Public
              </h1>
              <Switch defaultChecked autoFocus className="bg-gray-400" />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
