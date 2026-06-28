import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Profile from "./components/Profile";
const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar />
      <Hero />
      <Search search={search} setSearch={setSearch} />
      <Profile search={search} />
    </div>
  );
};

export default App;
