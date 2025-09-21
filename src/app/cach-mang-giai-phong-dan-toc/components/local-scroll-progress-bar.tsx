'use client';

import { useEffect, useState } from 'react';

export default function LocalScrollProgressBar() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setScale(Math.min(Math.max(p, 0), 1));
    };
    
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        height: 3, 
        width: '100%', 
        zIndex: 9999,
        transform: `scaleX(${scale})`, 
        transformOrigin: '0 50%',
        background: 'linear-gradient(90deg, #D64545, #FF6B6B)',
        transition: 'transform 0.1s ease-out'
      }}
      aria-hidden="true"
    />
  );
}
