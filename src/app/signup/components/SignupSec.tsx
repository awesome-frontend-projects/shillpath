"use client";
import Divider from "@/components/Divider";
import { RiArrowRightUpLine, RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

//import motion
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/lib/motion/animation";

const SignupSec = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="pt-[100px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.div
          variants={fadeIn}
          className="max-w-[660px] w-full bg-white rounded-xl p-8 md:p-16 mx-auto"
        >
          <h2 className="text-center">Sign Up</h2>
          <p className="text-center">
            Create an account to unlock exclusive features.
          </p>

          {/* form */}
          <form action="#" className="mt-10">
            {/* Input wrapper */}
            <div className="grid gap-1.5 mb-6">
              <label htmlFor="name" className="font-medium text-lg">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="bg-white-99 p-5 border border-white-95 rounded-lg focus:border-orange-70 transition text-grey-20"
              />
            </div>
            {/* Input wrapper */}
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
            {/* Input wrapper */}
            <div className="grid gap-1.5 my-6">
              <label htmlFor="password" className="font-medium text-lg">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="bg-white-99 p-5 border border-white-95 rounded-lg focus:border-orange-70 transition text-grey-20 w-full"
                />
                <button
                  aria-label="show password"
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-grey-30"
                  onClick={handleClick}
                  type="button"
                >
                  {showPassword ? (
                    <RiEyeLine aria-hidden="true" focusable="false" size={30} />
                  ) : (
                    <RiEyeOffLine
                      aria-hidden="true"
                      focusable="false"
                      size={30}
                    />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-6">
              <input type="checkbox" id="check" className="accent-orange-700" />
              <label htmlFor="check">
                I agree with{" "}
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>{" "}
              </label>
            </div>

            <button className="primary-btn w-full">Sign Up</button>
            {/* option */}
            <div className="flex items-center gap-3 my-8">
              <Divider />
              <p>OR</p>
              <Divider />
            </div>
            {/* login with google button */}
            <button className="secondary-btn flex items-center justify-center w-full gap-1.5">
              <Image
                src={"/images/google-icon.svg"}
                alt="google icon"
                width={30}
                height={30}
              />
              <a href="#">Sign Up with Google</a>
            </button>

            {/* Signup link */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <p>Already have an account?</p>
              <Link
                href="#"
                className="flex items-center gap-1 hover:underline"
              >
                {" "}
                Login <RiArrowRightUpLine />
              </Link>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SignupSec;
