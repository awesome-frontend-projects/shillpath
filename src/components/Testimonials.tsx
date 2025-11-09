"use client";

import React from "react";
import Title from "./Title";
import { testimonialsItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, FreeMode } from "swiper/modules";

// import swiper css
import "swiper/css";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion/animation";

const Testimonials = () => {
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
          title="Our Testimonials"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          link="View All"
          href="#"
        />

        {/* Card wrapper */}
        <motion.div variants={fadeInUp}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination, FreeMode]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 2.5,
              },
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            pagination={{
              clickable: true,
            }}
            freeMode={true}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            className="card-wrapper"
          >
            {testimonialsItems.map((item) => (
              // Card
              <SwiperSlide key={item.id}>
                <div className="p-8 lg:p-10 bg-white border border-white-95 rounded-[10px]">
                  <p>{item.text}</p>
                  <div className="flex items-center justify-between mt-11 border-t border-orange-90 pt-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <figure>
                        <Image
                          src={item.img}
                          alt={item.author}
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      </figure>
                      <p className="font-medium">{item.author}</p>
                    </div>
                    <Link href="#" className="block secondary-btn">
                      Read Full Story
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-18 flex items-center justify-center gap-5"
        >
          <button
            className="prev-btn w-12 h-12 flex items-center justify-center rounded-xl bg-orange-70 hover:bg-orange-75 transition-colors"
            aria-label="Left arrow"
          >
            <RiArrowLeftLine size={30} aria-hidden="true" focusable="false" />
          </button>
          <button
            className="next-btn w-12 h-12 flex items-center justify-center rounded-xl bg-orange-70 hover:bg-orange-75 transition-colors"
            aria-label="right arrow"
          >
            <RiArrowRightLine size={30} aria-hidden="true" focusable="false" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
