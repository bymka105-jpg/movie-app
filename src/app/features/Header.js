"use client";

import { DownArrow } from "../icons/DownArrow";
import { FilmIcon } from "../icons/FilmIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { SearchIcons } from "../icons/SearchIcons";

export const Header = () => {
  return (
    <header className="flex justify-center items-center w-screen bg-blue-50 h-[59px] ">
      <div className="w-screen h-[59px] flex justify-center items-center content-between">
        <div className="flex gap-2">
          <FilmIcon />
          <p
            className="font-['Inter'] font-bold italic text-[16px] 
              leading-5 text-indigo-700 tracking-[0.02em] align-middle"
          >
            Movie Z
          </p>
        </div>

        <div className="flex justify-center gap-3 ">
          <button className="w-[76px] h-[36px] border-[#ffff] rounded-md flex items-center gap-2  bg-[#E4E4E7]">
            <DownArrow />
            <p>Genre</p>
          </button>
          <SearchIcons />
          <input
            className="w-[379px] h-[36px] bg-[#E4E4E7] border-[#ffff] rounded-md"
            placeholder="Search."
            type="text"
          />
        </div>

        <button className="w-[36px] h-[36px] rounded-md border-[#ffff] bg-[#E4E4E7] justify-items-center items-center ">
          <MoonIcon />
        </button>
      </div>
    </header>
  );
};
