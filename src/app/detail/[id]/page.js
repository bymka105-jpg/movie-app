"use client";
import Link from "next/link";
import { PlayIcon } from "lucide-react";
import { Footer } from "../../features/Footer";
import { Header } from "../../features/Header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const api_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjZlNzhmMzQ2MDg3NDM4MGUxOWNmNTg1NjY1NWNmZiIsIm5iZiI6MTc4NjU4OTEwMS4wNTMsInN1YiI6IjZhN2QyZmFkOWJjNWQ2ODhhZGEwNzQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPD1mBgFC1wc-MaKtW1CsG-uwVb8WwY0TEJHt2ZWoeI";

export default function MovieDetailPage() {
  const [data, setData] = useState([]);
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getMovieData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${api_Token}`,
        },
      },
    );
    const jsonData = await response.json();
    console.log(jsonData, "jsondata");

    return jsonData;
  };

  useEffect(() => {
    getMovieData()
      .then((data) => setData(data))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => {
        setLoading(false);
      });
  }, [params]);
  console.log(params.id, "its paramsid");

  console.log(data, "movie data by id");

  const formatNumber = (number) => {
    if (number < 1000) {
      return Math.floor(number);
    }

    if (number < 1000000) {
      return `${(number / 1000).toFixed(1)}K`;
    }

    if (number < 1000000000) {
      return `${(number / 1000000).toFixed(1)}M`;
    }

    return `${(number / 1000000000).toFixed(1)}B`;
  };

  const [LikeData, setLikeData] = useState([]);

  const getLikeMoreData = async () => {
    const response = await fetch(
      `/movie/${params.id}/similar?language=en-US&page=1`,
      { headers: { Authorization: `Bearer ${api_Token}` } },
    );
    const jsonData = await response.json();
    return jsonData.results;
  };

  useEffect(() => {
    getLikeMoreData()
      .then((data) => setLikeData(data))
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  console.log(LikeData, "chi yuu ve ");

  return (
    <main className="w-screen h-screen">
      {loading && <div>loading...</div>}
      {!loading && errorMessage && <div>{errorMessage}</div>}
      {!loading && !errorMessage && (
        <div className="h-screen">
          <Header />
          <div className="flex w-screen  px-46 justify-center gap-6 ">
            <div className="w-270 flex justify-between">
              <div className="w-52">
                <p className=" font-extrabold text-[36px] leading-10 tracking-[-0.9px] text-gray-[#09090B]">
                  {data.title}
                </p>
                <p className="font-['Inter'] text-lg  tracking-normal text-[#09090B]">
                  {/* 2024.11.26 · PG · 2h 40m{" "} */}
                  {data.release_date}-PG-{data.runtime} mins
                </p>
              </div>

              <div>
                <p>Rating</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-2xl ">⭐</span>
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      {Math.floor(data.vote_average)}
                      <span className="text-xs text-gray-400">/10</span>
                    </span>
                    <p className="text-[#71717A] Font text-xs">
                      {formatNumber(data.popularity)}k
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 justify-center ">
            <img
              className="w-72 h-107 bg-[#F4F4F5] rounded-lg"
              key={data.id}
              src={"https://image.tmdb.org/t/p/original" + data.poster_path}
            />
            <div className="w-190 h-107 bg-[#F4F4F5] rounded-lg relative">
              <img
                className="w-190 h-107 rounded-lg object-cover object-center "
                key={data.id}
                src={"https://image.tmdb.org/t/p/original" + data.backdrop_path}
              />
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
              {data.overview}
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
              className="group flex items-center gap-2 text-sm font-semibold text-gray-900  hover:text-indigo-600 transition"
            >
              <button className="cursor-pointer"> See more</button>
              <span className="trasnition-transform group-hover:translate-x-1 cursor-pointer">
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
                    alt=""
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
        </div>
      )}
    </main>
  );
}
