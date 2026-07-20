import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export default function FeaturedPieces() {
  const cardsRef = useRef([]);
  const { t, lang } = useLanguage();

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, [lang]);

  const productNames = {
    ar: {
      'The Midnight Noir Abaya': 'عباءة منتصف الليل',
      'The Golden Grace Abaya': 'عباءة النعمة الذهبية',
      'The Velvet Dusk Abaya': 'عباءة الشفق المخملي',
      'The Ivory Whisper Abaya': 'عباءة همس العاج',
      'The Celestial Pearl Abaya': 'عباءة اللؤلؤ السماوي',
      'The Desert Rose Abaya': 'عباءة ورد الصحراء',
    },
    collectionNames: {
      ar: {
        'Signature Collection': 'المجموعة المميزة',
        'Bridal Collection': 'مجموعة العروس',
        'Evening Collection': 'مجموعة المساء',
        'Everyday Collection': 'المجموعة اليومية',
        'Luxury Collection': 'المجموعة الفاخرة',
        'Limited Edition': 'إصدار محدود',
      }
    }
  };

  const badges = {
    ar: {
      'Best Seller': 'الأكثر مبيعاً',
      'New': 'جديد',
      'Exclusive': 'حصري',
      'Limited': 'محدود',
    }
  };

  return (
    <section id="bestsellers" className="bg-ivory py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className={`text-muted-foreground font-sans tracking-[0.25em] text-sm uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
          {t('featured.label')}
        </span>
        <div className="mx-auto my-3 h-px w-12 bg-black" />
        <h2 className={`font-serif text-black text-4xl md:text-5xl mb-16 ${lang === 'ar' ? 'arabic-text' : ''}`}>
          {t('featured.title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {products.map((product, i) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group text-left"
            >
              <div className="aspect-[3/4] overflow-hidden bg-soft-white mb-4 rounded-sm relative luxury-shine">
                <img
                  src={product.images[0]}
                  alt={lang === 'ar' ? productNames.ar[product.name] || product.name : product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <div className={`absolute top-4 left-4 bg-champagne text-black text-[10px] font-sans tracking-wider uppercase px-3 py-1 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
                    {lang === 'ar' ? badges.ar[product.badge] || product.badge : product.badge}
                  </div>
                )}
              </div>
              <span className={`text-champagne-dark font-sans text-xs tracking-[0.2em] uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
                {lang === 'ar' ? productNames.collectionNames.ar[product.collection] || product.collection : product.collection}
              </span>
              <span className={`font-serif text-black text-lg mt-1 ${lang === 'ar' ? 'arabic-text' : ''}`}>
                {lang === 'ar' ? productNames.ar[product.name] || product.name : product.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
