import React, { useState } from "react";
import { PiBracketsCurly } from "react-icons/pi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Skills() {
  const [activeCard, setActiveCard] = useState("frontend");

  return (
    <section id="skill" className="w-full py-20">
      {/* Heading */}
      <div className="text-center">
        <h1 className="heading-font text-3xl font-bold  text-white">
          Skills
        </h1>

        <p className="heading-font text-gray-500 mt-2">
          My technical level
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-14 flex flex-col md:flex-row gap-10">

        {/* Frontend */}
        <div className="w-full md:w-1/2 flex flex-col items-center">

          <div
            onClick={() =>
              setActiveCard(
                activeCard === "frontend" ? null : "frontend"
              )
            }
            className="w-full max-w-sm cursor-pointer rounded-lg p-3 hover:bg-gray-800 transition-all duration-300"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">
                <span className="text-3xl text-blue-500">
                  <PiBracketsCurly />
                </span>

                <div>
                  <h2 className="text-xl text-white font-bold">
                    Frontend Developer
                  </h2>

                  <p className="text-gray-500 text-sm">
                    More than 2 years
                  </p>
                </div>
              </div>

              <MdOutlineKeyboardArrowDown
                className={`text-3xl text-gray-400 transition-transform duration-300 ${
                  activeCard === "frontend"
                    ? "rotate-180"
                    : ""
                }`}
              />

            </div>
          </div>

          {activeCard === "frontend" && (
            <div className="w-full max-w-sm mt-5 space-y-4 p-3">

              {[
                ["HTML", 95],
                ["CSS", 90],
                ["JavaScript", 90],
                ["React", 85],
                ["Tailwind CSS", 90],
              ].map(([skill, value]) => (
                <div key={skill}>
                  <div className="flex justify-between text-white mb-1">
                    <span>{skill}</span>
                    <span>{value}%</span>
                  </div>

                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

        {/* Backend */}
        <div className="w-full md:w-1/2 flex flex-col items-center">

          <div
            onClick={() =>
              setActiveCard(
                activeCard === "backend" ? null : "backend"
              )
            }
            className="w-full max-w-sm cursor-pointer rounded-lg p-3 hover:bg-gray-800 transition-all duration-300"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">
                <span className="text-3xl text-blue-500">
                  <TbHeartRateMonitor />
                </span>

                <div>
                  <h2 className="text-xl text-white font-bold">
                    Backend Developer
                  </h2>

                  <p className="text-gray-500 text-sm">
                    More than 1.5 years
                  </p>
                </div>
              </div>

              <MdOutlineKeyboardArrowDown
                className={`text-3xl text-gray-400 transition-transform duration-300 ${
                  activeCard === "backend"
                    ? "rotate-180"
                    : ""
                }`}
              />

            </div>
          </div>

          {activeCard === "backend" && (
            <div className="w-full max-w-sm mt-5 space-y-4 p-3">

              {[
                ["Node.js", 90],
                ["Express.js", 90],
                ["MongoDB", 85],
                ["Mongoose", 85],
                ["REST API", 90],
              ].map(([skill, value]) => (
                <div key={skill}>
                  <div className="flex justify-between text-white mb-1">
                    <span>{skill}</span>
                    <span>{value}%</span>
                  </div>

                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Skills;