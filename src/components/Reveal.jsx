import React from "react";
import { motion } from "framer-motion";

// Fades + slides children up as they scroll into view.
export const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

// "(01) Section name" eyebrow
export const Eyebrow = ({ num, children }) => (
  <Reveal as="p" className="eyebrow">
    <span className="eyebrow-num">{num}</span> {children}
  </Reveal>
);

export default Reveal;