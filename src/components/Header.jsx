import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.svg';

const Header = ({ title }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-pageBg shadow z-50">
      <div className="max-w-7xl mx-auto flex flex-col items-start px-5 sm:px-6 md:px-8 pt-4 pb-4">
        {/* Logo */}
        <img
          src={logoHorizontal}
          alt="Logo"
          className="h-6 w-auto mb-6 sm:h-8 md:h-10" // 24px = h-6, mb-6 ≈ 24px spacing
        />

        {/* Page Title */}
        <h1 className="font-heading text-h4 sm:text-h3 md:text-h2 text-primaryText mb-0">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
