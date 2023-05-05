import { Post } from "@/components/Post";
import TagHeader from "../TagHeader";
import TopWriters from "../TopWriters";
import { splitAndJoin } from "@/utils/TagDecipher";
import SortPosts from "../SortPosts";

type Params = {
  params: {
    tag: string;
  };
};



const TagsPage = ({ params: { tag } }: Params) => {
  
  
  const tagName = splitAndJoin(tag);
  

  return (
    <div className="px-20 flex justify-between space-x-8 md:divide-x-[1px]">
      <div className="w-full md:w-[65%] order-first">
        <div className="flex flex-col gap-10">
          <div className="flex-col">
            <TagHeader tag={tagName} />
            <div className="flex items-center space-x-4 my-4">
              <button className="border bg-green-500 text-white py-1 px-3 rounded-2xl">
                Follow
              </button>
              <button className="border border-green-500  py-1 px-3 rounded-2xl">
                Start Writing
              </button>
            </div>
            <SortPosts />
            {/* <div className="flex items-center space-x-8 border-b text-gray-600 border-gray-200 mt-8">
              <p className={`py-4 px-2 border-gray-950 cursor-pointer ${trending ? 'border-b' : ''}`}
              onClick={() =>{
                setTrending(true);
                setLatest(false);
                setBest(false);
                setThisYear(false);
              }}>
                Trending
              </p>
              <p className="py-4 px-2 cursor-pointer"
              onClick={() =>{
                setTrending(false);
                setLatest(true);
                setBest(false);
                setThisYear(false);
              }}
              >Latest</p>
              <p className="py-4 px-2 cursor-pointer"
              onClick={() => {
                setTrending(false);
                setLatest(false);
                setBest(true);
                setThisYear(false);
              }}
              >Best</p>
              <p className="py-4 px-2 cursor-pointer"
              onClick={() => {
                setTrending(false);
                setLatest(false);
                setBest(false);
                setThisYear(true);
              }}
              >This Year</p>
            </div> */}
          </div>
          <Post imageName="Schauf-Bammer.jpg" userName="Schauf Bammer" />
          {/* add line break with gray color */}
          <div className="border-b border-gray-200"></div>
          {/* <Post /> */}
          <div className="border-b border-gray-200"></div>
          <Post imageName="abbas-profile.jpg" userName="Abbas Abdelila"/>
          <div className="border-b border-gray-200"></div>
        </div>
      </div>
      <div className="w-full hidden sm:flex  md:w-[35%] order-last md:fixed md:top-[100px] md:right-0 md:h-screen">
        <div className="flex flex-col mt-16 md:ml-8">
          {/* <Tags /> */}
          {/* <div className="border-b-[1px] border-gray-200"></div> */}
          <TopWriters />
          {/* <div className="hidden sm:flex flex-col space-y-4 mt-16">
            <h1 className="text-xl font-semibold">Top Writers</h1>
            

            <div className="hidden sm:flex space-x-4 items-center">
              <div className="hidden profile-picture md:flex">
                <Image
                  src="/images/Mike-Greenwood.jpg"
                  width={50}
                  height={50}
                  alt="profile picture"
                  className="hidden md:flex rounded-full"
                />
              </div>
              <div className="sm:flex flex-col items-start">
                <p className="text-sm sm:text-md md:text-lg font-semibold">
                  Au Chang
                </p>
                <p className="hidden text-sm :flex md:text-lg  text-gray-600 font-light">
                  I love observing and writing
                </p>
              </div>
              <div>
                <button className="hidden sm:flex sm:text-sm border bg-green-500 text-white py-1 px-3 rounded-2xl">
                  Follow
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
