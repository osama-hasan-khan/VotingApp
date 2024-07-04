import React from "react";

const Vote = ({ data }) => {
  return (
    <div className="border p-2">
      <div className="flex gap-1.5 items-center">
        <img
          src={data.profile_pic}
          alt={`${data.profile_pic}'s profile`}
          className="rounded-full w-8 border border-blue-100"
        />
        <p className="text-xs font-mono font-bold">{data.username}</p>
      </div>
      <p className="font-bold text-lg">{data.heading}</p>
      <span className="text-xs text-gray-400 font-thin">{data.date}</span>
    </div>
  );
};

export default Vote;
