"use client";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Modal } from "antd";
import { useState } from "react";

const ethio = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#FCC017] border-b border-slate-900">
        <div className="px-3 md:px-20 h-[75px] flex justify-between">
          <div className="logo flex items-center">
            <Link href="/">
              <Image
                src="/images/medium.png"
                height={40}
                width={200}
                alt="medium logo"
              />
            </Link>
          </div>
          <div
            className={`flex items-center space-x-5 text-sm ${ethio.className}`}
          >
            <Link
              href=""
              className="hidden md:flex"
            >
              Our story
            </Link>
            <Link
              href=""
              className="hidden md:flex"
            >
              Membership
            </Link>
            <Link
              href=""
              className="hidden md:flex"
            >
              Write
            </Link>
            <div onClick={() => setVisible(true)}> Sign In </div>
            <div className="bg-black text-white py-2 px-4 rounded-full hover:bg-green-700 transition ease-in cursor-pointer">
              Get Started
            </div>

            <Modal
              title="Sign In"
              open={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <div className="flex flex-col space-y-3 h-[400px]">
                <div className="flex justify-center items-center my-4">
                  <Image
                    src="/images/medium.png"
                    width={200}
                    height={100}
                    alt="medium logo"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition ease-in duration-150 px-2 py-1"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition ease-in duration-150 px-2 py-1 "
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="border border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition ease-in duration-150 px-2 py-1 "
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <Link href="">Forgot password?</Link>
                </div>
                <div className="flex justify-center">
                  <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-green-700 transition ease-in cursor-pointer">
                    Sign In
                  </button>
                </div>
                <div className="flex justify-center ">
                  <p>
                    Don't have an account?{" "}
                    <span
                      className="cursor-pointer text-blue-500 hover:underline transition ease-in duration-150"
                      onClick={() => {
                        setVisible(false);
                        setOpen(true);
                      }}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </div>
            </Modal>

            <Modal
              title="Sign up"
              open={open}
              onCancel={() => setOpen(false)}
              footer={null}
            >
              {/* Sign up to medium form */}
              <div className="flex flex-col space-y-3 h-[400px]">
                <div className="flex justify-center items-center my-4">
                  <Image
                    src="/images/medium.png"
                    width={200}
                    height={100}
                    alt="medium logo"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition ease-in duration-150 px-2 py-1"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="password">Create Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition ease-in duration-150 px-2 py-1 "
                  />
                  <label htmlFor="password">Repeat Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition ease-in duration-150 px-2 py-1 "
                  />
                </div>
                <div className="flex justify-center">
                  <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-green-700 transition ease-in cursor-pointer">
                    Sign Up
                  </button>
                </div>
                <div className="flex justify-center">
                  <p>
                    Already have an account?{" "}
                    <span
                      className="cursor-pointer text-blue-500 hover:underline transition ease-in duration-150"
                      onClick={() => {
                        setOpen(false);
                        setVisible(true);
                      }}
                    >
                      Sign In
                    </span>
                  </p>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
