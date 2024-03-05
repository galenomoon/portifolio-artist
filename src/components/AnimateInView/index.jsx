import React, { useRef } from 'react'
import { useInView } from "framer-motion";

export default function AnimateInView({ children, duration, direction="X", inverse, className}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        transform: isInView ? "none" : `translate${direction}(${inverse ? "" : "-"}200px)`,
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${duration || " 0.4s"}`
      }}>
      {children}
    </div>
  )
}
