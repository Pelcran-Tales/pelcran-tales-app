// src/components/MainNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, LogbookIcon, FoundationsIcon } from "./Icons";

const MainNav = () => {
  const navItems = [
    { name: "Home", icon: HomeIcon, path: "/" },
    { name: "Logbook", icon: LogbookIcon, path: "/logbook" },
    { name: "Foundations", icon: FoundationsIcon, path: "/foundations" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#f7f1e4] z-50 rounded-t-[9px]">
      <div className="max-w-7xl mx-auto flex justify-center items-center py-[18px] gap-[42px]">
        {navItems.map((item) => (
          <NavLink key={item.name} to={item.path}>
            {({ isActive }) => {
              const Icon = item.icon;
              return (
                <div
                  className={`flex items-center justify-center w-[51px] h-[45px] p-1 rounded-lg transition-colors duration-200
                    ${isActive ? "bg-[#372d20] text-[#f7f1e4]" : "bg-transparent text-[#372D20] hover:bg-[#493c2b] hover:text-[#f7f1e4]"} group`}
                >
                  <Icon className="transition-colors duration-200" />
                </div>
              );
            }}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;








