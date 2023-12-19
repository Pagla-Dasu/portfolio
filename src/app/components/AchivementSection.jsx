"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "GitHub Pushes",
    value: "50",
  },
  {
    metric: "Certificates",
    value: "4",
  },
  {
    metric: "Years",
    value: "1",
    postfix: "+",
  },
];

const AchivementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achivement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achivement?.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achivement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achivement?.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achivement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchivementSection;
