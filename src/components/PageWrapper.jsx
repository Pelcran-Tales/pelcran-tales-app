import React from "react";
import { useLayout } from "../context/LayoutContext";

const PageWrapper = ({ children }) => {
  const { headerHeight = 0 } = useLayout();
  const NAV_HEIGHT = 81;

  return (
    <div
      style={{
        paddingTop: headerHeight + 3,
        paddingBottom: NAV_HEIGHT + 12,
      }}
      className="bg-pageBg min-h-screen"
    >
      {/* Align content with header elements */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;




