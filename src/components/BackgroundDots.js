import React, { useEffect, useState } from 'react';
import './dots.css'
const BackgroundDots = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    createDots();
    window.addEventListener('resize', createDots);
    return () => window.removeEventListener('resize', createDots);
  }, []);

  const createDots = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dotCount = 100;
    const newDots = [];

    for (let i = 0; i < dotCount; i++) {
      newDots.push({
        left: `${Math.random() * width}px`,
        top: `${Math.random() * height}px`,
        size: `${Math.random() * 4 + 2}px`,
        duration: `${Math.random() * 10 + 15}s`,
        delay: `${Math.random() * -25}s`,
      });
    }

    setDots(newDots);
  };

  return (
    <div className="background">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDuration: dot.duration,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundDots;