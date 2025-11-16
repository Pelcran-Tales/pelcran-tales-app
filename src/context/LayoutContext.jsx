import React, { createContext, useContext, useState, useRef, useEffect } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <LayoutContext.Provider value={{ headerHeight, setHeaderHeight, headerRef }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);


