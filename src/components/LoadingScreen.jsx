import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to('.loading-screen', {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
              setShow(false);
              onComplete?.();
            }
          });
        }, 1500);
      }
    });

    tl.fromTo('.loading-logo-text', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.loading-line', 
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power2.inOut' },
      '-=0.5'
    )
    .fromTo('.loading-tagline', 
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    );
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="loading-screen fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center">
      <div className="loading-logo-text font-serif text-4xl md:text-6xl tracking-[0.35em] uppercase text-ivory opacity-0">
        Noor Al Lail
      </div>
      <div className="loading-line w-24 h-px bg-champagne mt-6 origin-center" />
      <div className="loading-tagline font-sans text-xs tracking-[0.3em] uppercase text-champagne/70 mt-4 opacity-0">
        Luxury Abayas
      </div>
    </div>
  );
}
