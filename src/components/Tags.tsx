const Tags = () => {
  return (
    <>
      <h1 className="font-semibold text-[16px] mb-5 py-4">
        Discover more of what matters to you
      </h1>
      <div className="flex flex-wrap gap-2  border-slate-300 pb-10">
        <p className="px-4 py-[6px] border border-slate-300 rounded-[4px] text-slate-500 text-sm cursor-pointer">
          Programming
        </p>
        <p className="px-4 py-[6px] border border-slate-300 rounded-[4px] text-slate-500 text-sm cursor-pointer">
          Data Science
        </p>
        <p className="px-4 py-[6px] border border-slate-300 rounded-[4px] text-slate-500 text-sm cursor-pointer">
          Self improvment
        </p>
        <p className="px-4 py-[6px] border border-slate-300 rounded-[4px] text-slate-500 text-sm cursor-pointer">
          Technology
        </p>
        <p className="px-4 py-[6px] border border-slate-300 rounded-[4px] text-slate-500 text-sm cursor-pointer">
          Writing
        </p>
        <p className="px-4 py-[6px] border border-slate-300 rounded-[4px] text-slate-500 text-sm cursor-pointer">
          Web Development
        </p>
      </div>
    </>
  );
};

export default Tags;
