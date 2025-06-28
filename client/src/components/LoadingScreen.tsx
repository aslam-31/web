import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

export function LoadingScreen({ onComplete, duration = 2000 }: LoadingScreenProps) {
  const { theme } = useTheme();
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    // Start zoom animation before completing
    const zoomTimer = setTimeout(() => {
      setIsZooming(true);
    }, duration - 500);

    // Complete loading
    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, duration]);

  const logoSrc = theme === 'dark' 
    ? '/images/logo/CLIFTON-CUT-WHITE.png'
    : '/images/logo/CLIFTON-CUT-BLACK.png';

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${bgColor} transition-all duration-500 ${isZooming ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
      <div className="relative">
        {/* Blinking Logo */}
        <img
          src={logoSrc}
          alt="CLIFTON Logo"
          className={`w-32 h-32 md:w-48 md:h-48 object-contain transition-all duration-300 loading-blink ${
            isZooming ? 'scale-125' : 'scale-100'
          }`}
        />
        
        {/* Loading dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div 
            className={`w-2 h-2 rounded-full loading-bounce ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
          ></div>
          <div 
            className={`w-2 h-2 rounded-full loading-bounce-delay-1 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
          ></div>
          <div 
            className={`w-2 h-2 rounded-full loading-bounce-delay-2 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
          ></div>
        </div>
      </div>


    </div>
  );
}