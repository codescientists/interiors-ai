"use client"

import { createUser, getUserById } from '@/lib/actions/user.actions';
import { SignedOut, useUser } from '@clerk/clerk-react';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { HiBars2, HiXMark } from "react-icons/hi2";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the mobile menu

  const [credits, setCredits] = useState(0)
  const [loadingCredits, setLoadingCredits] = useState(true)

  const { user, isLoaded } = useUser()

  useEffect(() => {
    const getCredits = async () => {
      if (user && isLoaded) {
        const userInfo = await getUserById(user.id);

        if (userInfo == null || undefined) {
          const userData = { clerkId: user.id, email: user?.emailAddresses[0].emailAddress, username: user.firstName }
          const newUser = await createUser(userData);
          setCredits(newUser?.creditBalance)
        } else {
          setCredits(userInfo.creditBalance)
        }
        setLoadingCredits(false)
      }
    }
    getCredits();
  }, [isLoaded])


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
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
        className={`fixed top-0 left-0 h-full w-3/4 bg-white p-5 transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden z-50`}
      >
        <div className="logo text-5xl font-bold">
          <img src="logo.svg" alt="g" className="" />
        </div>
        <ul className="space-y-4 mt-6 px-4">
          <li>
            <Link
              href="/pricing"
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
        {/* <a
          href="https://forms.gle/W9aDLXMYcNZyZA3M9"
          target="_blank"
          className="mt-10 w-fit mx-auto font-semibold border-2 border-black flex items-center justify-center space-x-2 overflow-hidden rounded-lg text-lg hover:bg-[#5ac1ff] transition duration-300"
        >
          <span className="px-3">Redesign yours →</span>
        </a> */}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center space-x-4 font-semibold py-2 px-4">
          <li>
            <Link
              href="/pricing"
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
          <div className="flex items-center space-x-4">
            {loadingCredits ?
              <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              :
              <h5 className="font-semibold">Credits : {credits}</h5>
            }

            <UserButton />
          </div>
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