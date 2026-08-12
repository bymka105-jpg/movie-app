"use client";

import { PlayIcon, StarIcon } from "lucide-react";
import { RigthArrow } from "../icons/RigthArrow";

export const HeroSection = () => {
  return (
    <div className="relative">
      <img
        src="Hero/heroSection.jpg"
        className="w-full h-180 bg-center bg-cover"
      ></img>
      <div className="absolute left-[140px] top-[178px] flex flex-col gap-4 ">
        <div>
          <p className=" text-base font-['Inter'] font-normal text-[#ffff] w-[404px] h-[24px]">
            Now Playing:
          </p>
          <p className="text-[#ffff] w-[404px] h-[40px] font-['Inter'] font-bold text-4xl">
            Wicked
          </p>
          <div className="flex">
            <p className="text-[#ffff] w-[51px] h-[28px] font-['Inter'] font-semibold text-lg flex ">
              <div className="w-[40px] h-[40px]">
                <StarIcon />
              </div>
              6.9/10
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#ffff] Font size/text-xs flex w-[302px] ">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>
        </div>
        <div>
          <button className="w-[145] h-[40] rounded-md bg-[#F4F4F5] cursor-pointer  ">
            <p className="text-black font-['Inter'] font-medium text-sm flex justify-center items-center gap-1">
              <PlayIcon />
              Watch Trailer
            </p>
          </button>
        </div>
      </div>

      <div className="w-full h-[8] flex gap-2 absolute left-[700px] top-[555px] ">
        <div className="w-[8] h-[8] rounded-full bg-[#FFFFFFCC]"></div>
        <div className="w-[8] h-[8] rounded-full bg-[#FFFFFFCC]"></div>
        <div className="w-[8] h-[8] rounded-full bg-[#FFFFFFCC]"></div>
      </div>
      <div className="absolute right-[56px] top-[292px]">
        <button className="w-40px h-40px bg-[#F4F4F5] rounded-full">
          <div className="w-">
            <RigthArrow />
          </div>
        </button>
      </div>
    </div>
  );
};
