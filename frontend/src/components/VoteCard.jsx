import React from "react";
import { userData } from "../utils/userData";
import Vote from "./Vote";

const VoteCard = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {userData.map((data) => {
        return (
          <div>
            <Vote data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default VoteCard;
