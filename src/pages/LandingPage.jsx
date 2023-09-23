import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AttendifyFooter from "../components/Footer";
import Testimonial from "../components/Testimonial";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary bg-opacity-[5%]">
      <Navbar visibility="hidden" />
      <Hero />
      <Features />
      <Testimonial />
      <AttendifyFooter />
    </div>
  );
};

export default LandingPage;
