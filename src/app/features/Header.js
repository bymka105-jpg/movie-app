"use client";

import { SearchIcon } from "lucide-react";
import { DownArrow } from "../icons/DownArrow";
import { FilmIcon } from "../icons/FilmIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { SearchIcons } from "../icons/SearchIcons";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const navigateToHomePage = () => {
    router.push("/");
  };

  return (
    <header className="flex justify-center items-center w-full bg-blue-50">
      <div className="w-full px-20 py-20 h-14.75 flex items-center justify-between">
        <div className="flex gap-2 cursor-pointer" onClick={navigateToHomePage}>
          <FilmIcon />
          <p
            className="font-['Inter'] font-bold italic text-[16px] 
              leading-5 text-indigo-700 tracking-[0.02em] align-middle"
          >
            Movie Z
          </p>
        </div>

        <div className="flex justify-center gap-3 ">
          <button className="w-19 h-9 border-[#ffff] rounded-md flex items-center gap-2  bg-[#E4E4E7] cursor-pointer">
            <DownArrow />
            <p>Genre</p>
          </button>

          <div className="relative">
            <div className="absolute left-2 top-3 w-3 h-3">
              <SearchIcons />
            </div>

            <input
              className="w-94.75 h-9 bg-[#E4E4E7] border-[#ffff] rounded-md pl-9 "
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>

        <button className="w-9 h-9 rounded-md border-[#ffff] bg-[#E4E4E7] justify-items-center items-center cursor-pointer">
          <MoonIcon />
        </button>
      </div>
    </header>
  );
};
