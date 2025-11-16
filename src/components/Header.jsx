import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';

const Header = ({ title }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <img
          src={logoHorizontal}
          alt="Logo"
          className="h-10 w-auto mr-4"
        />

        {/* Page Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;