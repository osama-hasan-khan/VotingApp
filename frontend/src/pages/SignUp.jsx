import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-5">
      <Link to="/">
        <h1 className="font-extrabold font-Lobster_font text-2xl">VoteVerse</h1>
      </Link>
      <div className="flex h-screen justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-Bebas_font"> Create An Account</h1>
          <form className="flex flex-col mt-3 gap-2">
            <label className="font-Inter_font text-[13px]">Username</label>

            <input
              type="text"
              placeholder="John Doe"
              className="outline-none border border-slate-200 px-3 py-2.5 rounded-lg font-Inter_font placeholder:font-Inter_font placeholder:text-[12px] text-black"
            />

            <label className="font-Francois_font">Email</label>

            <input
              type="email"
              placeholder="Johndoe@gmail.com"
              className="outline-none border border-slate-200 px-3 py-2.5 rounded-lg font-Inter_font placeholder:font-Inter_font placeholder:text-[12px] text-black"
            />

            <label className="mt-2 font-Francois_font">Password</label>

            <input
              type="password"
              placeholder="your password"
              className="outline-none border border-slate-200 px-3 py-2.5 rounded-lg font-Inter_font placeholder:font-Inter_font placeholder:text-[12px] text-black"
            />

            <button
              type="submit"
              className="mt-4 px-3 py-2.5 bg-[#343434] text-white font-Inter_font text-center rounded-lg font-extralight"
            >
              Continue with Email
            </button>
          </form>
          <Link to="/login" className="mt-4 text-[14px] font-Inter_font">
            Already have an account?
            <button className="underline ml-2 text-[#48abd6]">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
