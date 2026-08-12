"use client";

import Image from "next/image";
import Link from "next/link";

export const TopRated = () => {
  const topRatedMovies = [
    {
      id: 1,
      title: "Pulp Fiction",
      rating: "6.9",
      image: "/TopRated/T1.jpg",
    },
    {
      id: 2,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      rating: "6.9",
      image: "/TopRated/T2.jpg",
    },
    {
      id: 3,
      title: "The Good, the Bad and the Ugly",
      rating: "6.9",
      image: "/TopRated/T3.png",
    },
    {
      id: 4,
      title: "Forrest Gump",
      rating: "6.9",
      image: "/TopRated/T4.jpg",
    },
    {
      id: 5,
      title: "Fight Club",
      rating: "6.9",
      image: "/TopRated/T5.jpg",
    },
    {
      id: 6,
      title: "Saving Private Ryan",
      rating: "6.9",
      image: "/TopRated/T6.png",
    },
    {
      id: 7,
      title: "City of God",
      rating: "6.9",
      image: "/TopRated/T7.png",
    },
    {
      id: 8,
      title: "The Green Mile",
      rating: "6.9",
      image: "/TopRated/T8.png",
    },
    {
      id: 9,
      title: "Life is Beautiful",
      rating: "6.9",
      image: "/TopRated/T9.png",
    },
    {
      id: 10,
      title: "Terminator 2: Judgment Day",
      rating: "6.9",
      image: "/TopRated/T10.png",
    },
  ];

  return (
    <section className="w-full pb-12">
      <div className="mx-auto mb-8 flex w-full max-w-7xl items-center justify-between px-4">
        <h2 className="text-2xl font-bold text-gray-900">Top Rated</h2>

        <Link
          href="/top-rated"
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
          {topRatedMovies.map((movie) => (
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
