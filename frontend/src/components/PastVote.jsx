import React from "react";

const PastVote = ({ data }) => {
  return (
    <div className="border border-slate-700 p-2 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
      <div className="flex gap-1.5 items-center">
        <img
          src={data.profile_pic}
          alt={`${data.profile_pic}'s profile`}
          className="rounded-full w-8"
        />
        <p className="text-xs font-medium text-slate-200">{data.username}</p>
      </div>
      <p className="font-bold text-lg font-mono">{data.heading}</p>
      <span className="text-xs text-gray-400 font-thin">Until {data.date}</span>
    </div>
  );
};

export default PastVote;
