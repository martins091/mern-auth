import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  return (
    <div className="shadow-md py-3 mb-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-xl">Auth App</h1>
        </Link>
        <ul className="flex gap-10 items-center">
          <Link to="/">
            <li
              className={`text-gray-800 ${
                activeMenu === 0 ? "font-bold" : ""
              } transition duration-300 transform`}
              onClick={() => handleMenuClick(0)}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`text-gray-800 ${
                activeMenu === 1 ? "font-bold" : ""
              } transition duration-300 transform`}
              onClick={() => handleMenuClick(1)}
            >
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-10 w-10 rounded-full object-cover"
                onClick={() => handleMenuClick(!1)}
              />
            ) : (
              <li
                className={`text-gray-800 ${
                  activeMenu === 2 ? "font-bold" : ""
                } transition duration-300 transform`}
                onClick={() => handleMenuClick(2)}
              >
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
