import React from "react";
import IconifyIcon from "../../../components/base/IconifyIcon";
import { useBreakpoints } from "../../../providers/BreakpointsProviders";
import "simplebar-react/dist/simplebar.min.css";

const Topbar = ({ open, handleDrawerToggle }) => {
  const { down } = useBreakpoints();
  const isMobileScreen = down("sm");

  return (
    <header
      className={`fixed top-0 left-0 flex items-center justify-between h-20 px-6 shadow-md backdrop-blur-lg bg-white/80 border-b border-gray-200 transition-all duration-300 z-50
        ${
          isMobileScreen
            ? "w-full"
            : open
            ? "ml-60 w-[calc(100%-240px)]"
            : "ml-28 w-[calc(100%-110px)]"
        }`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-1">
        {/* Sidebar Toggle Button */}
        <button
          className="text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all"
          onClick={handleDrawerToggle}
        >
          <IconifyIcon
            icon={open ? "ri:menu-unfold-4-line" : "ri:menu-unfold-3-line"}
            width={24}
            height={24}
          />
        </button>

        {/* Search Input (Hidden on Mobile) */}
        <div className="hidden sm:flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 w-72 transition-all">
          <IconifyIcon icon="akar-icons:search" width={16} height={16} />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none w-full ml-2 text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Search Icon (Visible on Mobile) */}
        <button className="sm:hidden text-gray-800 p-2 rounded-md hover:bg-gray-200 transition-all">
          <IconifyIcon icon="mdi:search" width={22} height={22} />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <div className="relative">
          <button className="p-2 text-gray-800 hover:bg-gray-200 rounded-md transition-all">
            <IconifyIcon icon="ph:bell-bold" width={26} height={26} />
          </button>
          {/* Notification Badge */}
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* User Dropdown (Placeholder) */}
        <div className="hidden sm:block">
          {/* Replace this with actual UserDropdown component */}
          <button className="p-2 text-gray-800 hover:bg-gray-200 rounded-md transition-all">
            <IconifyIcon icon="mdi:account-circle" width={28} height={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
