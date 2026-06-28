import React from "react";

const Profile = ({ profile, loading }) => {
  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 animate-pulse">
        <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto"></div>
        <div className="h-6 bg-slate-800 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-slate-800 rounded w-1/2 mx-auto"></div>
        <div className="h-4 bg-slate-800 rounded w-1/3 mx-auto"></div>
      </div>
    );
  }

  if (!profile || Object.keys(profile).length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl hover:border-slate-700 transition-all duration-300">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-all"></div>
        <img
          src={
            profile.avatar ||
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
          }
          className="relative w-24 h-24 rounded-full border-2 border-slate-800"
          alt="Avatar"
        />
      </div>

      <h2 className="mt-4 text-xl font-bold text-slate-100">
        {profile.name || "Anonymous User"}
      </h2>
      <p className="text-sm font-mono text-amber-500">@{profile.username}</p>

      {profile.ranking && (
        <div className="mt-3 px-4 py-1.5 bg-slate-950 rounded-full border border-slate-800 text-xs font-semibold text-slate-300">
          Rank: #{parseInt(profile.ranking).toLocaleString()}
        </div>
      )}

      <div className="w-full border-t border-slate-800/60 my-4 pt-4 space-y-2 text-sm text-slate-400">
        {profile.company && (
          <p className="flex items-center justify-center gap-1">
            🏢 {profile.company}
          </p>
        )}
        {profile.school && (
          <p className="flex items-center justify-center gap-1">
            🎓 {profile.school}
          </p>
        )}
        {profile.country && (
          <p className="flex items-center justify-center gap-1">
            📍 {profile.country}
          </p>
        )}
      </div>

      <div className="flex gap-3 mt-2">
        {profile.linkedIN && (
          <a
            href={profile.linkedIN}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-slate-950 border border-slate-800 rounded-xl text-[#0967C2] hover:bg-slate-800 transition-colors"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 32 32">
              <path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" />
            </svg>
          </a>
        )}
        {profile.gitHub && (
          <a
            href={profile.gitHub}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 hover:bg-slate-800 transition-colors"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </a>
        )}
        {profile.twitter && (
          <a
            href={profile.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <svg
              width="18"
              height="14"
              fill="currentColor"
              viewBox="0 0 300 271"
            >
              <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default Profile;
