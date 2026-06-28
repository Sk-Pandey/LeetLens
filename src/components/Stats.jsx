import React from "react";

const Stats = ({ stats, loading }) => {
  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 animate-pulse">
        <div className="h-5 bg-slate-800 rounded w-1/3"></div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-28 h-28 bg-slate-800 rounded-full flex-shrink-0"></div>
          <div className="w-full space-y-3">
            <div className="h-3 bg-slate-800 rounded w-full"></div>
            <div className="h-3 bg-slate-800 rounded w-5/6"></div>
            <div className="h-3 bg-slate-800 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!stats || stats.totalSolved === undefined) return null;

  // Geometry computation for perfect circular ring
  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const solvedRatio =
    stats.totalQuestions > 0 ? stats.totalSolved / stats.totalQuestions : 0;
  const strokeDashoffset = circumference - solvedRatio * circumference;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-slate-700/80 transition-all duration-300">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
        Progress Statistics
      </h3>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-slate-950/40 p-6 rounded-2xl border border-slate-800/60">
        {/* Perfect Square Container for Circular Ring */}
        <div className="relative w-32 h-32 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-full h-full transform -rotate-90 overflow-visible"
            viewBox="0 0 120 120"
          >
            {/* Background Track Circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              className="stroke-slate-800 fill-none"
              strokeWidth={strokeWidth}
            />
            {/* Animated Front Progress Arc */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              className="stroke-amber-500 fill-none transition-all duration-1000 ease-out"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          {/* Centered Meta Numerical Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-slate-50 tracking-tight">
              {stats.totalSolved}
            </span>
            <div className="w-12 h-px bg-slate-800 my-1"></div>
            <span className="text-[10px] font-mono text-slate-500 uppercase">
              Solved
            </span>
          </div>
        </div>

        {/* LeetCode Traditional Linear Row Breakdown */}
        <div className="flex-1 w-full space-y-4">
          {/* Easy Progress Metric */}
          <div>
            <div className="flex justify-between items-end text-xs font-medium mb-1.5">
              <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[11px]">
                Easy
              </span>
              <span className="text-slate-300 font-mono">
                {stats.easySolved}
                <span className="text-slate-600">/{stats.totalEasy}</span>
              </span>
            </div>
            <div className="w-full bg-slate-800/60 h-2 rounded-full overflow-hidden p-[1px]">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-700 shadow-sm shadow-emerald-500/20"
                style={{
                  width: `${(stats.easySolved / (stats.totalEasy || 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Medium Progress Metric */}
          <div>
            <div className="flex justify-between items-end text-xs font-medium mb-1.5">
              <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded text-[11px]">
                Medium
              </span>
              <span className="text-slate-300 font-mono">
                {stats.mediumSolved}
                <span className="text-slate-600">/{stats.totalMedium}</span>
              </span>
            </div>
            <div className="w-full bg-slate-800/60 h-2 rounded-full overflow-hidden p-[1px]">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-700 shadow-sm shadow-amber-500/20"
                style={{
                  width: `${(stats.mediumSolved / (stats.totalMedium || 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Hard Progress Metric */}
          <div>
            <div className="flex justify-between items-end text-xs font-medium mb-1.5">
              <span className="text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded text-[11px]">
                Hard
              </span>
              <span className="text-slate-300 font-mono">
                {stats.hardSolved}
                <span className="text-slate-600">/{stats.totalHard}</span>
              </span>
            </div>
            <div className="w-full bg-slate-800/60 h-2 rounded-full overflow-hidden p-[1px]">
              <div
                className="bg-rose-500 h-full rounded-full transition-all duration-700 shadow-sm shadow-rose-500/20"
                style={{
                  width: `${(stats.hardSolved / (stats.totalHard || 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
