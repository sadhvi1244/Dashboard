import React, { useState } from "react";
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";

export const drawerOpenWidth = 240;
export const drawerCloseWidth = 110;

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => setOpen((prev) => !prev);

  // Debugging log
  console.log(`Rendering MainLayout with open: ${open}`);

  return (
    <>
      <div className="flex min-h-screen">
        {/* Topbar */}
        <Topbar open={open} handleDrawerToggle={handleDrawerToggle} />

        {/* Mobile Sidebar (Hidden on larger screens) */}
        <div
          className={`fixed inset-0 z-40 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
          style={{ width: drawerOpenWidth }}
        >
          <div className="h-full w-full bg-white shadow-lg">
            <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div
          className={`hidden sm:block fixed h-full bg-white transition-all duration-300 z-30 shadow-md`}
          style={{ width: open ? drawerOpenWidth : drawerCloseWidth }}
        >
          <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
        </div>

        {/* Main Content */}
        <main
          className={`flex-grow overflow-auto pt-20 pr-3 pb-6 pl-3 sm:pr-5 sm:pl-5 transition-all duration-300`}
          style={{
            marginLeft: open ? drawerOpenWidth : drawerCloseWidth,
          }}
        >
          {/* Spacing for fixed Topbar */}
          <div className="h-24" />
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer open={open} />
    </>
  );
};

export default MainLayout;
