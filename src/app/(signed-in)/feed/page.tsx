import { Post } from "@/components/Post";
import PostSorter from "./PostSorter";
import TopWriters from "@/app/(default)/tags/TopWriters";
import Image from "next/image";

const UserFeed = () => {
  return (
    <div className="px-6 xs:px-8 sm:px-16 lg:px-24 flex">
      <div className="w-full lg:w-[65%] lg:pr-16 lg:border-r border-gray-200">
        <div className="flex flex-col text-sm">
          <div className="header sm:sticky md:static sm:top-0 sm:z-50 sm:bg-white ">
            <PostSorter />
          </div>

          <div className="feed">
            <Post
              imageName="abbas-profile.jpg"
              userName="Abbas Abdelila"
            />
            <Post
              imageName="Helena-Roseberg.jpg"
              userName="Helena Roseberg"
            />
            <Post
              imageName="Helena-Roseberg.jpg"
              userName="Helena Roseberg"
            />
            <Post
              imageName="Helena-Roseberg.jpg"
              userName="Helena Roseberg"
            />
            <Post
              imageName="Helena-Roseberg.jpg"
              userName="Helena Roseberg"
            />
            <Post
              imageName="Helena-Roseberg.jpg"
              userName="Helena Roseberg"
            />
          </div>
        </div>
      </div>
      <div className="w-[35%] hidden lg:flex lg:pl-16 lg:mt-16 lg:h-screen lg:fixed lg:right-[32px] ">
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col space-y-1   text-xs">
            <div className="editorial-pick">
              <h1 className="text-light font-semibold text-lg mb-3">
                Editorial Pick
              </h1>
            </div>
            <div className="flex space-x-2 items-center">
              <div>
                <Image
                  src="/images/Ashley-Bretford.jpg"
                  width={24}
                  height={24}
                  alt="profile-pic"
                  className="rounded-full"
                />
              </div>
              <p className="font-semibold">
                Jullando Park{" "}
                <span className="text-gray-300 font-semibold">in</span> Fanfare
              </p>
            </div>
            <div>
              <p className="font-semibold text-[16px] mt-1 mb-5 lg:max-w-[360px]">
                The perks of living in culture that prioritizes trust and merit
              </p>
            </div>

            {/* Second post */}
            <div className="flex space-x-2 items-center">
              <div>
                <Image
                  src="/images/Ashley-Bretford.jpg"
                  width={24}
                  height={24}
                  alt="profile-pic"
                  className="rounded-full"
                />
              </div>
              <p className="font-semibold">
                Jullando Park{" "}
                <span className="text-gray-300 font-semibold">in</span> Fanfare
              </p>
            </div>
            <div>
              <p className="font-semibold text-[16px] mt-1 mb-5 lg:max-w-[360px]">
                The perks of living in culture that prioritizes trust and merit
              </p>
            </div>

            {/* Third post */}
            <div className="flex space-x-2 items-center">
              <div>
                <Image
                  src="/images/Ashley-Bretford.jpg"
                  width={24}
                  height={24}
                  alt="profile-pic"
                  className="rounded-full"
                />
              </div>
              <p className="font-semibold">
                Jullando Park{" "}
                <span className="text-gray-300 font-semibold">in</span> Fanfare
              </p>
            </div>
            <div>
              <p className="font-semibold text-[16px] mt-1 mb-5 lg:max-w-[360px]">
                The perks of living in culture that prioritizes trust and merit
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col space-y-4 text-xl font-semibold">
            <h1>Related topics</h1>
            <div className="flex flex-wrap text-sm gap-2 max-w-[366px]">
              <p className="py-[5px] px-3 bg-gray-200 rounded-2xl font-normal text-gray-950  cursor-pointer">
                Programming
              </p>
              <p className="py-[5px] px-3 bg-gray-200 rounded-2xl font-normal text-gray-950  cursor-pointer">
                Music
              </p>
              <p className="py-[5px] px-3 bg-gray-200 rounded-2xl font-normal text-gray-950  cursor-pointer">
                Science
              </p>
              <p className="py-[5px] px-3 bg-gray-200 rounded-2xl font-normal text-gray-950  cursor-pointer">
                Art
              </p>
              <p className="py-[5px] px-3 bg-gray-200 rounded-2xl font-normal text-gray-950  cursor-pointer">
                History
              </p>
              <p className="py-[5px] px-3 bg-gray-200 rounded-2xl font-normal text-gray-950  cursor-pointer">
                Hola
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeed;
