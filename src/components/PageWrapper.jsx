import React from "react";
import { useLayout } from "../context/LayoutContext";

const PageWrapper = ({ children }) => {
  const { headerHeight } = useLayout();

  return (
    <div
      style={{ paddingTop: headerHeight + 3 }}  // ✔ dynamic height + 3px rule
      className="bg-pageBg min-h-screen px-5 sm:px-6 md:px-8"
    >
      {children}
    </div>
  );
};

export default PageWrapper;

