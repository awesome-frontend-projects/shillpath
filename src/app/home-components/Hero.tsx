"use client";
import { heroLogos } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animation";
import { RiPlayFill } from "@remixicon/react";

const Hero = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Content */}
        <div className="mt-[50px] md:mt-20 text-center">
          {/* Title */}
          <div className="relative max-w-max mx-auto pt-8 pl-8">
            <motion.span variants={fadeIn} className="absolute top-0 left-0">
              <Image
                src="/images/shape-1.png"
                alt="hero shape"
                width={39}
                height={43}
              />
            </motion.span>
            <motion.div
              variants={fadeInUp}
              className="bg-white-99 border border-white-95 rounded-lg p-3.5 flex items-center justify-center gap-2.5 max-w-max mx-auto flex-wrap text-center"
            >
              <span>
                <Image
                  src="/images/shape-2.png"
                  alt="shape"
                  width={48}
                  height={48}
                />
              </span>
              <h1 className="text-2xl md:text-4xl">
                {" "}
                <span className="text-orange-50">Unlock</span> Your Creative
                Potential
              </h1>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-2xl font-medium mt-4 md:text-[28px]"
          >
            with Online Design and Development Courses.
          </motion.p>
          <motion.p variants={fadeInUp}>
            Learn from Industry Experts and Enhance Your Skills.
          </motion.p>

          {/* btn wrapper */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex gap-3 items-center justify-center flex-wrap"
          >
            <Link
              href="/courses"
              className="primary-btn max-sm:w-[80%]"
              aria-label="explore courses"
            >
              Explore Courses
            </Link>
            <Link
              href="/pricing"
              className="secondary-btn max-sm:w-[80%]"
              aria-label="view pricing"
            >
              View Pricing
            </Link>
          </motion.div>

          {/* Clients */}
          <motion.div
            variants={fadeIn}
            className="mt-[30px] lg:mt-[100px]  rounded-lg relative overflow-hidden"
          >
            <Marquee pauseOnHover={true}>
              {heroLogos.map((logo) => (
                // Logo
                <div className="py-5 px-14" key={logo.id}>
                  <Image
                    src={logo.item}
                    alt="client logo"
                    width={logo.width}
                    height={28}
                  />
                </div>
              ))}
            </Marquee>

            {/* Left Gradient */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-24 z-10 bg-gradient-to-r from-white-97 via-white-97/80 to-transparent"></div>

            {/* Right Gradient */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-24 z-10 bg-gradient-to-l from-white-97 via-white-97/80 to-transparent"></div>
          </motion.div>
        </div>
        {/* banner */}
        <motion.div
          variants={fadeIn}
          className="mt-8 md:mt-14 lg:mt-[50px] max-w-[920px] w-full h-[500px] mx-auto overflow-hidden relative rounded-xl"
        >
          <Image
            src="/images/hero-banner.png"
            alt="hero-banner"
            width={940}
            height={500}
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 z-10" />
          <button
            className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 cursor-pointer "
            aria-label="play video"
          >
            <span className="w-16 h-16 bg-white rounded-full player-btn flex justify-center items-center">
              <RiPlayFill size={30} />
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
