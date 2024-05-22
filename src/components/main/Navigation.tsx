"use client";

import { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { LogoIcon } from "@/icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto grid grid-cols-3 items-center p-5 max-w-5xl">
        <div className="col-start-1 col-span-1">
          <Link href="/">
            <LogoIcon />
          </Link>
        </div>
        <div className="md:hidden col-span-2 flex justify-end">
          <div>
            <button
              className="p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={toggleOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            <Transition
              show={isOpen}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-10">
                <div className="relative p-5">
                  <button
                    className="absolute top-4 right-4 p-2"
                    aria-label="Close menu"
                    onClick={toggleOpen}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <nav className="flex flex-col items-center space-y-2 mt-2">
                    <Link
                      href="/"
                      className="text-gray-700 py-2"
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                    <Link
                      href="/#projects"
                      className="text-gray-700 py-2"
                      onClick={handleLinkClick}
                    >
                      Projects
                    </Link>
                    <Link
                      href="/#team"
                      className="text-gray-700 py-2"
                      onClick={handleLinkClick}
                    >
                      Team
                    </Link>
                    <Link
                      href="/#footer"
                      className="border-2 border-secondary text-primary px-4 py-2 rounded-md"
                      onClick={handleLinkClick}
                    >
                      Contact Us
                    </Link>
                  </nav>
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <nav className="hidden md:flex md:col-start-2 md:col-span-1 justify-center md:space-x-8 md:justify-between">
          <Link href="/#hero" className="text-gray-700">
            Home
          </Link>
          <Link href="/#projects" className="text-gray-700">
            Projects
          </Link>
          <Link href="/#team" className="text-gray-700">
            Team
          </Link>
        </nav>
        <div className="hidden md:flex col-start-3 col-span-1 justify-self-end">
          <Link
            href="/#footer"
            className="border-2 border-secondary text-primary px-4 py-2 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
