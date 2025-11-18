import React, { useEffect, useRef } from 'react';
import logoHorizontal from '../assets/logo-horizontal.svg';
import { useLayout } from '../context/LayoutContext';

const Header = ({ title }) => {
  const headerRef = useRef(null);
  const { setHeaderHeight } = useLayout();

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef, setHeaderHeight]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full bg-pageBg z-50 safe-top"
    >
      <div
        className="
          mx-auto
          w-[90%]       /* mobile width logic */
          md:w-[75%]    /* tablet/laptop */
          max-w-[1200px]
          flex flex-col items-start
          pt-[21px] pb-[21px]
        "
      >
        <img
          src={logoHorizontal}
          alt="Logo"
          className="h-6 w-auto mb-[24px]"
        />

        <h1
          className="
            font-heading text-h1 sm:text-h1-md md:text-h1-lg
            text-primaryText
          "
        >
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;



