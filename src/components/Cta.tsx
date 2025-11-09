"use client";
import Link from "next/link";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/lib/motion/animation";
import Image from "next/image";

const Cta = () => {
  return (
    <motion.section
      className="py-28"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeIn} className="container bg-white cta">
        <div className="p-10 lg:p-16 grid gap-8 lg:grid-cols-[1fr_0.3fr] items-center lg:gap-20 relative">
          <div>
            <h2>
              <span className="text-orange-50">Together</span>, let's shape the
              future of digital innovation
            </h2>
            <p className="mt-2">
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>

          <Link href="#" className="primary-btn max-w-max ml-auto">
            Join Now
          </Link>

          <Image
            src="/images/cta-bg-img.png"
            alt="cta-bg-img"
            width={362}
            height={680}
            className="h-full absolute top-0 right-20 overflow-hidden -z-10 object-cover"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Cta;
