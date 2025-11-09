"use client";
import Link from "next/link";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion/animation";

interface titleProps {
  title: string;
  text: string;
  link?: string;
  href?: string;
}

const Title = ({ title, text, link, href }: titleProps) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4">
      <div>
        <motion.h2 variants={fadeInUp}>{title}</motion.h2>
        <motion.p variants={fadeInUp} className="mb-6 mt-4 max-w-[640px]">
          {text}
        </motion.p>
      </div>
      {link && href && (
        <motion.div variants={fadeInUp}>
          <Link href={href} className="secondary-btn">
            {link}
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Title;
