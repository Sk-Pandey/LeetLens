import React, { useEffect, useState } from "react";

const Stats = ({ search }) => {
  const [stats, setStats] = useState({});
  useEffect(() => {
    const apiCall = async () => {
      const fetchData = await fetch(
        `https://alfa-leetcode-api.onrender.com/${search}/profile`,
      );
      const data = await fetchData.json();
      setStats(data);
    };
    apiCall();
  }, [search]);

  return (
    <>
      {stats.totalSolved !== undefined && (
        <>
          <div>{`${stats.totalSolved}/${stats.totalQuestions}`}</div>

          <div>
            <h1>Difficulty breakdown</h1>
            <div>{`${stats.easySolved}/${stats.totalEasy}`}</div>
            <div>{`${stats.mediumSolved}/${stats.totalMedium}`}</div>
            <div>{`${stats.hardSolved}/${stats.totalHard}`}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Stats;
