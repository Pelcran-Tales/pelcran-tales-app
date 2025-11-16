import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import SplashWrapper from './components/SplashWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SplashWrapper />
  </StrictMode>,
)
