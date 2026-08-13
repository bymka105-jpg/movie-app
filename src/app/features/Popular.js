"use client";

import Image from "next/image";
import Link from "next/link";

export const Popular = (data) => {
  const popularMovies = [];

  return (
    <section className="w-full pb-12">
      <div className="mx-auto mb-8 flex w-full max-w-7xl items-center justify-between px-4">
        <h2 className="text-2xl font-bold text-gray-900">Popular</h2>

        <Link
          href="/popular"
          className="group flex items-center gap-1 text-sm font-semibold text-gray-900 transition hover:text-indigo-600"
        >
          <span>See more</span>
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="group flex cursor-pointer flex-col rounded-xl bg-[#F4F4F5] p-2 transition hover:shadow-md"
            >
              <div className="relative mb-3 aspect-2/3 w-full overflow-hidden rounded-lg">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mb-1 flex items-center gap-1 px-1">
                <span className="text-sm text-yellow-400">⭐</span>
                <span className="text-sm font-medium text-gray-900">
                  {movie.rating}
                  <span className="text-xs text-gray-400">/10</span>
                </span>
              </div>

              <p className="line-clamp-2 px-1 text-base font-medium text-gray-900">
                {movie.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
