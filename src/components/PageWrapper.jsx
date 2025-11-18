import React from "react";
import { useLayout } from "../context/LayoutContext";

const PageWrapper = ({ children, fixedChildren }) => {
  const { headerHeight = 0 } = useLayout();
  const NAV_HEIGHT = 81;

  return (
    <div
      style={{
        paddingTop: headerHeight + 3,
        paddingBottom: NAV_HEIGHT + 12,
      }}
      className="bg-pageBg min-h-screen relative"
    >
      {/* FIXED UI LAYER (aligned to the wrapper’s width & margins) */}
      <div className="fixed inset-0 pointer-events-none z-[999]">
        <div
          className="
            mx-auto 
            h-full 
            relative 
            pointer-events-none
            w-[90%]           /* Mobile: 90% width */
            md:w-[75%]         /* Tablet & Laptop: 75% width */
            max-w-[1200px]     /* Same sizing cap as your main wrapper */
          "
        >
          {fixedChildren}
        </div>
      </div>

      {/* MAIN CONTENT — same responsive width */}
      <div
        className="
          mx-auto
          w-[90%]        /* mobile */
          md:w-[75%]     /* tablet & laptop */
          max-w-[1200px] /* your existing max width */
        "
      >
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;





