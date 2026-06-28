import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Stats from "./components/Stats";
import Badges from "./components/Badges";
import Contest from "./components/Contest";
const App = () => {
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState({});
  const [stats, setStats] = useState({});
  const [contest, setContest] = useState({});
  const [badge, setBadge] = useState({ badgesCount: 0, badges: [] });

  const handleApi = async () => {
    if (!search.trim()) return;

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
      console.error(error);
    }
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <Search search={search} setSearch={setSearch} handleApi={handleApi} />
      <Profile profile={profile} />
      <Stats stats={stats} />
      <Badges badge={badge} />
      <Contest contest={contest} />
    </div>
  );
};

export default App;
