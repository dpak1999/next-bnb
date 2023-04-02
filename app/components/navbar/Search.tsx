/** @format */
"use client";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-full py-2 md:w-auto rounded-full shadow-sm transition cursor-pointer hover:shadow-md">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm px-6 font-semibold flex-1 text-center border-x-[1px]">
          Any Week
        </div>
        <div className=" text-sm pl-6 pr-2 text-gray-600 flex flex-row gap-3 items-center">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
