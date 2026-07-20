import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const itemsData = {
  en: [
    {
      title: "Midnight Elegance",
      subtitle: "Spring 2026",
      image: "https://images.unsplash.com/photo-1772474587292-08b3e8932acd?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-5",
      row: "row-span-2",
    },
    {
      title: "Golden Hour",
      subtitle: "Bridal",
      image: "https://images.unsplash.com/photo-1561442748-c50715dc32f6?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-3",
      row: "row-span-1",
    },
    {
      title: "Urban Noir",
      subtitle: "Ready-to-Wear",
      image: "https://images.unsplash.com/photo-1772474569781-2fb1c6539f8c?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-4",
      row: "row-span-1",
    },
    {
      title: "Soft Focus",
      subtitle: "Everyday",
      image: "https://images.unsplash.com/photo-1770964211782-013475eacc3f?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-3",
      row: "row-span-1",
    },
    {
      title: "Velvet Dreams",
      subtitle: "Evening",
      image: "https://images.unsplash.com/photo-1767766277273-a53443ab8639?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-4",
      row: "row-span-1",
    },
  ],
  ar: [
    {
      title: "أناقة منتصف الليل",
      subtitle: "ربيع 2026",
      image: "https://images.unsplash.com/photo-1772474587292-08b3e8932acd?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-5",
      row: "row-span-2",
    },
    {
      title: "الساعة الذهبية",
      subtitle: "عروس",
      image: "https://images.unsplash.com/photo-1561442748-c50715dc32f6?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-3",
      row: "row-span-1",
    },
    {
      title: "الظلام الحضري",
      subtitle: "جاهز للارتداء",
      image: "https://images.unsplash.com/photo-1772474569781-2fb1c6539f8c?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-4",
      row: "row-span-1",
    },
    {
      title: "التركيز الناعم",
      subtitle: "يومي",
      image: "https://images.unsplash.com/photo-1770964211782-013475eacc3f?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-3",
      row: "row-span-1",
    },
    {
      title: "أحلام المخمل",
      subtitle: "مسائي",
      image: "https://images.unsplash.com/photo-1767766277273-a53443ab8639?w=800&q=80&fit=crop",
      col: "col-span-12 md:col-span-4",
      row: "row-span-1",
    },
  ],
};

export default function Lookbook() {
  const sectionRef = useRef(null);
  const { t, lang } = useLanguage();
  const items = itemsData[lang];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".look-label", {
        scrollTrigger: {
          trigger: ".look-label",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".look-title", {
        scrollTrigger: {
          trigger: ".look-title",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
      });

      gsap.from(".look-item", {
        scrollTrigger: {
          trigger: ".look-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      id="lookbook"
      ref={sectionRef}
      className="bg-ivory py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className={`look-label mb-4 font-sans text-sm uppercase tracking-[0.3em] text-champagne ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
            {t('lookbook.label')}
          </p>
          <h2 className={`look-title font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {t('lookbook.title')}
          </h2>
        </div>

        <div className="look-grid grid grid-cols-12 grid-rows-[auto_auto] gap-4 md:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`look-item group relative overflow-hidden rounded-sm ${item.col} ${item.row}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full min-h-[220px] md:min-h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className={`mb-1 font-sans text-xs uppercase tracking-[0.2em] text-champagne ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
                  {item.subtitle}
                </p>
                <h3 className={`font-serif text-2xl text-ivory ${lang === 'ar' ? 'arabic-text' : ''}`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
