import React, { useEffect, useState } from "react";

const Stats = ({ stats }) => {
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
