import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const NavItem = ({ navItem, open }) => {
  const { pathname } = useLocation();
  const isActive = pathname === navItem.path;

  return (
    <li
      className={`px-5 border-r-4 transition-all ${
        !open && isActive ? "border-primary" : "border-transparent"
      }`}
    >
      <Link
        to={navItem.path}
        className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
          isActive
            ? open
              ? "bg-primary text-white hover:bg-primary-dark"
              : "bg-gray-200"
            : "hover:bg-gray-100"
        }`}
      >
        <div
          className={`w-5 h-5 flex items-center justify-center ${
            isActive ? (open ? "text-white" : "text-primary") : "text-gray-600"
          }`}
        >
          <Icon icon={navItem.icon} className="w-5 h-5" />
        </div>
        {open && (
          <span
            className={`ml-3 transition-opacity ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {navItem.title}
          </span>
        )}
      </Link>
    </li>
  );
};

export default NavItem;
