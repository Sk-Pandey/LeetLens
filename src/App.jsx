import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar />
      <Hero />
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

export default App;
