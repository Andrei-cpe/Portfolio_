import React from "react";
import profile from "../assets/profile.png";

function Header() {
  return (
    <header className="w-full px-10 sm:px-20 lg:px-40 pt-6 sm:pt-8">
      <div className="flex justify-between items-center gap-4 sm:gap-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col"></div>

        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/path-to-your-cv.pdf";
            link.download = "CV.pdf";
            link.click();
          }}
          className="px-3 sm:px-4 py-2 sm:py-3 bg-white text-black rounded-2xl border-2 border-gray-500 hover:bg-black hover:border-black hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium cursor-pointer"
        >
          Download CV
        </button>
      </div>
    </header>
  );
}

export default Header;
