import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="px-40 py-16">
      <div className="flex justify-between items-center">
        <Link className="font-extrabold font-mono">VoteVerse🚀</Link>

        <Link>
          <button className="font-bold font-mono border px-2 py-0.5 rounded border-dashed">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
