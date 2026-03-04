import React from "react";

export default function Navbar() {
  return (
    <nav className="text-black w-full">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-8">
          <a
            href="#profile"
            className="text-sm sm:text-base lg:text-lg border-2 rounded-2xl hover:text-white hover:bg-black transition duration-200 font-medium tracking-wide border-gray-600 hover:border-black px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4"
          >
            Profile
          </a>
          <a
            href="#projects"
            className="text-sm sm:text-base lg:text-lg border-2 rounded-2xl hover:text-white hover:bg-black transition duration-200 font-medium tracking-wide border-gray-600 hover:border-black px-6 sm:px-10 lg:px-20 py-2 sm:py-3 lg:py-4"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm sm:text-base lg:text-lg border-2 rounded-2xl hover:text-white hover:bg-black transition duration-200 font-medium tracking-wide border-gray-600 hover:border-black px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
