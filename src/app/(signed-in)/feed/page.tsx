import { Post } from "@/components/Post";
import PostSorter from "./PostSorter";
import TopWriters from "@/app/(default)/tags/TopWriters";

const UserFeed = () => {
  return (
    <div className="px-16 md:px-24 flex md:divide-x md:divide-gray-200 h-screen">
      <div className="w-[65%] md:pr-16">
        <div className="flex flex-col text-sm">
          <div className="header">
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
          </div>
        </div>
      </div>
      <div className="w-[35%]">
        <div className="flex flex-col justify-center items-center pl-16">
          <div className="top-writers !text-xs">
            <TopWriters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeed;
