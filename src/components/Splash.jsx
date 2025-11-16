import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import verticalLogo from '../assets/logo-vertical.png';
import App from '../App.jsx'; // This is your homepage component

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) {
    return <App />; // Show homepage after splash
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F4EAD5]">
      <motion.img
        src={verticalLogo}
        alt="Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-40" // Adjust size as needed
      />
    </div>
  );
}

export default SplashScreen;
