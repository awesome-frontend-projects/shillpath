import React from "react";
import Hero from "./home-components/Hero";
import Benefits from "./home-components/Benefits";
import CoursesSec from "./home-components/CoursesSec";
import Testimonials from "@/components/Testimonials";
import FaqSec from "@/components/FaqSec";
import PricingSec from "../components/PricingSec";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <CoursesSec />
      <Testimonials />
      <PricingSec />
      <FaqSec />
    </>
  );
};

export default Home;
