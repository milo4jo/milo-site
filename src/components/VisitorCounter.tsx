"use client";

import { useEffect, useState } from "react";

function FlipDigit({ digit, delay }: { digit: string; delay: number }) {
  const [current, setCurrent] = useState("0");
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (digit !== current) {
        setIsFlipping(true);
        const flipTimeout = setTimeout(() => {
          setCurrent(digit);
          setIsFlipping(false);
        }, 200);
        return () => clearTimeout(flipTimeout);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [digit, delay, current]);

  return (
    <div className="relative w-[18px] h-[26px] sm:w-[22px] sm:h-[32px]">
      <div
        className={`absolute inset-0 bg-[#1a1a1a] rounded-[3px] border border-neutral-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-200 ${
          isFlipping ? "scale-y-0" : "scale-y-100"
        }`}
        style={{ transformOrigin: "center" }}
      >
        {/* Top gradient */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-neutral-800/80 to-transparent" />
        
        {/* Digit */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[14px] sm:text-[18px] font-bold text-neutral-100 tabular-nums">
            {current}
          </span>
        </div>
        
        {/* Center line (split) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-px">
          <div className="h-[1px] bg-black/50" />
          <div className="h-[1px] bg-neutral-700/30" />
        </div>
        
        {/* Bottom shadow */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  );
}

// Simple persistent counter using localStorage
function useVisitorCount() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const STORAGE_KEY = "milo_visitor_count";
    const VISITED_KEY = "milo_visited";
    
    // Base count (simulated starting point)
    const BASE_COUNT = 847;
    
    // Get stored count
    const storedCount = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    const hasVisited = sessionStorage.getItem(VISITED_KEY);
    
    let newCount = storedCount || BASE_COUNT;
    
    // Increment if first visit this session
    if (!hasVisited) {
      newCount += 1;
      localStorage.setItem(STORAGE_KEY, newCount.toString());
      sessionStorage.setItem(VISITED_KEY, "1");
    }
    
    setCount(newCount);
    setLoaded(true);
  }, []);

  return { count, loaded };
}

export function VisitorCounter() {
  const { count, loaded } = useVisitorCount();
  
  // Format with leading zeros (6 digits)
  const digits = (loaded ? count : 0).toString().padStart(6, "0").split("");

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div 
        className="flex gap-[2px] p-1.5 bg-black/40 rounded border border-neutral-800/50"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
      >
        {digits.map((digit, i) => (
          <FlipDigit key={i} digit={loaded ? digit : "0"} delay={loaded ? i * 100 + 200 : 0} />
        ))}
      </div>
      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-neutral-600 font-medium">
        Visitors
      </span>
    </div>
  );
}
