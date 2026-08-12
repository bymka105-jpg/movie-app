"use client";

import { FilmIcon, PhoneIcon } from "lucide-react";
import { EmailIcon } from "../icons/EmailIcon";

export const Footer = () => {
  return (
    <div className="w-full h-70 bg-[#4338CA] px-20 py-10 flex gap-122.5">
      <div className="flex flex-col ">
        <div className="flex gap-2">
          <FilmIcon />
          <p
            className="font-['Inter'] font-bold italic text-[16px] 
              leading-5 text-indigo-50 tracking-[0.02em] align-middle"
          >
            Movie Z
          </p>
        </div>
        <p className="Font Sizes/text-sm text-[#FAFAFA]">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>

      <div className="flex gap-24 ">
        <div className="flex gap-3 flex-col">
          <p class="font-inter text-[14px] font-normal leading-5 tracking-normal text-[#FAFAFA]">
            Contact Information
          </p>
          <div className="flex items-center gap-3">
            <EmailIcon />
            <div>
              <span className="font-inter text-[14px] font-normal leading-5 tracking-normal text-[#FAFAFA]">
                Email:
                <p class="text-[14px] font-normal leading-5 tracking-normal">
                  support@movieZ.com
                </p>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <PhoneIcon />
            <div>
              <span className="font-inter text-[14px] font-normal leading-5 tracking-normal text-[#FAFAFA]">
                Phone:
                <p class="text-[14px] font-normal leading-5 tracking-normal">
                  +976 (11) 123-4567
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 flex-col">
          <p class="text-sm font-normal leading-5 tracking-normal text-[#fafafa]">
            Follow us{" "}
          </p>
          <div className="flex gap-3">
            <span class="text-sm font-medium leading-5 tracking-normal text-[#fafafa]">
              Facebook
            </span>
            <span class="text-sm font-medium leading-5 tracking-normal text-[#fafafa]">
              Instagram
            </span>
            <span class="text-sm font-medium leading-5 tracking-normal text-[#fafafa]">
              Twitter
            </span>
            <span class="text-sm font-medium leading-5 tracking-normal text-[#fafafa]">
              Youtube
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
