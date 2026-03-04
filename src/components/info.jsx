import React from "react";

const projects = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black py-5 sm:py-8 lg:py-10 min-h-75 sm:min-h-87.5 lg:min-h-100 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(100px, -100px);
          }
          50% {
            transform: translate(50px, 100px);
          }
          75% {
            transform: translate(-100px, 50px);
          }
        }
        .floating-dot {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: float 8s infinite ease-in-out;
        }
        .dot-sm {
          width: 10px;
          height: 10px;
        }
        .dot-md {
          width: 4px;
          height: 4px;
        }
        .dot-lg {
          width: 10px;
          height: 10px;
        }
      `}</style>
      <div className="floating-dot dot-md" style={{ left: '20%', top: '30%', animationDelay: '0s' }}></div>
      <div className="floating-dot dot-lg" style={{ left: '80%', top: '70%', animationDelay: '2s' }}></div>
      <div className="floating-dot dot-sm" style={{ left: '50%', top: '20%', animationDelay: '4s' }}></div>
      <div className="floating-dot dot-lg" style={{ left: '10%', top: '60%', animationDelay: '6s' }}></div>
      <div className="floating-dot dot-md" style={{ left: '70%', top: '40%', animationDelay: '1s' }}></div>
      <div className="floating-dot dot-sm" style={{ left: '30%', top: '80%', animationDelay: '3s' }}></div>
      <div className="floating-dot dot-lg" style={{ left: '60%', top: '50%', animationDelay: '5s' }}></div>
      <div className="floating-dot dot-md" style={{ left: '40%', top: '10%', animationDelay: '7s' }}></div>
      <h1 className="text-[clamp(1rem,6vw,7rem)] text-white font-poppins text-center font-bold relative z-10">
        Where creativity meets hardwork
      </h1>
    </div>
  )
};

export default projects;
