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
    if (search.trim() === "") return;
    const fetchProfile = await fetch(
      `https://alfa-leetcode-api.onrender.com/${search}`,
    );
    const profileData = await fetchProfile.json();
    setProfile(profileData);
    const fetchStats = await fetch(
      `https://alfa-leetcode-api.onrender.com/${search}/profile`,
    );
    const statsData = await fetchStats.json();
    setStats(statsData);
    const fetchBadges = await fetch(
      `https://alfa-leetcode-api.onrender.com/${search}/badges`,
    );
    const badgesData = await fetchBadges.json();
    setBadge(badgesData);
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
