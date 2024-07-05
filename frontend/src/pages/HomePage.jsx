import React from "react";
import { Link } from "react-router-dom";
import ActiveVotes from "../components/ActiveVotes";
import PastVotes from "../components/PastVotes";

const HomePage = () => {
  return (
    <div className="mx-32 my-12">
      <div className="flex justify-between items-center">
        <Link className="font-extrabold font-mono">
          VoteVerse <span>🚀</span>
        </Link>

        <Link to={"/login"}>
          <button className="font-bold font-mono border px-2 py-0.5 rounded border-dashed">
            Login
          </button>
        </Link>
      </div>
      <div>
        <ActiveVotes />
      </div>

      <div>
        <PastVotes />
      </div>
    </div>
  );
};

export default HomePage;
