"use client";
import React from "react";
import Hero from "./components/hero";
import AboutUs from "./components/about";

import WhyUs from "./components/whyus";
import Services from "./components/services";
import OurProcess from "./components/process";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <div className="text-green-300  text-center w-full p-6 mt-20">
    {/* <NavKeys/> */}
   <Hero/>
   <AboutUs/>
  <Services/>
   <WhyUs/>
   <OurProcess/>
   <Reviews/>
  </div>
  
  );
}
