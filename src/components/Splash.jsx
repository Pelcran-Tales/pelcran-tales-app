import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import verticalLogo from '../assets/logo-vertical.svg';

function SplashScreen() {
  return (
    <div className="w-screen h-screen bg-[#F4EAD5] flex items-start justify-center">
      <motion.img
        src={verticalLogo}
        alt="Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-32 sm:w-36 md:w-40 lg:w-48 mt-[40vh]" 
      />
    </div>
  );
}

export default SplashScreen;