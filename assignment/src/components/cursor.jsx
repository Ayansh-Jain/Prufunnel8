import React, { useEffect, useState } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TfiLocationArrow } from "react-icons/tfi";
import "./cursor.css";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const move = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleHover = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    const hoverables = document.querySelectorAll(
      "a, button, .btn, .card, .capability-card"
    );
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    // Hide cursor on touch devices
    const handleTouch = () => setIsVisible(false);
    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouch);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className={`custom-arrow ${isHovered ? "hovered" : ""}`}
      animate={{
        x: cursorPosition.x - 14,
        y: cursorPosition.y - 14,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 400,
        mass: 0.5,
      }}>
      <motion.div
        className="arrow-icon-wrapper"
        animate={{
          rotate: isHovered ? 45 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <TfiLocationArrow className="arrow-icon" />
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
