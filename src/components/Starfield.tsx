import React, { useEffect, useRef } from 'react';

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    setSize();
    window.addEventListener('resize', setSize);

    // Star configuration
    const STAR_COUNT = 400; // Increased from 150
    const stars: { x: number; y: number; z: number; o: number }[] = [];

    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * 2 + 0.5, // speed/depth
            o: Math.random(), // opacity
        });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw background overlay if needed (but CSS handles the main black)
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';

      stars.forEach((star) => {
        star.y -= 0.1 * star.z; // Move up slowly
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }

        // Increased opacity multiplier from 0.3 to 0.7 for "more explicit" look
        ctx.globalAlpha = 0.7 * star.o;
        ctx.beginPath();
        // Increased max size from 1.5 to 2.0
        ctx.arc(star.x, star.y, Math.random() * 2.0, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'var(--bg-primary)'
      }}
    />
  );
};
