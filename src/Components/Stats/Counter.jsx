// Counter.jsx
import React, { useEffect, useState } from "react";
import { useMotionValue, animate } from "motion/react";

/**
 * Counter
 * props:
 *  - to: number
 *  - duration: seconds
 *  - decimals: decimal places
 *  - separator: boolean (add thousand separators)
 */
export default function Counter({
  to = 100,
  duration = 2,
  decimals = 0,
  separator = true,
}) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsub = mv.on("change", (v) => {
      let value = decimals === 0 ? Math.round(v) : Number(v).toFixed(decimals);
      if (separator) {
        // format with thousand separators
        value = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      setDisplay(value);
    });

    const controls = animate(mv, to, {
      duration: Math.max(0.2, duration),
      ease: "easeInOut",
    });

    return () => {
      unsub();
      controls.stop();
    };
  }, [to, duration, decimals, separator, mv]);

  return (
    <span
      aria-label={`Counter to ${to}`}
      style={{
        margin: 0,
        fontSize: 36,
        fontWeight: 700,
        color: "#000000",
        lineHeight: 1,
      }}
    >
      {display}
    </span>
  );
}
