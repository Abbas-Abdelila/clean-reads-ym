"use client";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

const ProfileHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-16">
        <div className="profile date flex gap-5">
          <Image
            src="/images/abbas-profile.jpg"
            height={48}
            width={48}
            alt="Socials"
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <h1>Abbas Abdelila</h1>
            <div className="flex gap-3">
              <p className="text-light text-[#787878] text-[14px]">
                Jun 10 · 11 min read ·
              </p>
              <span className="text-blue-400 text-[14px]">Listen</span>
            </div>
          </div>
        </div>
        <div className="socials flex gap-10">
          <div className="icons flex gap-4">
            <TwitterIcon
              fontSize="small"
              className="cursor-pointer text-slate-400 grayscale-[90%] hover:text-black"
            />
            <FacebookRoundedIcon
              fontSize="small"
              className="cursor-pointer text-slate-400 grayscale-[90%] hover:text-black"
            />
            <LinkedInIcon
              fontSize="small"
              className="cursor-pointer text-slate-400 grayscale-[90%] hover:text-black"
            />
            <LinkOutlinedIcon
              fontSize="small"
              className="cursor-pointer text-slate-400 hover:text-black"
            />
          </div>
          <div className="bookmark more flex gap-4">
            <BookmarkAddOutlinedIcon
              fontSize="small"
              className="cursor-pointer text-slate-400 text-light hover:text-black"
            />
            <MoreHorizIcon
              fontSize="small"
              className="cursor-pointer text-slate-400 grayscale-[90%] hover:text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;