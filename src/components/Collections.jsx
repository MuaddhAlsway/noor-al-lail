import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { collections } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export default function Collections() {
  const cardsRef = useRef([]);
  const { t, lang } = useLanguage();

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
    );
  }, [lang]);

  const collectionNames = {
    ar: {
      'Eid Collection': 'مجموعة العيد',
      'Everyday Collection': 'المجموعة اليومية',
      'Evening Collection': 'مجموعة المساء',
      'Wedding Collection': 'مجموعة الأفراح',
      'Luxury Collection': 'المجموعة الفاخرة',
      'Limited Edition': 'إصدار محدود',
    }
  };

  return (
    <section id="collections" className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className={`text-champagne-light font-sans tracking-[0.25em] text-sm uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
          {t('collections.label')}
        </span>
        <div className="mx-auto my-3 h-px w-12 bg-champagne" />
        <h2 className={`font-serif text-ivory text-4xl md:text-5xl mb-16 ${lang === 'ar' ? 'arabic-text' : ''}`}>
          {t('collections.title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              to={`/product/${col.productId}`}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group glass-card rounded-sm overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden luxury-shine">
                <img
                  src={col.image}
                  alt={lang === 'ar' ? collectionNames.ar[col.name] || col.name : col.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-left">
                <span className={`text-champagne-light font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
                  {lang === 'ar' ? 
                    (col.label === 'Celebration' ? 'احتفال' : 
                     col.label === 'Essentials' ? 'أساسي' :
                     col.label === 'Formal' ? 'رسمي' :
                     col.label === 'Bridal' ? 'عروس' :
                     col.label === 'Premium' ? 'ممتاز' :
                     col.label === 'Exclusive' ? 'حصري' : col.label) 
                    : col.label}
                </span>
                <h3 className={`font-serif text-ivory text-xs md:text-sm lg:text-base mt-1 ${lang === 'ar' ? 'arabic-text' : ''}`}>
                  {lang === 'ar' ? collectionNames.ar[col.name] || col.name : col.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
