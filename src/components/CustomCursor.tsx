import React, { useEffect, useRef } from 'react';

interface CustomCursorProps {
  isDarkMode: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isDarkMode }) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const needsCursor = useRef<boolean>(false);

  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine) and (hover: hover)');
    needsCursor.current = mql.matches;

    const updateBodyClass = () => {
      if (needsCursor.current) {
        document.body.classList.add('use-custom-cursor');
      } else {
        document.body.classList.remove('use-custom-cursor');
      }
    };

    updateBodyClass();
    const mqlListener = (e: MediaQueryListEvent) => {
      needsCursor.current = e.matches;
      updateBodyClass();
    };
    mql.addEventListener?.('change', mqlListener);

    return () => {
      document.body.classList.remove('use-custom-cursor');
      mql.removeEventListener?.('change', mqlListener);
    };
  }, []);

  useEffect(() => {
    // Theme-aware styles via CSS variables to avoid reflow-heavy class toggles
    const root = document.documentElement;
    root.style.setProperty('--cursor-fill', isDarkMode ? '#000000' : '#000000');
    root.style.setProperty('--cursor-border', isDarkMode ? '#22d3ee' : '#00ffff');
    root.style.setProperty('--cursor-shadow', isDarkMode ? '#a855f7' : '#ff00ff');
  }, [isDarkMode]);

  useEffect(() => {
    const node = cursorRef.current;
    if (!node) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };

    const tick = () => {
      // Snap to pointer for crisp feel; can lerp for smoothing if desired
      currentX = targetX;
      currentY = targetY;
      node.style.transform = `translate(${currentX}px, ${currentY}px)`;
      rafRef.current = null;
    };

    const onMouseEnter = () => {
      node.style.opacity = '1';
    };
    const onMouseLeave = () => {
      node.style.opacity = '0';
    };

    if (window.matchMedia('(pointer: fine) and (hover: hover)').matches) {
      document.addEventListener('mousemove', onMouseMove, { passive: true });
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove as any);
      document.removeEventListener('mouseenter', onMouseEnter as any);
      document.removeEventListener('mouseleave', onMouseLeave as any);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden
    />
  );
};

export default CustomCursor;
