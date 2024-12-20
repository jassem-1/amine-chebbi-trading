import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: {
  items: { name: string; image: string }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const getAnimationDuration = () => {
    switch (speed) {
      case 'fast':
        return '10s';
      case 'normal':
        return '20s';
      case 'slow':
        return '40s';
      default:
        return '20s';
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      className={`relative overflow-hidden ${className || ''}`}
    >
      <ul
        className={`flex items-center gap-6 w-max animate-scroll`}
        style={{
          animationPlayState: isHovered ? 'paused' : 'running',
          '--scroll-direction': direction === 'left' ? 'forwards' : 'reverse',
          '--scroll-duration': getAnimationDuration(),
        } as React.CSSProperties}
      >
        {/* Render items twice for seamless looping */}
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            className="relative rounded-2xl p-2 flex-shrink-0 md:h-24 md:w-24 w-20 h-20 opacity-70"
          >
            <img
              className="h-full w-full object-cover rounded-xl"
              src={item.image}
              alt={item.name}
            />
            <div className="absolute inset-0 flex items-center justify-center p-1 text-white bg-gradient-to-r from-[#A293FF] to-[#00F0FF] opacity-0 hover:opacity-100 transition-opacity rounded-xl">
              <p className="font-semibold text-center text-xl">{item.name}</p>
            </div>
          </li>
        ))}
      </ul>
      <style >{`
        .animate-scroll {
          animation: scroll var(--scroll-duration) linear infinite var(--scroll-direction);
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
