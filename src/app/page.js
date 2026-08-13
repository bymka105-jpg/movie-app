"use client";

import Image from "next/image";
import { Header } from "./features/Header";
import { HeroSection } from "./features/HeroSection";
import { Footer } from "./features/Footer";
import { useEffect, useState } from "react";
import { Upcoming } from "./features/Upcoming";
import { Popular } from "./features/Popular";
import { TopRated } from "./features/TopRated";

const api_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjZlNzhmMzQ2MDg3NDM4MGUxOWNmNTg1NjY1NWNmZiIsIm5iZiI6MTc4NjU4OTEwMS4wNTMsInN1YiI6IjZhN2QyZmFkOWJjNWQ2ODhhZGEwNzQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPD1mBgFC1wc-MaKtW1CsG-uwVb8WwY0TEJHt2ZWoeI";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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

  console.log(data, "this is my data");

  return (
    <div className="w-screen h-screen ">
      {loading && <div>loading...</div>}
      {!loading && errorMessage && <div>{errorMessage}</div>}
      {!loading && !errorMessage && (
        <div className="h-screen">
          <Header />
          <HeroSection />
          <Upcoming />
          <Popular data={data} />
          <TopRated data={data} />
          <Footer />
        </div>
      )}
    </div>
  );
}
