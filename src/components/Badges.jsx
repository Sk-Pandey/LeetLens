import React from "react";

const Badges = ({ badge, loading }) => {
  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 animate-pulse">
        <div className="h-5 bg-slate-800 rounded w-1/4"></div>
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-slate-800 rounded-full"></div>
          <div className="w-12 h-12 bg-slate-800 rounded-full"></div>
          <div className="w-12 h-12 bg-slate-800 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!badge || !badge.badges || badge.badgesCount === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-sm text-slate-500 font-medium">
        🛡️ No badges earned on this profile yet.
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 className="text-lg font-bold text-slate-200">Badges</h3>
        <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-full border border-amber-500/20">
          Total: {badge.badgesCount}
        </span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent snap-x">
        {badge.badges.map((item) => (
          <div
            key={item.id || item.displayName}
            className="snap-center bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex-shrink-0 flex items-center justify-center hover:border-slate-700 transition-all duration-300 group relative"
          >
            <img
              className="h-14 w-14 object-contain transform group-hover:scale-110 transition-transform duration-300"
              src={
                item.icon?.startsWith("https") ? item.icon : "/Monthbadge.png"
              }
              alt={item.displayName || "Badge Item"}
            />
            <div className="absolute -top-8 bg-slate-900 border border-slate-700 text-[10px] px-2 py-0.5 rounded text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
              {item.displayName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
