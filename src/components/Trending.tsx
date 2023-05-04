import Image from "next/image";
import Link from "next/link";

const Trending = () => {
  return (
    <div className="flex flex-col gap-2 w-full mt-16 mb-10 border-b pb-3 px-20">
      <div className="flex gap-4 items-center mt-8">
        <span className="border border-slate-600 rounded-full  text-slate-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
        </span>
        <h1 className="text-md font-semibold ">Trending on Medium</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
        <div className="flex gap-6 mb-8">
          <p className="text-3xl text-slate-300 ">01</p>
          <div className="flex flex-col py-2 gap-2">
            <Link href="/users/schauf-bammer">
              <div className="flex gap-3 items-center">
                <Image
                  width={25}
                  height={30}
                  src="/images/Schauf-Bammer.jpg"
                  alt=""
                  className="rounded-full"
                />
                <p className="text-sm">Schauf Bammer</p>
              </div>
            </Link>
            <p className="text-lg font-semibold">
              The In's and Out's Real Estate Investment
            </p>
            <p className="text-slate-600 text-light text-sm">
              Jan 19 - 15 mins read
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <p className="text-3xl text-slate-300 ">02</p>
          <div className="flex flex-col py-2 gap-2">
            <Link href="/users/ashley-bretford">
              <div className="flex gap-3 items-center">
                <Image
                  width={25}
                  height={30}
                  src="/images/Ashley-Bretford.jpg"
                  alt=""
                  className="rounded-full"
                />
                <p className="text-sm">Ashley Bretford</p>
              </div>
            </Link>
            <p className="text-lg font-semibold">EU's policy on Big Tech</p>
            <p className="text-slate-600 text-light text-sm">
              Apr 13 - 7 mins read
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <p className="text-3xl text-slate-300 ">03</p>
          <div className="flex flex-col py-2 gap-2">
            <Link href="/users/helena-roseberg">
              <div className="flex gap-3 items-center">
                <Image
                  width={25}
                  height={30}
                  src="/images/Helena-Roseberg.jpg"
                  alt=""
                  className="rounded-full"
                />
                <p className="text-sm">Helena Roseberg</p>
              </div>
            </Link>
            <p className="text-lg font-semibold">
              The Economics of Football Leagues across the World
            </p>
            <p className="text-slate-600 text-light text-sm">
              Mar 20 - 9 mins read
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <p className="text-3xl text-slate-300 ">04</p>
          <div className="flex flex-col py-2 gap-2">
            <Link href="/users/mike-greenwood">
              <div className="flex gap-3 items-center">
                <Image
                  width={25}
                  height={30}
                  src="/images/Mike-Greenwood.jpg"
                  alt=""
                  className="rounded-full"
                />
                <p className="text-sm">Mike Greenwood</p>
              </div>
            </Link>
            <p className="text-lg font-semibold">
              How I Almost Got Fired From My Own Company
            </p>
            <p className="text-slate-600 text-light text-sm">
              Aug 06 - 7 mins read
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <p className="text-3xl text-slate-300 ">05</p>
          <div className="flex flex-col py-2 gap-2">
            <Link href="/users/au-chang">
              <div className="flex gap-3 items-center">
                <Image
                  width={25}
                  height={30}
                  src="/images/Au-Chang.jpg"
                  alt=""
                  className="rounded-full"
                />
                <p className="text-sm">Au Chang</p>
              </div>
            </Link>
            <p className="text-lg font-semibold">
              Communication in Modern Times
            </p>
            <p className="text-slate-600 text-light text-sm">
              Jun 03 - 3 mins read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
