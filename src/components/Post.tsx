import Image from "next/image"

export const Post = () => {
  return (
    <div className="flex gap-[34px] w-[100%] mt-16 ">
            <div className="flex flex-col gap-2 w-[70%]">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/fake-person-1.jpg"
                  className="rounded-full"
                  width={24}
                  height={36}
                  alt="profile pic"
                />
                <h1 className="text-sm font-semibold">Ashley Bretford</h1>
              </div>
              <p className="leading-[20px] md:leading-[28px] text-[16px] md:text-[22px] font-bold text-slate-800 space-y-[2px] cursor-pointer">
                How Generative AI is transforming the creative process for
                wallpaper design
              </p>
              <p className="hidden md:block text-md text-light text-[#787878] md:!line-clamp-2 cursor-pointer">
                The generative design process for wallpaper design is a great
                example of how AI can be used to augment human creativity. In a
                time like this, when we are all stuck at home, it’s a great time
                to explore new ways of being creative. In this article, I will
                show you how I used generative AI to create a wallpaper design
                for my home office.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                  <p className="text-light text-[#787878] text-sm">
                    Jun 10 · 11 min read ·
                  </p>
                  <span className="hidden md:flex  text-[#787878] text-sm border rounded-3xl px-2 py-[2px] bg-[#F2F3F2] cursor-pointer hover:bg-[#d9dbdb]">
                    Product Strategy
                  </span>
                </div>

                {/* Bookmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
            </div>
            
          
            <div className="w-[30%] relative">
              <Image
                src="/images/forest-sunset.jpg"
                fill
                alt=""
              />
            </div>
          </div>
  )
}
