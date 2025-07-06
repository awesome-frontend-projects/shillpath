"use client";
import Title from "@/components/Title";
import { pricingItems } from "@/data/data";
import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import React, { useState } from "react";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animation";

const PricingSec = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

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
        <div className="flex flex-wrap justify-between items-center">
          <Title
            title="Our Pricing"
            text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          />
          {/* Pricing button */}
          <motion.div
            variants={fadeInUp}
            className="border border-orange-90 p-2 rounded-xl flex gap-3 relative bg-white max-w-[250px] w-full"
          >
            <motion.div
              layout
              animate={{ x: isMonthly ? 0 : 120 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-orange-50 rounded-lg absolute top-2 left-2 w-[calc(50%-10px)] h-[calc(100%-16px)] z-0"
            />
            <button
              className={`relative z-10 px-6 py-3 rounded-lg transition-colors duration-300 ${
                isMonthly ? "text-white" : "text-grey-20"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`relative z-10 px-6 py-3 rounded-lg transition-colors duration-300 ${
                !isMonthly ? "text-white" : "text-grey-20"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Yearly
            </button>
          </motion.div>
        </div>

        {/* Card Wrapper */}
        <motion.div
          variants={fadeIn}
          className="grid card-wrapper bg-white rounded-lg p-8 gap-6 md:grid-cols-2"
        >
          {pricingItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              key={item.id}
              className="bg-white-99 border border-white-95 rounded-lg p-9 flex flex-col"
            >
              <p className="bg-orange-90 text-center rounded-lg py-2.5  border border-orange-80">
                {item.subtitle}
              </p>
              {/* Price */}
              <div className="flex items-center my-6 text-center justify-center gap-1">
                <motion.span
                  key={isMonthly ? "monthly" : "yearly"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[32px] font-bold"
                >
                  ${isMonthly ? item.monthly : item.yearly}
                </motion.span>
                <span className="text-grey-30 text-base">
                  /{isMonthly ? "Monthly" : "Yearly"}
                </span>
              </div>
              {/* list */}
              <div className="grid gap-4 mb-8">
                <h4 className="text-center">{item.title}</h4>
                <ul className="grid gap-5">
                  {item.list.map((item, index) => (
                    <li key={index} className="flex items-center gap-2.5">
                      <span
                        className={`w-6 h-6 bg-orange-95 flex items-center justify-center rounded-sm ${
                          item.condition === "false"
                            ? "bg-transparent border border-white-95"
                            : ""
                        }`}
                      >
                        {item.condition === "false" ? (
                          <RiCloseLine />
                        ) : (
                          <RiCheckLine />
                        )}
                      </span>
                      <p>{item.label}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button className="primary-btn mt-auto">Get Started</button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSec;
