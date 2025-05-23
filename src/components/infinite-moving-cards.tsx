'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
}

interface InfiniteMovingCardsProps {
  items: Partner[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'normal',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState(false);
  
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const xOutput = direction === 'left' ? [100, 0, -100] : [-100, 0, 100];
  const xTransform = useTransform(x, xInput, xOutput);
  
  const speedMap = {
    slow: 60,
    normal: 40,
    fast: 20,
  };
  
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = containerRef.current.clientWidth;
      const totalDistance = containerWidth + viewportWidth;
      const calculatedDuration = totalDistance / speedMap[speed];
      setDuration(calculatedDuration);
      setStart(true);
    }
  }, [items, speed]);
  
  useEffect(() => {
    if (!start) return;
    
    const controls = animate(x, [0, -100], {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    
    return controls.stop;
  }, [x, duration, start]);
  
  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden ${className}`}
    >
      <motion.div 
        className="flex"
        style={{ x: xTransform }}
      >
        {[...items, ...items].map((item, index) => (
          <div 
            key={`${item.name}-${index}`} 
            className="flex-shrink-0 px-8 flex items-center justify-center"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={120}
              height={40}
              className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}