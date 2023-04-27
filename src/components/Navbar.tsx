import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const ethio = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <>
      <div className="bg-[#FCC017] border-b border-slate-900">
        <div className="px-3 md:px-20 h-[75px] flex justify-between">
          <div className="logo flex items-center">
            <Image
              src="/images/medium.png"
              height={40}
              width={200}
              alt="medium logo"
            />
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
            <Link href="">Sign In</Link>
            <div className="bg-black text-white py-2 px-4 rounded-full hover:bg-green-700 transition ease-in cursor-pointer">
              Get Started
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
