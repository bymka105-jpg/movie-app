"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const api_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjZlNzhmMzQ2MDg3NDM4MGUxOWNmNTg1NjY1NWNmZiIsIm5iZiI6MTc4NjU4OTEwMS4wNTMsInN1YiI6IjZhN2QyZmFkOWJjNWQ2ODhhZGEwNzQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPD1mBgFC1wc-MaKtW1CsG-uwVb8WwY0TEJHt2ZWoeI";

export const Upcoming = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const pathname = usePathname();

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${api_Token}`,
        },
      },
    );
    const jsonData = await response.json();
    return jsonData.results;
  };

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const router = useRouter();

  const navigateToUpcomingPage = () => {
    router.push("/upcoming");
  };

  return (
    <section className="w-full pb-12 mt-8">
      <div className="mx-auto mb-8 flex w-full max-w-7xl items-center justify-between px-4">
        <h2 className="text-2xl font-bold text-gray-900">Upcoming</h2>
        {pathname !== "/upcoming" && (
          <Link
            href="/upcoming"
            className="group flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-indigo-600 transition"
          >
            <span onClick={navigateToUpcomingPage}>See more</span>
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        )}
      </div>

      <div className="mx-auto w-full max-w-7xl px-4">
        {loading && <div>loading...</div>}
        {!loading && errorMessage && <div>{errorMessage}</div>}
        {!loading && !errorMessage && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {data.slice(0, 10).map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="group flex cursor-pointer flex-col rounded-xl bg-[#F4F4F5] p-2 transition hover:shadow-md"
              >
                <div className="relative mb-3 aspect-2/3 w-full overflow-hidden rounded-lg">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original" + movie.poster_path
                    }
                    alt={movie.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mb-1 flex items-center gap-1 px-1">
                  <span className="text-sm text-yellow-400">⭐</span>

                  <span className="text-sm font-medium text-gray-900">
                    {Math.floor(movie.vote_average)}
                    <span className="text-xs text-gray-400">/10</span>
                  </span>
                </div>

                <p className="line-clamp-2 px-1 text-base font-medium text-gray-900">
                  {movie.title}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
