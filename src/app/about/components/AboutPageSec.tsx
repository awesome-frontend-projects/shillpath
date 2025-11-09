"use client";
import Divider from "@/components/Divider";
import PageTitle from "@/components/PageTitle";
import React from "react";
import Title from "@/components/Title";
import { achievementsItems } from "@/data/data";
import Image from "next/image";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion/animation";

const AboutPageSec = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Page title */}
        <PageTitle
          title="About Skillpath"
          text="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
        />

        {/* Divider */}
        <Divider />

        {/* Achievements section */}
        <section className="section">
          <motion.div variants={staggerContainer} className="container">
            {/* Title */}
            <Title
              title="Achievements"
              text="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
            />

            {/* Card wrapper */}
            <div className="grid gap-5 lg:gap-7 md:grid-cols-2 card-wrapper">
              {achievementsItems.map((item) => (
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
                    <h3 className="mb-2">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </motion.div>
    </section>
  );
};

export default AboutPageSec;
