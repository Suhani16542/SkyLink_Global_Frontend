'use client';

import React, { useEffect, useRef, useState } from 'react';

export type RevealEffect =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'scale-up'
  | 'blur-in'
  | 'image-reveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  effect?: RevealEffect;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  effect = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  className = '',
  as: Component = 'div',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

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

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const getInitialStyles = () => {
    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        filter: 'blur(0px)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      };
    }

    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    switch (effect) {
      case 'fade-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 36px, 0)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'fade-down':
        return {
          opacity: 0,
          transform: 'translate3d(0, -36px, 0)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'fade-left':
        return {
          opacity: 0,
          transform: 'translate3d(36px, 0, 0)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'fade-right':
        return {
          opacity: 0,
          transform: 'translate3d(-36px, 0, 0)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'scale-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 20px, 0) scale(0.95)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'blur-in':
        return {
          opacity: 0,
          transform: 'translate3d(0, 20px, 0) scale(0.98)',
          filter: 'blur(8px)',
          transition: baseTransition,
        };
      case 'image-reveal':
        return {
          opacity: 0,
          transform: 'scale(1.04)',
          filter: 'blur(4px)',
          transition: baseTransition,
        };
      case 'fade-in':
      default:
        return {
          opacity: 0,
          transform: 'translate3d(0, 0, 0)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
    }
  };

  return (
    <Component
      ref={elementRef}
      style={getInitialStyles()}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {children}
    </Component>
  );
}
