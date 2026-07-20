import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

const values = {
  en: [
    {
      title: 'Authenticity',
      desc: 'Every stitch tells a story rooted in heritage',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <path d="M20 4L25 14L36 16L28 24L30 36L20 30L10 36L12 24L4 16L15 14L20 4Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Timelessness',
      desc: 'Designs that transcend fleeting trends',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" />
          <path d="M20 8V20L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Craftsmanship',
      desc: 'Meticulous hand-finishing by master artisans',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <path d="M10 30L16 10L24 10L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 30H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 14L20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 14L20 22L24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      desc: 'Modern techniques meet time-honored traditions',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <path d="M20 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 30V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 20H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 20H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ],
  ar: [
    {
      title: 'الأصالة',
      desc: 'كل غرزة تروي قصة متجذرة في التراث',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <path d="M20 4L25 14L36 16L28 24L30 36L20 30L10 36L12 24L4 16L15 14L20 4Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'الخلود',
      desc: 'تصاميم تتجاوز صيحات العابرين',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" />
          <path d="M20 8V20L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'الحِرَف',
      desc: 'إنهاء يدوي دقيق من حرفيين مهرة',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <path d="M10 30L16 10L24 10L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 30H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 14L20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 14L20 22L24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'الابتكار',
      desc: 'تقنيات حديثة تلتقي بالتقليد',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <path d="M20 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 30V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 20H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 20H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ],
};

export default function BrandStory() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    gsap.fromTo(leftRef.current, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
    gsap.fromTo(rightRef.current, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
  }, [lang]);

  return (
    <section id="brand-story" className="bg-warm-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — Image */}
          <div ref={leftRef} className="relative">
            <div className="relative overflow-hidden rounded-sm img-luxury">
              <img
                src="https://images.unsplash.com/photo-1752702532556-2a0b095f3a98?w=900&q=80&fit=crop"
                alt="Heritage craftsmanship"
                className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-champagne rounded-sm pointer-events-none hidden md:block" />
            <div className={`absolute bottom-6 -right-5 bg-black text-ivory px-5 py-3 rounded-sm font-serif text-lg tracking-wider shadow-lg ${lang === 'ar' ? 'arabic-text -right-auto -left-5' : ''}`}>
              {lang === 'ar' ? '2016 تأسست' : '2016 Est.'}
            </div>
          </div>

          {/* Right — Content */}
          <div ref={rightRef} className="flex flex-col justify-center">
            <span className={`text-champagne-dark font-sans tracking-[0.25em] text-sm uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
              {t('brandStory.label')}
            </span>
            <div className="my-3 h-px w-12 bg-black" />
            <h2 className={`font-serif text-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 ${lang === 'ar' ? 'arabic-text' : ''}`}>
              {t('brandStory.title')}
            </h2>

            <div className={`text-med-grey font-sans leading-relaxed mb-6 ${lang === 'ar' ? 'arabic-text' : ''}`}>
              <p>{t('brandStory.p1')}</p>
            </div>

            <blockquote className={`border-l-2 border-champagne pl-6 font-serif text-black text-xl md:text-2xl italic leading-relaxed ${lang === 'ar' ? 'arabic-text border-l-0 border-r-2 pr-6 pl-0 text-right' : ''}`}>
              {t('brandStory.quote')}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
