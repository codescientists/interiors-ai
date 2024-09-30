"use client"

import { SignedOut } from '@clerk/clerk-react';
import { SignedIn, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { HiBars2, HiXMark } from "react-icons/hi2";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      // @ts-ignore
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex items-center justify-between py-8 container sticky top-0 bg-white z-50">
      {/* Mobile Menu Toggle Button */}
      <Link href={`/`} className="logo text-5xl font-bold">
          <img src="logo.svg" alt="interiors.ai" />
      </Link>

      {/* Mobile Sliding Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-3/4 bg-white p-5 transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden z-50`}
      >
        <div className="logo text-5xl font-bold">
            <img src="logo.jpg" alt="g" className="h-16 w-16" />
        </div>
        <ul className="space-y-4 mt-6 px-4">
          <li className="border-b-2 border-black py-2">
            <a
              href="#services"
              className="block text-lg font-semibold"
              onClick={toggleMenu}
            >
              Services
            </a>
          </li>
          <li className="border-b-2 border-black py-2">
            <a
              href="#hiring"
              className="block text-lg font-semibold"
              onClick={toggleMenu}
            >
              Hiring
            </a>
          </li>
          <li className="border-b-2 border-black py-2">
            <a
              href="#reviews"
              className="block text-lg font-semibold"
              onClick={toggleMenu}
            >
              Reviews
            </a>
          </li>
        </ul>
        <a
          href="https://forms.gle/W9aDLXMYcNZyZA3M9"
          target="_blank"
          className="mt-10 w-fit mx-auto font-semibold border-2 border-black flex items-center justify-center space-x-2 overflow-hidden rounded-lg text-lg hover:bg-[#5ac1ff] transition duration-300"
        >
          <span className="px-3">Redesign yours →</span>
          {/* <span className="border-l-2 border-black bg-[#5ac1ff] p-3">
            <Headset />
          </span> */}
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center space-x-4 font-semibold py-2 px-4">
          <li>
            <Link
              href="/"
              className="relative text-xl font-medium py-1 z-10 px-3"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in"
              className="relative text-xl font-medium py-1 z-10 px-3"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="relative text-xl font-medium py-1 z-10 px-3"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="relative text-xl font-medium py-1 z-10 px-3"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href={`/sign-up`}>
            <button className="group relative overflow-hidden border border-blue-600 text-black bg-[#9ef0ff] py-3 px-8 rounded-xl text-xl font-semibold">
              <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                Redesign yours →
              </span>
              <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                Redesign yours →
              </span>
            </button>
          </Link>
        </SignedOut>
        
        
        <div className="md:hidden ml-4">
            <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <HiXMark /> : <HiBars2 />}
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;