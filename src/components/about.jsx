import React from "react";
import profile from "../assets/profile.png";
const about = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full px-10 sm:px-20 lg:px-40 pb-8 sm:pb-12 lg:pb-16">
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes slowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .scroll-to-top-btn {
          animation: slowBounce 3s infinite;
        }
        .scroll-to-top-btn:hover {
          animation: none;
        }
        .scroll-to-top-btn svg {
          animation: slowBounce 3s infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-[clamp(2.5rem,5vw,3rem)] font-poppins text-gray-800 font-bold tracking-wide mb-4 sm:mb-6">
            about <span className="text-gray-500">me</span>.
          </h1>
          <p className="text-black font-poppins text-[clamp(0.875rem,2vw,1.125rem)] tracking-wide leading-relaxed">
            a Computer Engineering graduate with a strong passion for technology
            and problem solving. I am seeking a competitive environment and an
            entry-level IT role where I can grow professionally while
            contributing my skills and knowledge along the way. I look forward
            to getting in touch with you soonnnnn.
          </p>
        </div>
        <div className="flex justify-start sm:justify-end">
          <h2 className="text-black font-semibold font-poppins text-[clamp(.2rem,4vw,1rem)] tracking-wide">
            let's turn those idea into reality.
          </h2>
        </div>
      </div>
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors z-19 cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default about;
