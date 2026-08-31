'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number; // Delay between each child in ms (default: 90ms)
  baseDelay?: number; // Initial base delay in ms (default: 0ms)
  duration?: number;
  effect?: 'fade-up' | 'scale-up' | 'fade-in';
  className?: string;
  threshold?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 90,
  baseDelay = 0,
  duration = 650,
  effect = 'fade-up',
  className = '',
  threshold = 0.1,
}: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const raf = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = containerRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={containerRef} className={className}>
      {childrenArray.map((child, index) => {
        const itemDelay = baseDelay + index * staggerDelay;

        const getChildStyles = () => {
          if (isVisible) {
            return {
              opacity: 1,
              transform: 'translate3d(0, 0, 0) scale(1)',
              transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${itemDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${itemDelay}ms`,
            };
          }

          if (effect === 'scale-up') {
            return {
              opacity: 0,
              transform: 'translate3d(0, 24px, 0) scale(0.96)',
              transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${itemDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${itemDelay}ms`,
            };
          }

          return {
            opacity: 0,
            transform: 'translate3d(0, 30px, 0)',
            transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${itemDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${itemDelay}ms`,
          };
        };

        return (
          <div
            key={index}
            style={getChildStyles()}
            className="will-change-[transform,opacity] h-full"
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
