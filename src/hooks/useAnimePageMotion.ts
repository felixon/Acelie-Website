import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export function useAnimePageMotion<T extends HTMLElement>() {
  const rootRef = useRef<T | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const revealItems = Array.from(root.querySelectorAll('.anime-reveal')) as HTMLElement[];
    const hoverItems = Array.from(root.querySelectorAll('.anime-hover')) as HTMLElement[];
    const drawPaths = Array.from(root.querySelectorAll('.anime-draw-path')) as SVGPathElement[];

    drawPaths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    revealItems.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(32px)';
    });

    animate(root.querySelectorAll('.anime-page-kicker'), {
      opacity: [0, 1],
      y: [16, 0],
      duration: 720,
      delay: stagger(80),
      ease: 'outExpo',
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        animate(entry.target, {
          opacity: [0, 1],
          y: [32, 0],
          duration: 900,
          ease: 'outExpo',
        });

        if (entry.target instanceof SVGPathElement) {
          animate(entry.target, {
            strokeDashoffset: 0,
            duration: 1400,
            ease: 'inOutSine',
          });
        }

        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => observer.observe(item));
    drawPaths.forEach((path) => observer.observe(path));

    const enterHandlers: Array<() => void> = [];
    const leaveHandlers: Array<() => void> = [];

    hoverItems.forEach((item) => {
      const enter = () => animate(item, { y: -7, scale: 1.012, duration: 380, ease: 'out(3)' });
      const leave = () => animate(item, { y: 0, scale: 1, duration: 480, ease: 'out(3)' });
      item.addEventListener('mouseenter', enter);
      item.addEventListener('mouseleave', leave);
      enterHandlers.push(enter);
      leaveHandlers.push(leave);
    });

    return () => {
      observer.disconnect();
      hoverItems.forEach((item, index) => {
        item.removeEventListener('mouseenter', enterHandlers[index]);
        item.removeEventListener('mouseleave', leaveHandlers[index]);
      });
    };
  }, []);

  return rootRef;
}

