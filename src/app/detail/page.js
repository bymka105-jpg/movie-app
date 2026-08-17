"Use client";
import Link from "next/link";
import { PlayIcon } from "lucide-react";
import { Footer } from "../features/Footer";
import { Header } from "../features/Header";

export default function UpcomingPage() {
  return (
    <main className="w-screen h-screen">
      <Header />
      <div className="flex w-screen  px-46 justify-center gap-6 ">
        <div className="w-270 flex justify-between">
          <div className="w-52">
            <p class="font-['Inter'] font-extrabold text-[36px] leading-10 tracking-[-0.9px] text-gray-[#09090B]">
              Wicked
            </p>
            <p class="font-['Inter'] text-lg  tracking-normal text-[#09090B]">
              2024.11.26 · PG · 2h 40m{" "}
            </p>
          </div>

          <div>
            <p>Rating</p>
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl ">⭐</span>
              <div>
                <span className="text-sm font-medium text-gray-900">
                  6.9
                  <span className="text-xs text-gray-400">/10</span>
                </span>
                <p className="text-[#71717A] Font text-xs">veiws</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 justify-center ">
        <div className="w-72 h-107 bg-[#F4F4F5] rounded-lg"></div>
        <div className="w-190 h-107 bg-[#F4F4F5] rounded-lg relative">
          <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex justify-center items-center absolute top-91 left-6 cursor-pointer">
            <PlayIcon />
          </div>
          <p className="text-base text-[#FFFFFF] absolute bottom-7 left-19 cursor-pointer">
            Play trailer
          </p>
        </div>
      </div>

      <div>
        <div className="flex gap-3 p-9 pl-45">
          <div className="w-[77px] border border-[#E4E4E7] rounded-full flex justify-center items-center">
            <p className="tex-[#09090B] text-xs">Fairy Tale</p>
          </div>
          <div className="w-[91px] border border-[#E4E4E7] rounded-full flex justify-center items-center">
            <p className="tex-[#09090B] text-xs">Pop Musical</p>
          </div>
          <div className="w-[67px] border border-[#E4E4E7]  rounded-full flex justify-center items-center">
            <p className="tex-[#09090B] text-xs">Fantasy</p>
          </div>
          <div className="w-[67px] border border-[#E4E4E7]  rounded-full flex justify-center items-center ">
            <p className="tex-[#09090B] text-xs">Musical</p>
          </div>
          <div className="w-[67px] border border-[#E4E4E7]  rounded-full flex justify-center items-center ">
            <p className="tex-[#09090B] text-xs">Romance</p>
          </div>
        </div>
      </div>

      <div className="flex pl-45 pt-5 ">
        <p className="text-base text-[#09090B] font-['Inter'] font-[400] w-270">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.{" "}
        </p>
      </div>

      <div className="flex gap-13 pl-45 pt-5">
        <p className="text-2xl text-[#09090B] font-['Inter'] font-bold w-17 h-7 leading-4">
          Director
        </p>
        <p>Jon M. Chu</p>
      </div>

      <div className="flex gap-13 pl-45 pt-5">
        <p className="text-2xl text-[#09090B] font-['Inter'] font-bold w-17 h-7 leading-4">
          Writers
        </p>
        <p>Winnie Holzman · Dana Fox · Gregory Maguire</p>
      </div>

      <div className="flex gap-13 pl-45 pt-5">
        <p className="text-2xl text-[#09090B] font-['Inter'] font-bold w-17 h-7 leading-4">
          Stars
        </p>
        <p>Cynthia Erivo · Ariana Grande · Jeff Goldblum</p>
      </div>

      <div className="mx-auto mb-8 flex w-full max-w-7xl items-center justify-between px-4 pt-8">
        <h2 className="text-2xl font-bold text-gray-900">More like this</h2>
        <Link
          href="/detail"
          className="group flex items-center gap-1 text-sm font-semibold text-gray-900 transition hover:text-indigo-600"
        >
          <span onClick={""}> See more</span>
          <span className="trasnition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-28 ">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <Link
            key={""}
            href={""}
            className="group flex cursor-pointer flex-col rounded-xl bg-[#F4F4F5] p-2 transition hover:shadow-md"
          >
            <div className="relative mb-3 aspect-2/3 w-full overflow-hidden">
              <img
                src=""
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, (max-width:1024px) 25vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105 "
              />
            </div>

            <div className="mb-1 flex items-center gap-1 px-1">
              <span className="text-sm text-yellow-400">⭐</span>
              <span className="text-sm font-medium text-gray-900">
                6.9
                <span className="text-xs text-gray-400">/10</span>
              </span>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
