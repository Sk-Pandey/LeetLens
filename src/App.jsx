import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Stats from "./components/Stats";
import Badges from "./components/Badges";
import Contest from "./components/Contest";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [contest, setContest] = useState(null);
  const [badge, setBadge] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // New state to hold error messages

  const handleApi = async () => {
    if (!search.trim()) return;

    // Reset previous states before making a new call
    setLoading(true);
    setError(null);
    setProfile(null);
    setStats(null);
    setBadge(null);
    setContest(null);

    try {
      const [profileRes, statsRes, badgesRes, contestRes] = await Promise.all([
        fetch(`https://alfa-leetcode-api.onrender.com/${search}`),
        fetch(`https://alfa-leetcode-api.onrender.com/${search}/profile`),
        fetch(`https://alfa-leetcode-api.onrender.com/${search}/badges`),
        fetch(`https://alfa-leetcode-api.onrender.com/${search}/contest`),
      ]);

      // 1. Technical/Logical Check: Validate if the server returned any errors
      if (profileRes.status === 404 || statsRes.status === 404) {
        throw new Error(
          "LeetCode user does not exist. Please check the username spelling.",
        );
      }
      if (profileRes.status === 429) {
        throw new Error(
          "Too many requests! The server is rate-limited. Please try again in a minute.",
        );
      }
      if (!profileRes.ok || !statsRes.ok) {
        throw new Error(
          "Something went wrong with the API. Please try again later.",
        );
      }

      const [profileData, statsData, badgesData, contestData] =
        await Promise.all([
          profileRes.json(),
          statsRes.json(),
          badgesRes.json(),
          contestRes.json(),
        ]);

      // 2. Logical Check: Some APIs return 200 OK but include an 'error' message inside the body
      if (profileData.error || profileData.message === "user does not exist") {
        throw new Error("This LeetCode user was not found.");
      }

      setProfile(profileData);
      setStats(statsData);
      setBadge(badgesData);
      setContest(contestData);
    } catch (err) {
      console.error("Fetch error details:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
      <div>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
          <Hero />
          <Search
            search={search}
            setSearch={setSearch}
            handleApi={handleApi}
            loading={loading}
          />

          {/* MODERN ANIMATED ERROR UI ALERT COMPONENT */}
          {error && (
            <div className="max-w-xl mx-auto animate-fadeIn bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-2xl flex items-start gap-3 shadow-lg shadow-rose-500/5">
              <span className="text-xl">⚠️</span>
              <div className="flex-1 text-sm font-medium">
                <p className="font-bold text-rose-300">Analysis Error</p>
                <p className="mt-0.5 text-rose-400/90 leading-relaxed">
                  {error}
                </p>
              </div>
              <button
                onClick={() => setError(null)}
                className="text-rose-400/60 hover:text-rose-400 text-xs font-bold px-2 py-1 rounded-lg hover:bg-rose-500/10"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Render layout if loading is true or if profile data exists successfully */}
          {(loading || profile) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-1 space-y-6">
                <Profile profile={profile} loading={loading} />
                <Badges badge={badge} loading={loading} />
              </div>
              <div className="md:col-span-2 space-y-6">
                <Stats stats={stats} loading={loading} />
                <Contest contest={contest} loading={loading} />
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
