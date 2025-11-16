"use client";

import React, { useEffect, useRef } from "react";
import StarIcon from "../icon/StarIcon";

const items = [
  "Connecting Systems",
  "Building API",
  "Custom Software",
  "CRMs",
  "Optimizations",
  "Custom Software",
  "CRMs",
  "Optimizations",
];

export default function Carasole2() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let lastTimestamp = performance.now();
    const speed = 30; // pixels per second, adjust as you want

    const autoScroll = (timestamp: number) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      scrollAmount += (speed * delta) / 1000; // time based increment
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;

      requestAnimationFrame(autoScroll);
    };

    requestAnimationFrame(autoScroll);

    // Cleanup function not strictly necessary here but good practice
    return () => {
      // No cleanup needed for requestAnimationFrame since it's recursive
    };
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF] py-9 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-12 whitespace-nowrap overflow-hidden"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-12 flex-shrink-0">
            <span className="text-[#4A4C56] font-[HelveticaNeue] text-[36px] font-normal leading-[1] tracking-[0.72px]">
              {item}
            </span>

            {index !== items.length - 1 && index !== items.length * 2 - 1 && (
              <StarIcon />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
