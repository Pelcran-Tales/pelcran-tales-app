import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.svg';

const Header = ({ title }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-pageBg shadow z-50">
      <div className="max-w-7xl mx-auto flex flex-col items-start
                      px-5 sm:px-6 md:px-8 pt-5 pb-5">
        {/* Logo */}
        <img
          src={logoHorizontal}
          alt="Logo"
          className="h-6 w-auto mb-5 sm:h-8 md:h-10" // 24px height ≈ h-6, spacing 21px ≈ mb-5
        />

        {/* Page Title */}
        <h1 className="font-heading text-h1 sm:text-h1-md md:text-h1-lg
                       text-primaryText mb-0">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;

