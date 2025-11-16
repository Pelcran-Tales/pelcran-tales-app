import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import verticalLogo from '../assets/logo-vertical.svg';

function SplashScreen() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start bg-[#F4EAD5] pt-32 sm:pt-40 md:pt-48 lg:pt-56">
      <motion.img
        src={verticalLogo}
        alt="Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-32 sm:w-36 md:w-40 lg:w-48" // responsive width
      />
    </div>
  );
}

export default SplashScreen;

