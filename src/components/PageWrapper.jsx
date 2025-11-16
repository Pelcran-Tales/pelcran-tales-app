import React from 'react';

const PageWrapper = ({ children }) => {
  return (
    <div
      className="
        bg-pageBg 
        min-h-screen 
        px-5 sm:px-6 md:px-8 
        pt-[96px] sm:pt-[104px] md:pt-[112px]
      "
    >
      {children}
    </div>
  );
};

export default PageWrapper;
