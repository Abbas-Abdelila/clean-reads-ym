"use client";
import { useEffect, useState } from "react";
import tagService from "../services/TagService";

const Tags = () => {
  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
    try {
      const res = await tagService.getAllTags();
      setTags(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <>
      <h1 className="font-semibold text-[16px] mb-5 py-4">
        Discover more of what matters to you
      </h1>
      <div className="flex flex-wrap gap-2 border-slate-300 pb-10">
        {tags?.map((tag) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <p
              key={tag.tagId}
              className="px-4 py-[6px] border border-slate-300 rounded-[4px] text-slate-500 text-sm cursor-pointer"
            >
              {tag.name}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Tags;
