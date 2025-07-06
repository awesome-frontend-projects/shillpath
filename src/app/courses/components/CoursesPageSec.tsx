"use client";
import Title from "@/components/Title";
import { coursesPageItems } from "@/data/data";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animation";
import PageTitle from "@/components/PageTitle";

const CoursesPageSec = () => {
  return (
    <section className="py-[120px]">
      <motion.div
        className="container"
        variants={staggerContainer}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
      >
        <PageTitle
          title="Online Courses on Design and Development"
          text="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
        />
        {/* Card wrapper */}
        <div className="grid gap-12">
          {coursesPageItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-md p-5 lg:p-10"
              key={item.id}
            >
              {/* Title */}
              <Title
                title={item.title}
                text={item.text}
                link={item.link}
                href="#"
              />
              {/* Images */}
              <div className="flex gap-5 items-center mt-4 mb-6">
                {item.imgs.map((item, index) => (
                  <figure key={index}>
                    <Image
                      src={item.img}
                      alt="image"
                      width={387}
                      height={326}
                    />
                  </figure>
                ))}
              </div>
              {/* card Info */}
              <div className="flex items-center flex-wrap gap-4">
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

              {/* Steps */}
              <div className="mt-10">
                <h4>{item.curriculum}</h4>
                <ul className="grid gap-8 mt-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center">
                  {item.steps.map((item, index) => (
                    <li key={index}>
                      <div>
                        <h2>{item.step}</h2>
                        <p>{item.label}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CoursesPageSec;
