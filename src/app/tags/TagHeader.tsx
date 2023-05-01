'use client'

import SellIcon from "@mui/icons-material/Sell";


const TagHeader = () => {
  return (
    <div className="flex items-center space-x-4 mt-8">
      <div className="border bg-gray-200 p-2 rounded-full outline-none">
        <SellIcon />
      </div>
      <h1 className="text-2xl font-semibold">Programming</h1>
    </div>
  );
};

export default TagHeader;
