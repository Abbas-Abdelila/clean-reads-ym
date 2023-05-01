import { Post } from "@/components/Post";
import Image from "next/image";
const UserProfile = () => {
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

          <p className="text-[16px] text-blue-500 cursor-pointer pt-10">
            Account Settings
          </p>
          <p className="text-[16px] text-blue-500 cursor-pointer">
            Change your password
          </p>
          <p className="text-[16px] text-blue-500 cursor-pointer">
            Change account visibility
          </p>
          <p className="text-[16px] text-blue-500 cursor-pointer">
            Change language and location
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
