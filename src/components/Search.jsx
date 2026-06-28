import React from "react";

const Search = ({ search, setSearch, handleApi, loading }) => {
  return (
    <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input
          type="search"
          required
          disabled={loading}
          placeholder="Enter LeetCode username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleApi()}
          className="w-full pl-12 pr-4 py-3.5 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all disabled:opacity-50"
        />
      </div>
      <button
        onClick={handleApi}
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-600 active:scale-98 text-slate-950 font-bold rounded-2xl transition-all shadow-lg shadow-amber-500/10 disabled:opacity-50 flex items-center justify-center min-w-[120px]"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Analyze"
        )}
      </button>
    </div>
  );
};

export default Search;
