import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <a href="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </a>

      <div>
        <a href="/login">
          <button className="text-white pr-4">Sign In</button>
        </a>
        <a href="/signup">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
