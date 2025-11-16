import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import SplashWrapper from './components/SplashWrapper.jsx';
import { LayoutProvider } from './context/LayoutContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutProvider>
      <SplashWrapper />
    </LayoutProvider>
  </StrictMode>
);

