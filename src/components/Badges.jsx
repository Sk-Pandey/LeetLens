import React, { useEffect, useState } from "react";

const Badges = ({ search }) => {
  const [badge, setBadge] = useState({ badgesCount: 0, badges: [] });
  useEffect(() => {
    const apiCall = async () => {
      const fetchData = await fetch(
        `https://alfa-leetcode-api.onrender.com/${search}/badges`,
      );
      const data = await fetchData.json();
      setBadge(data);
    };
    apiCall();
  }, [search]);

  return (
    <>
      {badge.badgesCount > 0 && (
        <div>
          <h2>Badges</h2>
          <span>{badge.badgesCount}</span>
          <div>
            {badge.badges.map((item) => {
              return (
                <img
                  key={item.id}
                  src={
                    item.icon.startsWith("https")
                      ? item.icon
                      : "/Monthbadge.png"
                  }
                  alt=""
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Badges;
