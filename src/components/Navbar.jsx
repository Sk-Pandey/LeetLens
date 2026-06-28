import React from "react";
import TerminalIcon from "@mui/icons-material/Terminal";
const Navbar = () => {
  return (
    <nav className="flex items-center gap-2 p-2 bg-[#1D2128]">
      <TerminalIcon sx={{ color: "#FF9E20", fontSize: "50px" }} />
      <h1 className="font-[Playfair_Display] text-2xl text-[#FF9E20]">
        LeetLens
      </h1>
    </nav>
  );
};

export default Navbar;
