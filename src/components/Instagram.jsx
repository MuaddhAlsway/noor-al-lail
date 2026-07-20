import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

const images = [
  "https://images.unsplash.com/photo-1772474569781-2fb1c6539f8c?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1561442748-c50715dc32f6?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1772474528936-4f1187eb1611?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1770964211782-013475eacc3f?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1772474587292-08b3e8932acd?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1752702532556-2a0b095f3a98?w=400&q=80&fit=crop",
];

export default function Instagram() {
  const sectionRef = useRef(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".insta-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".insta-item", {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [lang]);

  return (
    <section id="instagram" ref={sectionRef} className="bg-charcoal py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="insta-header flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className={`text-champagne text-sm tracking-[0.2em] uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
              {t('instagram.label')}
            </span>
            <h2 className={`text-ivory text-4xl md:text-5xl font-light mt-2 ${lang === 'ar' ? 'arabic-text' : ''}`}>
              {t('instagram.title')}
            </h2>
          </div>
          <a
            href="https://instagram.com/noorallail"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-champagne hover:text-ivory transition-colors mt-4 md:mt-0 ${lang === 'ar' ? 'arabic-text' : ''}`}
          >
            {t('instagram.cta')}
            <svg className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {images.map((src, i) => (
            <div key={i} className="insta-item relative group aspect-square overflow-hidden">
              <img
                src={src}
                alt={`Noor Al Lail Instagram ${i + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-ivory" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
