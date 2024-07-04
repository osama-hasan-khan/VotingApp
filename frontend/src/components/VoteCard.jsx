import React from "react";
import { userData } from "../utils/userData";
import Vote from "./Vote";

const VoteCard = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {userData.map((data) => {
        return (
          <div className="">
            <Vote data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default VoteCard;
