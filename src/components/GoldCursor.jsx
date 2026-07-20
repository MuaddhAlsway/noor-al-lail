import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GoldCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.3 });
    };

    const handleLinkEnter = () => {
      gsap.to(cursor, { scale: 1.5, borderColor: 'rgba(161, 98, 7, 0.8)', duration: 0.3 });
    };

    const handleLinkLeave = () => {
      gsap.to(cursor, { scale: 1, borderColor: 'rgba(161, 98, 7, 0.4)', duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkEnter);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkEnter);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-champagne/40 rounded-full pointer-events-none z-[99999] mix-blend-difference hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-champagne rounded-full pointer-events-none z-[99999] hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}
