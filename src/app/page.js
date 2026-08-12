"use client";

import Image from "next/image";
import { Header } from "./features/Header";
import { HeroSection } from "./features/HeroSection";
import { Footer } from "./features/Footer";
import { useState } from "react";
import { Upcoming } from "./features/Upcoming";
import { Popular } from "./features/Popular";
import { TopRated } from "./features/TopRated";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
