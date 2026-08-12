"use client";

import Image from "next/image";
import Link from "next/link";

export const Upcoming = () => {
  const upcomingMovies = [
    {
      id: 1,
      title: "Dear Santa",
      rating: "6.9",
      image: "/Upcoming/U1.jpg",
    },
    {
      id: 2,
      title: "How To Train Your Dragon Live Action",
      rating: "6.9",
      image: "/Upcoming/u2.jpg",
    },
    {
      id: 3,
      title: "Alien Romulus",
      rating: "6.9",
      image: "/Upcoming/u3.jpg",
    },
    {
      id: 4,
      title: "From the Ashes",
      rating: "6.9",
      image: "/Upcoming/u4.jpg",
    },
    {
      id: 5,
      title: "Space Dogg",
      rating: "6.9",
      image: "/Upcoming/u5.jpg",
    },
    {
      id: 6,
      title: "The Order",
      rating: "6.9",
      image: "/Upcoming/u6.jpg",
    },
    {
      id: 7,
      title: "Y2K",
      rating: "6.9",
      image: "/Upcoming/u7.jpg",
    },
    {
      id: 8,
      title: "Solo Leveling: ReAwakening",
      rating: "6.9",
      image: "/Upcoming/u8.jpg",
    },
    {
      id: 9,
      title: "Get Away",
      rating: "6.9",
      image: "/Upcoming/u9.jpg",
    },
    {
      id: 10,
      title: "Sonic the Hedgehog 3",
      rating: "6.9",
      image: "/Upcoming/u10.png",
    },
  ];

  return (
    <section className="w-full pb-12 mt-8">
      <div className="mx-auto mb-8 flex w-full max-w-7xl items-center justify-between px-4">
        <h2 className="text-2xl font-bold text-gray-900">Upcoming</h2>

        <Link
          href="/Upcoming"
          className="group flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-indigo-600 transition"
        >
          <span>See more</span>
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {upcomingMovies.map((movie) => (
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
