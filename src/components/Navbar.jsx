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
    </nav>
  );
};

export default Navbar;
