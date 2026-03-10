"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  useEffect(() => {
    // Detect touch-only devices
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (hasCoarsePointer && !hasHover) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const closest = target.closest("[data-cursor]") as HTMLElement | null;
      if (closest) {
        setCursorText(closest.getAttribute("data-cursor") || "");
        setIsHovering(true);
      }
    };

    const handleLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor]")) {
        setCursorText("");
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);

    return () => {
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: isHovering ? 80 : 16,
          height: isHovering ? 80 : 16,
          backgroundColor: isHovering
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.7)",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isHovering && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-sans font-bold text-black tracking-[0.2em] uppercase select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
