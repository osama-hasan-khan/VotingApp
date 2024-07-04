import React from "react";
import VoteCard from "./VoteCard";

const ActiveVotes = () => {
  return (
    <>
      <div className="mt-3">
        <p className="text-green-500 font-mono">
          Active Votes <span>📣</span>
        </p>
      </div>
      <div className="mt-11 p-3">
        <VoteCard />
      </div>
    </>
  );
};

export default ActiveVotes;
