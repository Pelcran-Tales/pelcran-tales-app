import { createContext, useState, useContext } from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <LayoutContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}
