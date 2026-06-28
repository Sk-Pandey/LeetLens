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

  const handleApi = async () => {
    if (!search.trim()) return;
    setLoading(true);

    try {
      const [profileRes, statsRes, badgesRes, contestRes] = await Promise.all([
        fetch(`https://alfa-leetcode-api.onrender.com/${search}`),
        fetch(`https://alfa-leetcode-api.onrender.com/${search}/profile`),
        fetch(`https://alfa-leetcode-api.onrender.com/${search}/badges`),
        fetch(`https://alfa-leetcode-api.onrender.com/${search}/contest`),
      ]);

      const [profileData, statsData, badgesData, contestData] =
        await Promise.all([
          profileRes.json(),
          statsRes.json(),
          badgesRes.json(),
          contestRes.json(),
        ]);

      setProfile(profileData);
      setStats(statsData);
      setBadge(badgesData);
      setContest(contestData);
    } catch (error) {
      console.error("Error fetching LeetCode metrics:", error);
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
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
