import React from "react";

export default function Circle({ position = "top", className = "" }) {
  return (
    <section
      className={
        `w-[100vw] h-[100vw] bg-background-night-dark rounded-full absolute ${
          position === "top" ? "top-40" : "bottom-60"
        } z-10 flex-shrink-0 ` + className
      }
    />
  );
}
