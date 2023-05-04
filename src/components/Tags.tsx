import Link from "next/link";

const Tags = () => {
  return (
    <>
      <h1 className="font-semibold text-[16px] mb-5 py-4">
        Discover more of what matters to you
      </h1>
      <div className="flex flex-wrap gap-2 border-slate-300 pb-10">
        <Link href="/tags/programming">
          <p className="px-4 py-[6px] border border-slate-300 rounded-xl text-slate-500 text-sm cursor-pointer">
            Programming
          </p>
        </Link>
        <Link href="/tags/data-science">
          <p className="px-4 py-[6px] border border-slate-300 rounded-xl text-slate-500 text-sm cursor-pointer">
            Data Science
          </p>
        </Link>

        <Link href="/tags/self-development">
          <p className="px-4 py-[6px] border border-slate-300 rounded-xl text-slate-500 text-sm cursor-pointer">
            Self development
          </p>
        </Link>
        <Link href="/tags/technology">
          <p className="px-4 py-[6px] border border-slate-300 rounded-xl text-slate-500 text-sm cursor-pointer">
            Technology
          </p>
        </Link>
        <Link href="/tags/writing">
          <p className="px-4 py-[6px] border border-slate-300 rounded-xl text-slate-500 text-sm cursor-pointer">
            Writing
          </p>
        </Link>
        <Link href="/tags/web-development">
          <p className="px-4 py-[6px] border border-slate-300 rounded-xl text-slate-500 text-sm cursor-pointer">
            Web Development
          </p>
        </Link>
      </div>
    </>
  );
};

export default Tags;
