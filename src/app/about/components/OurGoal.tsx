"use client";
import Title from "@/components/Title";
import React from "react";
import Image from "next/image";
//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animation";
import { ourGoalItems } from "@/data/data";

const OurGoal = () => {
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
          title="Our Goals"
          text="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to"
        />

        {/* Card wrapper */}
        <div className="grid gap-5 lg:gap-7 md:grid-cols-2 card-wrapper">
          {ourGoalItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-md grid gap-6"
              key={item.id}
            >
              {/* Icon */}
              <figure className="bg-orange-95 rounded-md border border-orange-90 max-w-max p-2 aspect-square flex items-center justify-center">
                <Image src={item.icon} alt="icon" width={56} height={56} />
              </figure>

              {/* Card content */}
              <div>
                <h4 className="mb-2">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurGoal;
