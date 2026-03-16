"use client";
import React, { useState } from "react";
import Logodark from "@/components/logodark";
import Link from "@/components/Link";
import Button from "./Button";
import Image from "next/image";
import Headline from "@/components/headline";
import SubHeading from "@/components/SubHeading";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center self-stretch">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#181818]/80 border-b border-white/5">
        <div className="container-main flex items-center justify-between h-[72px] sm:h-[80px]">
          <Logodark />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="#" text="Home" />
            <Link href="#" text="Product" />
            <Link href="#" text="About" />
            <Link href="#" text="Contact" />
          </div>

          <div className="flex items-center gap-4">
            <Button text="Login" variant="secondary" className="!py-2.5 !px-6" />

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-full bg-white transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="container-main flex flex-col items-center gap-2 pb-6">
            <Link href="#" text="Home" />
            <Link href="#" text="Product" />
            <Link href="#" text="About" />
            <Link href="#" text="Contact" />
          </div>
        </div>
      </nav>

      {/* ── Hero Content ── */}
      <div className="container-main flex flex-col items-center py-16 sm:py-24 gap-6">
        <Headline
          title={
            <>
              Work at the speed
              <br className="hidden sm:block" />
              {" "}of thought
            </>
          }
        />
        <SubHeading paragraph="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule." />
      </div>

      {/* ── CTA Buttons ── */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-12">
        <Button text="Try For Free" />
        <Button text="Learn More" variant="secondary" />
      </div>

      {/* ── Hero Image ── */}
      <div className="container-main flex justify-center">
        <Image
          src="/images/screens.png"
          alt="Slate app dashboard showing project management interface"
          width={1441}
          height={993}
          priority
          className="w-full max-w-[1100px] h-auto"
        />
      </div>
    </header>
  );
};

export default Header;
