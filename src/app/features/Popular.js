"use client";

import Image from "next/image";
import Link from "next/link";

export const Popular = () => {
  const popularMovies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      rating: "6.9",
      image: "/Popular/P1.jpg",
    },
    {
      id: 2,
      title: "The Godfather",
      rating: "6.9",
      image: "/Popular/P2.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      rating: "6.9",
      image: "/Popular/P3.jpg",
    },
    {
      id: 4,
      title: "12 Angry Men",
      rating: "6.9",
      image: "/Popular/P4.jpg",
    },
    {
      id: 5,
      title: "The Lord of the Rings: The Return of the King",
      rating: "6.9",
      image: "/Popular/P5.jpg",
    },
    {
      id: 6,
      title: "Interstellar",
      rating: "6.9",
      image: "/Popular/P6.png",
    },
    {
      id: 7,
      title: "Se7en",
      rating: "6.9",
      image: "/Popular/P7.png",
    },
    {
      id: 8,
      title: "It's a Wonderful Life",
      rating: "6.9",
      image: "/Popular/P8.png",
    },
    {
      id: 9,
      title: "Seven Samurai",
      rating: "6.9",
      image: "/Popular/P9.png",
    },
    {
      id: 10,
      title: "The Silence of the Lambs",
      rating: "6.9",
      image: "/Popular/P10.png",
    },
  ];

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
