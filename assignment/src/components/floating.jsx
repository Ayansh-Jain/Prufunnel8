//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function FloatingAbstracts({ variant = "hero" }) {
  const getShapes = () => {
    switch (variant) {
      case "hero":
        return (
          <>
            <motion.div
              className="fa-hero-circle-1"
              animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: 999999, ease: "easeInOut" }}
            />
            <motion.div
              className="fa-hero-circle-2"
              animate={{ y: [0, 40, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: 999999, ease: "easeInOut", delay: 1 }}
            />
            <motion.svg
              className="fa-hero-rings"
              viewBox="0 0 100 100"
              animate={{ rotate: [0, 360], y: [0, -15, 0] }}
              transition={{ duration: 12, repeat: 999999, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="45" className="fa-ring" />
              <circle cx="50" cy="50" r="30" className="fa-ring" />
              <circle cx="50" cy="50" r="15" className="fa-ring" />
            </motion.svg>
            <motion.div
              className="fa-hero-dots-wrapper"
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: 999999, ease: "easeInOut", delay: 2 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="fa-hero-dot"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.4, 0.25] }}
                  transition={{ duration: 2, repeat: 999999, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </>
        );

      case "founder":
        return (
          <>
            <motion.svg
              className="fa-founder-rings"
              viewBox="0 0 200 200"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: 999999, ease: "linear" }}
            >
              <circle cx="100" cy="100" r="80" className="fa-founder-ring" />
              <circle cx="100" cy="100" r="60" className="fa-founder-ring" />
              <circle cx="100" cy="100" r="40" className="fa-founder-ring" />
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 80 * Math.cos((i * Math.PI) / 4)}
                  y2={100 + 80 * Math.sin((i * Math.PI) / 4)}
                  className="fa-founder-line"
                />
              ))}
            </motion.svg>
          </>
        );

      case "franchise":
        return (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="fa-franchise-circle"
                style={{ top: `${20 + i * 20}%`, left: `${10 + i * 15}%` }}
                animate={{ y: [0, -25, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8 + i, repeat: 999999, ease: "easeInOut", delay: i * 0.5 }}
              />
            ))}
          </>
        );

      case "bonus":
        return (
          <>
            <motion.div
              className="fa-bonus-circle"
              animate={{ y: [0, -15, 0], rotate: [0, 180, 0] }}
              transition={{ duration: 10, repeat: 999999, ease: "easeInOut" }}
            />
            <motion.div
              className="fa-bonus-circle-2"
              animate={{ y: [0, 15, 0], rotate: [0, -180, 0] }}
              transition={{ duration: 10, repeat: 999999, ease: "easeInOut", delay: 1 }}
            />
          </>
        );

      case "cta":
        return (
          <>
            <motion.div
              className="fa-cta-circle"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 6, repeat: 999999, ease: "easeInOut" }}
            />
            <motion.div
              className="fa-cta-circle-2"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 6, repeat: 999999, ease: "easeInOut", delay: 2 }}
            />
          </>
        );

      case "testimonials":
        return (
          <>
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="fa-testimonial-dot"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: 999999, ease: "easeInOut", delay: Math.random() * 2 }}
              />
            ))}
          </>
        );

      default:
        return null;
    }
  };

  return <div className="fa-wrapper">{getShapes()}</div>;
}
