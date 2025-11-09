"use client";
import { contactInfo, footerLists, socialIcons } from "@/data/data";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion/animation";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-14 pb-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="container"
      >
        {/* Footer top */}
        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr] gap-10"
        >
          {/* Footer Brand */}
          <motion.div variants={fadeInUp}>
            <figure>
              <Image
                src="/images/logo.png"
                alt="footer logo"
                width={205}
                height={50}
              />
            </figure>
            {/* links */}
            <div className="grid gap-4 mt-8">
              {contactInfo.map((item) => (
                <a
                  href="#"
                  key={item.id}
                  className="flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors"
                  aria-label="link"
                >
                  {<item.icon />}
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer list */}
          {footerLists.map((item) => (
            <motion.div
              variants={fadeInUp}
              key={item.id}
              className="grid gap-3"
            >
              <h4>{item.title}</h4>
              <ul className="grid gap-2.5">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:underline hover:text-orange-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social icons */}
          <motion.div variants={fadeInUp}>
            <h4>Social Profiles</h4>
            <div className="flex gap-3 mt-6">
              {socialIcons.map((icon) => (
                <button
                  aria-label="social icon"
                  key={icon.id}
                  className="secondary-btn bg-white-97 hover:shadow-md hover:bg-white-99 transition-all"
                >
                  <a href="#" aria-label={icon.label}>
                    {<icon.icon />}
                  </a>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
        {/* Footer bottom */}
        <motion.p variants={fadeIn} className="mt-16 text-center lg:mt-20">
          &copy; {new Date().getFullYear()} Skillbridge. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
