"use client";
import Title from "@/components/Title";
import { coursesSecItems } from "@/data/data";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animation";

const CoursesSec = () => {
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
          title="Our Courses"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          link="View All"
          href="#"
        />

        {/* Card wrapper */}
        <motion.div
          variants={staggerContainer}
          className="grid lg:grid-cols-2 items-center gap-5 mt-14 lg:mt-16"
        >
          {coursesSecItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              key={item.id}
              className="bg-white p-7 lg:p-10 rounded-[10px]"
            >
              {/* banner */}
              <figure>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={560}
                  height={266}
                  className="w-full h-full object-cover rounded-xl"
                />
              </figure>
              {/* content */}
              <div className="mt-6">
                {/* tags */}
                <div className="flex items-center flex-wrap gap-2.5">
                  {item.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="bg-white border mr-2 border-white-95 rounded-md hover:bg-orange-97 transition-colors p-2"
                    >
                      {tag.tag}
                    </button>
                  ))}
                  <p className="ml-auto font-medium">{item.instructor}</p>
                </div>
                {/* meta data */}
                <div className="my-6">
                  <h3 className="mb-1.5">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>

              {/* button */}
              <button className="bg-white-97 p-3.5 rounded-md w-full hover:text-orange-70 transition-all border border-white-97 hover:border-orange-75 hover:border">
                Get it Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoursesSec;
