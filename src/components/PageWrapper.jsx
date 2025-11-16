import React from "react";
import { useLayout } from "../context/LayoutContext";

const PageWrapper = ({ children }) => {
  const { headerHeight = 0 } = useLayout(); // header is dynamic
  const NAV_HEIGHT = 81; // fixed bottom nav height: 45px icon + 18px top + 18px bottom padding

  return (
    <div
      style={{
        paddingTop: headerHeight + 3,   // space for header + 3px
        paddingBottom: NAV_HEIGHT + 12, // space for bottom nav + extra margin
      }}
      className="bg-pageBg min-h-screen px-5 sm:px-6 md:px-8"
    >
      {children}
    </div>
  );
};

export default PageWrapper;



