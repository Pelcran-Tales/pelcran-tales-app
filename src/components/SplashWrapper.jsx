import { useState, useEffect } from 'react';
import SplashScreen from './Splash.jsx';
import App from '../App.jsx';

function SplashWrapper() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // show for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  // While splash is active → show splash
  if (showSplash) {
    return <SplashScreen />;
  }

  // After splash ends → load the app normally
  return <App />;
}

export default SplashWrapper;
