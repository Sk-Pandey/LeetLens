import React from "react";
import TerminalIcon from "@mui/icons-material/Terminal";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 px-4 sm:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 group">
        <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300">
          <TerminalIcon
            className="text-amber-500 animate-pulse"
            sx={{ fontSize: "28px" }}
          />
        </div>
        <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          LeetLens
        </h1>
      </div>
      <a
        href="https://shashikant-snowy.vercel.app/"
        target="_blank"
        className="hidden sm:block"
      >
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            About Developer
          </span>
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
