import React from "react";

export default function Circle({ position = "top", className = "" }) {
  const classNamePosition = position === "top" ? "sm:top-40 md:top-0" : "sm:bottom-50 md:-bottom-40";
  const clasNameGradient =
    position === "top"
      ? "bg-gradient-to-t from-background-sun-set via-background-sun-set to-background-sun-set/20"
      : "bg-gradient-to-b from-background-sun-set via-background-sun-set to-background-sun-set/20";
  return (
    <section
      className={`w-[100vw] h-[100vw] rounded-full absolute z-10 flex-shrink-0 ${classNamePosition} ${clasNameGradient} ${className}`}
    />
  );
}
