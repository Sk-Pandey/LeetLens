import React, { useState } from "react";

const Contest = ({ contest, loading }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 animate-pulse">
        <div className="h-5 bg-slate-800 rounded w-1/4"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-16 bg-slate-800 rounded-xl"></div>
          <div className="h-16 bg-slate-800 rounded-xl"></div>
          <div className="h-16 bg-slate-800 rounded-xl"></div>
        </div>
        <div className="h-40 bg-slate-800 rounded-xl"></div>
      </div>
    );
  }

  if (
    !contest ||
    !contest.contestParticipation ||
    contest.contestParticipation.length === 0
  ) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-sm text-slate-500 font-medium">
        🏆 No tournament or contest participation found.
      </div>
    );
  }

  const participations = contest.contestParticipation;
  const ratings = participations.map((d) => Math.round(d.rating));
  const maxRating = Math.max(...ratings, 1500); // Floor baseline to standard LeetCode rating
  const minRating = Math.min(...ratings, 1200);
  const totalPoints = participations.length;

  // Viewbox Dimensions
  const width = 600;
  const height = 200;
  const paddingLeft = 50; // Room for Y-axis text
  const paddingRight = 20;
  const paddingTop = 30;
  const paddingBottom = 40; // Room for X-axis text

  // Compute Coordinate Vectors
  const graphPoints = participations.map((data, index) => {
    const x =
      totalPoints > 1
        ? paddingLeft +
          (index / (totalPoints - 1)) * (width - paddingLeft - paddingRight)
        : paddingLeft;
    const y =
      maxRating !== minRating
        ? height -
          paddingBottom -
          ((data.rating - minRating) / (maxRating - minRating)) *
            (height - paddingTop - paddingBottom)
        : height / 2;
    return { x, y, rating: Math.round(data.rating), title: data.contest.title };
  });

  // Path string for the line
  const pointsString = graphPoints.map((p) => `${p.x},${p.y}`).join(" ");

  // Path string for the closed Neon Glow Area shape under the line
  const areaPointsString =
    totalPoints > 0
      ? `${graphPoints[0].x},${height - paddingBottom} ${pointsString} ${graphPoints[graphPoints.length - 1].x},${height - paddingBottom}`
      : "";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-slate-700/80 transition-all duration-300 space-y-6">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800/60 pb-3">
        Contest Performance
      </h3>

      {/* LeetCode Aesthetic Highlight Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center">
          <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
            Contest Rating
          </span>
          <span className="text-2xl font-black text-amber-400 mt-1 tracking-tight">
            {Math.round(contest.contestRating) || "0"}
          </span>
        </div>
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center">
          <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
            Global Ranking
          </span>
          <div className="mt-1 flex items-baseline gap-1 truncate">
            <span className="text-xl font-bold text-slate-100">
              {contest.contestGlobalRanking
                ? `#${contest.contestGlobalRanking.toLocaleString()}`
                : "N/A"}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              /
              {contest.totalParticipants
                ? contest.totalParticipants.toLocaleString()
                : "0"}
            </span>
          </div>
        </div>
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center">
          <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
            Attended
          </span>
          <span className="text-2xl font-black text-slate-100 mt-1 tracking-tight">
            {contest.contestAttend || "0"}
          </span>
        </div>
      </div>

      {/* Interactive Micro Charts Framework */}
      <div className="relative bg-slate-950/50 p-5 rounded-xl border border-slate-800/80 group">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
            Rating Analytics
          </span>

          {/* Dynamic Tooltip Element */}
          <div className="min-h-[24px]">
            {hoveredPoint ? (
              <span className="text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2.5 py-1 rounded-lg animate-fadeIn shadow-sm shadow-amber-500/5">
                <strong>{hoveredPoint.title}:</strong> {hoveredPoint.rating}
              </span>
            ) : (
              <span className="text-[11px] text-slate-600 font-medium italic">
                Hover nodes to view data checkpoints
              </span>
            )}
          </div>
        </div>

        <div className="w-full overflow-x-auto pb-2">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full min-w-[550px] h-auto overflow-visible"
          >
            <defs>
              {/* Premium Glow Line Gradient */}
              <linearGradient
                id="chartLineGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>

              {/* Neo-Glow Background Area Fill Gradient */}
              <linearGradient
                id="chartAreaGrad"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
              </linearGradient>

              {/* Box Glow Filter effect */}
              <filter
                id="neonGlow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Horizontal Y-Direction Grid Lines */}
            <line
              x1={paddingLeft}
              y1={paddingTop}
              x2={width - paddingRight}
              y2={paddingTop}
              className="stroke-slate-800/60"
              strokeDasharray="3 3"
            />
            <line
              x1={paddingLeft}
              y1={(paddingTop + (height - paddingBottom)) / 2}
              x2={width - paddingRight}
              y2={(paddingTop + (height - paddingBottom)) / 2}
              className="stroke-slate-800/30"
              strokeDasharray="3 3"
            />
            <line
              x1={paddingLeft}
              y1={height - paddingBottom}
              x2={width - paddingRight}
              y2={height - paddingBottom}
              className="stroke-slate-700"
              strokeWidth="1.5"
            />

            {/* Vertical X-Direction Grid Lines */}
            <line
              x1={paddingLeft}
              y1={paddingTop}
              x2={paddingLeft}
              y2={height - paddingBottom}
              className="stroke-slate-700"
              strokeWidth="1.5"
            />
            <line
              x1={width - paddingRight}
              y1={paddingTop}
              x2={width - paddingRight}
              y2={height - paddingBottom}
              className="stroke-slate-800/60"
              strokeDasharray="3 3"
            />

            {/* Axis Labels (Text Data Directions) */}
            <text
              x={paddingLeft - 12}
              y={paddingTop + 4}
              className="fill-slate-500 font-mono text-[10px]"
              textAnchor="end"
            >
              {maxRating}
            </text>
            <text
              x={paddingLeft - 12}
              y={(paddingTop + (height - paddingBottom)) / 2 + 4}
              className="fill-slate-600 font-mono text-[10px]"
              textAnchor="end"
            >
              {Math.round((maxRating + minRating) / 2)}
            </text>
            <text
              x={paddingLeft - 12}
              y={height - paddingBottom + 4}
              className="fill-slate-500 font-mono text-[10px]"
              textAnchor="end"
            >
              {minRating}
            </text>

            <text
              x={paddingLeft}
              y={height - paddingBottom + 18}
              className="fill-slate-500 font-mono text-[9px]"
            >
              First Contest
            </text>
            <text
              x={width - paddingRight}
              y={height - paddingBottom + 18}
              className="fill-slate-500 font-mono text-[9px]"
              textAnchor="end"
            >
              Latest
            </text>

            {/* 1. Neon Glowing Area Under Layer */}
            {areaPointsString && (
              <polygon points={areaPointsString} fill="url(#chartAreaGrad)" />
            )}

            {/* 2. Premium Main Connected Trendline */}
            <polyline
              fill="none"
              stroke="url(#chartLineGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={pointsString}
              filter="url(#neonGlow)"
            />

            {/* 3. Interactive Target Checkpoint Nodes */}
            {graphPoints.map((pt, idx) => (
              <g key={idx} className="cursor-pointer">
                {/* Larger transparent hover capture circle */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="14"
                  className="fill-transparent"
                  onMouseEnter={() => setHoveredPoint(pt)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                {/* Core map point */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={hoveredPoint?.x === pt.x ? "6" : "4"}
                  className={`${
                    hoveredPoint?.x === pt.x
                      ? "fill-slate-50 stroke-orange-500 stroke-2 scale-125"
                      : "fill-slate-950 stroke-amber-500"
                  } transition-all duration-150 pointer-events-none`}
                  strokeWidth="2.5"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Contest;
