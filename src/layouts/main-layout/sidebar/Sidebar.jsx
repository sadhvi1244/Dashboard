import React from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import NavItem from "./NavItem";
import navItems from "../../../data/nav-items";
import { drawerCloseWidth, drawerOpenWidth } from "..";

const Sidebar = ({ open }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full shadow-xl border-r border-gray-300 transition-all duration-300 flex flex-col overflow-hidden`}
      style={{ width: open ? drawerOpenWidth : drawerCloseWidth }}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center h-20 border-b border-gray-300">
        <Link to="../../../pages/dashboard/Dashboard.jsx">
          <img
            alt="Logo"
            className={`h-12 transition-all duration-300 ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            src={open ? "/logo.png" : "/logo.png"}
          />
        </Link>
      </div>

      {/* Sidebar Navigation with SimpleBar */}
      <SimpleBar style={{ maxHeight: "calc(100vh - 98px)" }} className="flex-1">
        <ul className="space-y-2 py-4">
          {navItems.map((navItem) => (
            <li key={navItem.id} className="group">
              <NavItem navItem={navItem} open={open} />
            </li>
          ))}
        </ul>
      </SimpleBar>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-300 flex justify-center bg-gray-100">
        <button className="text-gray-700 hover:text-blue-600 transition-transform transform hover:scale-110">
          <i className="ri-settings-3-line text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
