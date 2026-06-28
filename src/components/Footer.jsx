import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 mt-12 py-8 px-4 text-center space-y-4">
      <div className="max-w-3xl mx-auto space-y-2">
        <p className="text-xs font-mono text-slate-500 tracking-wider">
          DEVELOPED & DESIGNED BY
        </p>
        <h4 className="text-lg font-bold text-slate-200 tracking-tight">
          Shashikant Pandey
        </h4>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Passionate software engineer building responsive user experiences and
          precise dashboard systems.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <a
          href="https://www.linkedin.com/in/shashikant-pandey-aa9719372/"
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 rounded-xl transition-all"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/Sk-Pandey"
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 rounded-xl transition-all"
        >
          💻 GitHub
        </a>
        <a
          href="mailto:pandeyshashikant1434@gmail.com"
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 rounded-xl transition-all"
        >
          ✉️ Email
        </a>
        <a
          href="https://shashikant-snowy.vercel.app/"
          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-xs font-bold text-slate-950 rounded-xl transition-all shadow-md shadow-orange-500/5"
        >
          🚀 Portfolio
        </a>
      </div>

      <p className="text-[10px] font-mono text-slate-600 pt-4">
        &copy; {new Date().getFullYear()} LeetLens. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
