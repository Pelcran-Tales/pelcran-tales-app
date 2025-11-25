// src/components/SplashScreen.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import verticalLogo from '../assets/logo-vertical.svg';

function SplashScreen({ onFinish }) {
  const [show, setShow] = useState(true);
  const [zoomOut, setZoomOut] = useState(false);

  useEffect(() => {
    const fadeInDuration = 1500; // 1.5s initial fade-in
    const holdDuration = 800;    // 0.8s pause before zoom
    const zoomDuration = 300;    // 0.3s aggressive zoom-out

    // Start zoom-out after fade-in + hold
    const zoomTimer = setTimeout(() => setZoomOut(true), fadeInDuration + holdDuration);

    // Remove splash after zoom-out completes
    const endTimer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, fadeInDuration + holdDuration + zoomDuration);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="w-screen h-screen bg-[#F4EAD5] flex items-start justify-center"
          initial={{ opacity: 1 }}
          animate={zoomOut ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          <motion.img
            src={verticalLogo}
            alt="Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              zoomOut
                ? { scale: 8, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={
              zoomOut
                ? { duration: 0.3, ease: 'easeIn' }
                : { duration: 1.5, ease: 'easeOut' }
            }
            style={{ transformOrigin: 'center' }}
            className="w-63 sm:w-72 md:w-81 lg:w-96 mt-[40vh]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;
