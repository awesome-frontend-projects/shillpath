"use client";
import Title from "@/components/Title";
import { benefitItems } from "@/data/data";
import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animation";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Benefits"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          link="View All"
          href="#"
        />

        {/* Card wrapper */}
        <motion.div
          variants={staggerContainer}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16"
        >
          {benefitItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-10 flex flex-col"
              key={item.id}
            >
              {/* Icon */}
              <figure className="bg-orange-75 h-24 w-[55%] flex items-center justify-center rounded-xl mx-auto mb-8">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                />
              </figure>
              {/* content */}
              <div className="mb-4 text-center">
                <h4>{item.title}</h4>
                <p className="mt-3.5">{item.text}</p>
              </div>

              {/* button */}
              <Link
                href="#"
                aria-label="see benefit"
                className="bg-white-99 text-orange-50 border border-white-95 rounded-md flex mt-auto h-14 w-14 items-center justify-center ml-auto hover:bg-orange-50 transition-colors hover:text-white"
              >
                <RiArrowRightUpLine
                  size={26}
                  aria-hidden="true"
                  focusable="false"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
