import React, { useEffect, useState } from "react";

const Badges = ({ badge }) => {
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
                  className="h-12"
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
