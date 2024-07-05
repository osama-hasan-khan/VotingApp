import React from "react";
import PastVote from "./PastVote";
import { userData } from "../utils/userData";

const PastVotes = () => {
  return (
    <div className="mt-28">
      <p className="text-red-500 font-mono">
        Past Votes <span>🤖</span>
      </p>
      <div className="grid grid-cols-4 gap-5">
        {userData.map((data, index) => {
          return <PastVote data={data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default PastVotes;
