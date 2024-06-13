import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 bg-white">
      <ul>
        <li className="hover:bg-gray-200 p-2 rounded">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-gray-200 p-2 rounded">Shorts</li>
        <li className="hover:bg-gray-200 p-2 rounded">Trending</li>
        <li className="hover:bg-gray-200 p-2 rounded">Live</li>
      </ul>
      <h1 className="font-bold pt-5 border-t mt-5">Subscriptions</h1>
      <ul className="space-y-2 mt-2">
        <h1 className="font-bold pt-5 border-t mt-5">Explore</h1>
        <li className="hover:bg-gray-200 p-2 rounded">Music</li>
        <li className="hover:bg-gray-200 p-2 rounded">Sports</li>
        <li className="hover:bg-gray-200 p-2 rounded">Gaming</li>
        <li className="hover:bg-gray-200 p-2 rounded">Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
