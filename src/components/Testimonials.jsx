import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

const testimonialsData = {
  en: [
    {
      quote: "The Midnight Noir Abaya is unlike anything I've ever worn. The fabric drapes like liquid silk, and the embroidery is a work of art. I received endless compliments at my sister's wedding. Noor Al Lail has redefined luxury for me.",
      author: "Fatima Al-Rashid",
      location: "Dubai, UAE",
    },
  ],
  ar: [
    {
      quote: "عباءة منتصف الليل استثنائية unlike anything I've ever worn. القماش يتدفق كالحرير السائل، والتطريز عمل فني. تلقيت مجاملات لانتها في حفل زفاف أختي. نور الليل أعاد تعريف الفخامة بالنسبة لي.",
      author: "فاطمة الراشد",
      location: "دبي، الإمارات",
    },
  ],
};

export default function Testimonials() {
  const sectionRef = useRef(null);
  const { t, lang } = useLanguage();
  const testimonials = testimonialsData[lang];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [lang]);

  return (
    <section ref={sectionRef} className="bg-black py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className={`text-champagne text-sm tracking-[0.2em] uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
          {t('testimonials.label')}
        </span>
        <h2 className={`text-ivory text-4xl md:text-5xl font-light mt-3 mb-16 ${lang === 'ar' ? 'arabic-text' : ''}`}>
          {t('testimonials.title')}
        </h2>

        <div className="testimonial-card max-w-2xl mx-auto">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6"
                fill="#d4af37"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
            ))}
          </div>

          <blockquote className={`text-light-grey text-lg md:text-xl leading-relaxed italic mb-8 ${lang === 'ar' ? 'arabic-text' : ''}`}>
            &ldquo;{testimonials[0].quote}&rdquo;
          </blockquote>

          <p className={`text-ivory font-semibold text-lg ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {testimonials[0].author}
          </p>
          <p className={`text-med-grey text-sm ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {testimonials[0].location}
          </p>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            <span className="w-2.5 h-2.5 rounded-full bg-ivory" />
            <span className="w-2.5 h-2.5 rounded-full bg-med-grey" />
            <span className="w-2.5 h-2.5 rounded-full bg-med-grey" />
            <span className="w-2.5 h-2.5 rounded-full bg-med-grey" />
          </div>
        </div>
      </div>
    </section>
  );
}
