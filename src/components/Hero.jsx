import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Main animation timeline
    tl.fromTo(
      '.hero-title-line',
      { opacity: 0, y: 60, rotateX: -20 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.2 }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(
      scrollRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [lang]);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center w-full overflow-hidden bg-black"
      style={{
        height: "100vh",
        height: "100dvh",
        minHeight: "600px",
        maxHeight: "1000px",
      }}
    >
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1750190321721-422ce93c152d?w=1920&q=85&fit=crop&crop=center')",
          transform: "scale(1.1)"
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-5 sm:px-6 text-center max-w-4xl mx-auto" style={{ perspective: "1000px" }}>
        {/* Title with Split Text Animation */}
        <h1
          ref={titleRef}
          className="font-serif text-ivory leading-[1.1] mb-6 sm:mb-8"
          style={{ fontSize: "clamp(2rem, 7vw, 6rem)" }}
        >
          <span className={`hero-title-line block opacity-0 ${lang === 'ar' ? 'arabic-text' : ''}`} style={{ transformOrigin: "center bottom" }}>
            {t('hero.title1')}
          </span>
          <span className={`hero-title-line block opacity-0 ${lang === 'ar' ? 'arabic-text' : ''}`} style={{ transformOrigin: "center bottom" }}>
            {t('hero.title2')}{" "}
            <em className="italic text-champagne">{t('hero.titleHighlight')}</em>
          </span>
        </h1>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 opacity-0 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#collections"
            className={`btn-luxury group inline-flex items-center justify-center gap-3 bg-ivory text-black font-sans text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:bg-champagne hover:text-black w-full sm:w-auto ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}
          >
            {t('hero.cta1')}
            <svg
              className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="#lookbook"
            className={`btn-luxury inline-flex items-center justify-center gap-2 border border-white/40 text-ivory font-sans text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:border-champagne hover:text-champagne w-full sm:w-auto ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}
          >
            {t('hero.cta2')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 opacity-0"
      >
        <span className={`font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-ivory/50 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
          {lang === 'ar' ? 'اسحب للأسفل' : 'Scroll'}
        </span>
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 text-ivory/50 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
