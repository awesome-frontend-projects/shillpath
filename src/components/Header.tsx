"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowRightLine, RiCloseLine, RiMenuLine } from "@remixicon/react";
import { navItems } from "@/data/data";
import { usePathname } from "next/navigation";
import { RemoveScroll } from "react-remove-scroll";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //handle click function
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full pt-10 lg:pt-5">
      <div className="container">
        {/* top bar */}
        <div
          role="banner"
          aria-label="Free course announcement"
          className="bg-orange-50 text-neutral-900 text-center flex items-center justify-center gap-3 rounded-md px-4 py-2.5 flex-wrap"
        >
          <a href="#" className="hover:underline text-sm">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </a>
          <button
            className="hover:text-grey-30 transition-colors"
            aria-label="Get Free Courses"
          >
            <RiArrowRightLine size={26} aria-hidden="true" focusable="false" />
          </button>
        </div>

        {/* navbar */}
        <div className="py-3.5 lg:pt-4 pb-5 border-b border-white-95 flex items-center max-lg:justify-between lg:gap-[50px]">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logo.png" width={205} height={50} alt="Logo" />
          </Link>

          {/* Mobile Menu */}
          <RemoveScroll enabled={isOpen}>
            <nav
              className={`navbar ${isOpen ? "active" : ""}`}
              aria-label="Main Navigation"
              role="navigation"
              id="mobile-navigation"
            >
              {/* wrapper */}
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="/images/logo.png"
                    width={205}
                    height={50}
                    alt="Logo"
                  />
                </div>
                <button aria-label="close menu" onClick={handleClick}>
                  <RiCloseLine size={30} aria-hidden="true" focusable="false" />
                </button>
              </div>

              {/* List */}
              <ul className="mt-8 grid gap-5 text-center ">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`block font-medium hover:text-orange-50 transition-colors ${
                        pathname === item.href ? "text-orange-50" : ""
                      }`}
                      onClick={handleClick}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Btn wrapper */}
              <div className="mt-auto flex justify-around">
                <Link
                  href="/signup"
                  aria-label="Sign up for an account"
                  className="primary-btn"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  aria-label="Log in to your account"
                  className="secondary-btn"
                >
                  Login
                </Link>
              </div>
            </nav>
          </RemoveScroll>

          {/* Lg Menu */}
          <div
            className="flex justify-between items-center w-full max-lg:hidden"
            aria-label="Main Navigation"
          >
            {/* List */}
            <ul className="max-lg:hidden flex items-center border border-orange-90 rounded-xl overflow-hidden">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`block py-4 px-6 ${
                      pathname === item.href ? "bg-orange-50 text-white" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Lg Btn wrapper */}
            <Link
              href="/login"
              aria-label="Log in to your account"
              className="px-8 bg-orange-50 text-white py-4 rounded-lg hover:bg-orange-50/80 transition-colors"
            >
              Login
            </Link>
          </div>
          {/* Menu Icon */}
          <button
            aria-label="open menu"
            aria-expanded={isOpen}
            aria-controls="mobile navigation"
            onClick={handleClick}
            className="lg:hidden"
          >
            <RiMenuLine size={30} />
          </button>

          {/* Overlay */}
          <div
            className={`overlay ${isOpen ? "active" : ""}`}
            aria-label="overlay"
            onClick={handleClick}
            role="presentation"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
