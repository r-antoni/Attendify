import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar visibility="hidden" />
      <Hero />
    </div>
  );
};

export default LandingPage;
