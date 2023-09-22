import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary bg-opacity-[10%]">
      <Navbar visibility="hidden" />
      <Hero />
      <Features />
    </div>
  );
};

export default LandingPage;
