import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
const projects = () => {
  return (
    <div id="projects" className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="overflow-hidden">
            <img
              src={proj2}
              alt="Project 2"
              className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <a
            href="https://example.com/project2"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-8 py-2 text-sm font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            View
          </a>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="overflow-hidden">
            <img
              src={proj1}
              alt="Project 1"
              className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <a
            href="https://example.com/project1"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-8 py-2 text-sm font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            View
          </a>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="overflow-hidden">
            <img
              src={proj3}
              alt="Project 3"
              className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <a
            href="https://example.com/project3"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-8 py-2 text-sm font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            View
          </a>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="overflow-hidden">
            <img
              src={proj4}
              alt="Project 4"
              className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <a
            href="https://example.com/project4"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-8 py-2 text-sm font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default projects;
