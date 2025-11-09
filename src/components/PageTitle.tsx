"use client";
import React from "react";

interface titleProps {
  title: string;
  text: string;
}

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion/animation";

const PageTitle = ({ title, text }: titleProps) => {
  return (
    <section className="my-20 md:mt-[120px]">
      <div className="container grid lg:grid-cols-2 gap-4 lg:gap-12">
        <motion.h2 variants={fadeInUp}>{title}</motion.h2>
        <motion.p variants={fadeInUp}>{text}</motion.p>
      </div>
    </section>
  );
};

export default PageTitle;
