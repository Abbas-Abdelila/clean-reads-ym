'use client'
import Image from "next/image";
import Link from "next/link";
import { savePost } from "../../public/icons/icons";
import { usePathname } from 'next/navigation';
import PostMenu from "./PostMenu";
import { useEffect } from "react";



type PostProps = {
  imageName: string;
  userName: string;
};




export const Post = ({ imageName, userName }: PostProps) => {

  const url = usePathname();
  const pattern =  /^\/users\/([^/]+)$/;
  const result = url.match(pattern);

  useEffect(() => {
  try {
    if (!localStorage.getItem('username')) {
      localStorage.setItem('username', 'Schauf Bammer');
    }
  } catch (error) {
    console.log(error)
  }
  
  
}, []);
  
  return (
    <div className="flex gap-[34px] w-[100%] my-16 ">
      <div className="flex flex-col gap-2 w-[70%]">
        <div className="flex items-center gap-2">
          <Image
            src={`/images/${imageName}`}
            className="rounded-full"
            width={24}
            height={36}
            alt="profile pic"
          />
          <h1 className="text-sm font-semibold">{userName}</h1>
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
          <div className="flex space-x-1">
            {savePost}
            {(result && localStorage.getItem('username') === 'Schauf Bammer') && (<PostMenu userName={userName} />) }
          </div>
        </div>
      </div>

      <div className="w-[30%] relative">
        <Image
          src="/images/learn-turkish.jpg"
          alt="ChatGPT image"
          height={128}
          width={192}
        />
      </div>
    </div>
  );
};
