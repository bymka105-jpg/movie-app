"use client";

import Image from "next/image";
import { Header } from "./features/Header";
import { HeroSection } from "./features/HeroSection";
import { Footer } from "./features/Footer";
import { useState } from "react";

export default function Home() {
  return (
    <div div>
      <Header />
      <HeroSection />

      <Footer />
    </div>
  );
}
