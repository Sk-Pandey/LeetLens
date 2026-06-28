import React from "react";

const Hero = () => {
  return (
    <div className="relative text-center py-10 overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-transparent border border-slate-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
        Engineering Your{" "}
        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          Coding Legacy
        </span>
      </h1>
      <p className="max-w-2xl mx-auto px-4 text-slate-400 text-sm sm:text-base leading-relaxed">
        Analyze your LeetCode journey, coding statistics, and contest
        performance instantly. Precision data for the high-performance
        developer.
      </p>
    </div>
  );
};

export default Hero;
