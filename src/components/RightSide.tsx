import useScrollPosition from './PostsList'



const RightSide = () => {

  const scrollPosition = useScrollPosition();
  const fixedClass = Number(scrollPosition) > 1080 ? 'fixed' : '';

  return (
    <div className={`flex flex-col w-full md:w-[35%] order-first md:order-last mt-12 ${fixedClass} top-0 right-0`}>
      <h1 className="font-semibold text-[16px] mb-5">
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
    </div>
  );
};

export default RightSide;
