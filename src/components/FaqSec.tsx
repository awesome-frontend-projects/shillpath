"use client";
import React, { useState } from "react";
import Title from "./Title";
import { faqItems } from "@/data/data";
import { RiAddLine } from "@remixicon/react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animation";

const FaqSec = () => {
  const [openId, setOpenId] = useState<null | number | string>(
    faqItems[0].id ?? null
  );
  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="section pb-[90px] lg:pb-[160px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <div className="md:p-10 p-5 grid lg:grid-cols-[0.75fr_1fr] items-start bg-white rounded-lg gap-10">
          {/* Title */}
          <Title
            title="Frequently Asked Questions"
            text="Still you have any questions? Contact our Team via support@skillbridge.com"
            link="See All FAQ’s"
            href="#"
          />

          {/* Question wrapper */}
          <div className="grid border border-white-95 p-6">
            {faqItems.map((item) => (
              <motion.div variants={fadeInUp} key={item.id}>
                {/* Title */}
                <div className="flex items-center justify-between gap-12 md:px-5 py-3 border-b border-b-white-95">
                  <h4>{item.title}</h4>
                  <button
                    aria-label="open question"
                    className="w-10 h-10 bg-orange-75 flex items-center justify-center rounded-lg aspect-square"
                    onClick={() => handleClick(item.id)}
                  >
                    <RiAddLine
                      size={30}
                      aria-hidden="true"
                      focusable="false"
                      className={`transition ${
                        openId === item.id ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Text */}
                <div
                  className={`max-h-0 overflow-y-hidden transition-all ${
                    openId === item.id ? "max-h-[200px]" : ""
                  }`}
                >
                  <p className="px-5 py-8">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSec;
