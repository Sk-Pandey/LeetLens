import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Stats from "./components/Stats";
import Badges from "./components/Badges";
const App = () => {
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState({});
  const [stats, setStats] = useState({});
  const [badge, setBadge] = useState({ badgesCount: 0, badges: [] });

  const handleApi = async () => {
    if (!search.trim()) return;

    try {
      const [profileRes, statsRes, badgesRes] = await Promise.all([
        fetch(`https://alfa-leetcode-api.onrender.com/${search}`),
        fetch(`https://alfa-leetcode-api.onrender.com/${search}/profile`),
        fetch(`https://alfa-leetcode-api.onrender.com/${search}/badges`),
      ]);

      const [profileData, statsData, badgesData] = await Promise.all([
        profileRes.json(),
        statsRes.json(),
        badgesRes.json(),
      ]);

      setProfile(profileData);
      setStats(statsData);
      setBadge(badgesData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <Search search={search} setSearch={setSearch} handleApi={handleApi} />
      <Profile search={search} profile={profile} />
      <Stats search={search} stats={stats} />
      <Badges search={search} badge={badge} />
    </div>
  );
};

export default App;
