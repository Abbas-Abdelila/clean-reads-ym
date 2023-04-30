import Image from "next/image";
import Link from "next/link";

export const Post = () => {
  return (
    <div className="flex gap-[34px] w-[100%] mt-16 ">
      <div className="flex flex-col gap-2 w-[70%]">
        <div className="flex items-center gap-2">
          <Image
            src="/images/abbas-profile.jpg"
            className="rounded-full"
            width={24}
            height={36}
            alt="profile pic"
          />
          <h1 className="text-sm font-semibold">Abbas Abdelila</h1>
        </div>
        <Link href="/posts/how-to-get-started-with-learning-turkish">
          <p className="leading-[20px] md:leading-[28px] text-[16px] md:text-[22px] font-bold text-slate-800 space-y-[2px] cursor-pointer">
            How To Get Started With Learning Turkish
          </p>
        </Link>
        <p className="hidden md:block text-md text-light text-[#787878] md:!line-clamp-2 cursor-pointer">
          Turkish is a language that is spoken by over 80 million people in the
          world. It is the official language of Turkey and is also spoken in
          Cyprus, Greece, and other parts of Europe. If you want to learn
          Turkish, there are many ways to do so. You can take classes at your
          local community college or university, hire a private tutor, or use an
          online course like Duolingo. In this blog post, we will discuss how
          you can get started with learning Turkish!
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <p className="text-light text-[#787878] text-sm">
              Jun 10 · 11 min read ·
            </p>
            <span className="hidden md:flex  text-[#787878] text-sm border rounded-3xl px-2 py-[2px] bg-[#F2F3F2] cursor-pointer hover:bg-[#d9dbdb]">
              Language Learning
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
          src="/images/learn-turkish.jpg"
          fill
          alt=""
        />
      </div>
    </div>
  );
};
