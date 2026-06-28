import React from "react";

const Contest = ({ contest }) => {
  const allRating =
    contest.contestParticipation?.map((data) => Math.round(data.rating)) || [];
  console.log(allRating);
  return (
    <div>
      <div>
        <strong>Contest Rating</strong>
        <span>{contest.contestRating}</span>
      </div>
      <div>
        <strong>Contest Attended</strong>
        <span>{contest.contestAttend}</span>
      </div>
      <div>
        <strong>Global Ranking</strong>
        <span>{`${contest.contestGlobalRanking}/${contest.totalParticipants}`}</span>
      </div>
      <div>graph using all ratings</div>
    </div>
  );
};

export default Contest;
