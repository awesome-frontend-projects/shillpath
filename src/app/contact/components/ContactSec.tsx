"use client";
import PageTitle from "@/components/PageTitle";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animation";
import { contactInfo, socialIcons } from "@/data/data";

const ContactSec = () => {
  return (
    <section className="pb-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <PageTitle
          title="Contact Us"
          text="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        />
        {/* Form */}
        <motion.div
          variants={fadeIn}
          className="bg-white section grid lg:grid-cols-[1fr_0.5fr] lg:items-start gap-12 p-16"
        >
          {/* left side */}
          <div className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input field */}
              <div className="grid gap-1.5">
                <label htmlFor="email" className="font-medium text-lg">
                  First name
                </label>
                <input
                  type="email"
                  placeholder="Enter your first name"
                  className="bg-white-99 p-5 border border-white-95 rounded-lg focus:border-orange-70 transition text-grey-20"
                />
              </div>
              {/* Input field */}
              <div className="grid gap-1.5">
                <label htmlFor="email" className="font-medium text-lg">
                  Last name
                </label>
                <input
                  type="email"
                  placeholder="Enter your last name"
                  className="bg-white-99 p-5 border border-white-95 rounded-lg focus:border-orange-70 transition text-grey-20"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Input field */}
              <div className="grid gap-1.5">
                <label htmlFor="email" className="font-medium text-lg">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-white-99 p-5 border border-white-95 rounded-lg focus:border-orange-70 transition text-grey-20"
                />
              </div>
              {/* Input field */}
              <div className="grid gap-1.5">
                <label htmlFor="email" className="font-medium text-lg">
                  Phone number
                </label>
                <input
                  type="number"
                  placeholder="Enter you phone number"
                  className="bg-white-99 p-5 border border-white-95 rounded-lg focus:border-orange-70 transition text-grey-20"
                />
              </div>
            </div>

            {/* Input field */}
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-lg">
                Subject
              </label>
              <input
                type="email"
                placeholder="Enter your Subject"
                className="bg-white-99 p-5 border border-white-95 rounded-lg focus:border-orange-70 transition text-grey-20"
              />
            </div>
            {/* Input field */}
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-lg">
                Message
              </label>
              <textarea
                placeholder="Enter your Message here..."
                className="bg-white-99 p-5 border border-white-95 rounded-lg focus:border-orange-70 transition text-grey-20 outline-none resize-none h-52"
              />
            </div>

            {/* Submit button */}
            <button className="primary-btn">Send Your Message</button>
          </div>

          {/* Right side */}
          <div className="">
            {/* links */}
            <div className="grid gap-4 mt-8">
              {contactInfo.map((item) => (
                <div
                  key={item.id}
                  className="bg-white-99 border border-white-95 rounded-md grid justify-center items-center p-[30px]"
                >
                  <a
                    href="#"
                    aria-label="link"
                    className="flex flex-col justify-center items-center gap-4 hover:text-orange-50 transition-colors"
                  >
                    <span className="bg-white-97 border border-white-95 rounded-md w-10 h-10 flex items-center justify-center">
                      {<item.icon />}
                    </span>
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
            {/* Social icons */}
            <motion.div variants={fadeInUp}>
              <div className="flex gap-3 mt-6 justify-center">
                {socialIcons.map((icon) => (
                  <button
                    aria-label="social icon"
                    key={icon.id}
                    className="secondary-btn bg-white-97 hover:shadow-md hover:bg-white-99 transition-all"
                  >
                    <a href="#" className="">
                      {<icon.icon />}
                    </a>
                  </button>
                ))}
              </div>
              <h3 className="text-xl font-medium mt-6 text-center">
                Social Profiles
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSec;
