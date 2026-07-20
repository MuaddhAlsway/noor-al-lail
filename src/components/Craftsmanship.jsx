import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const stepsData = {
  en: [
    {
      number: "01",
      title: "Design & Vision",
      description: "Every masterpiece begins with a vision. Our designers sketch each silhouette by hand, drawing inspiration from the celestial beauty of the Arabian night and the timeless grace of its women.",
      image: "https://images.unsplash.com/photo-1752702532556-2a0b095f3a98?w=700&q=80&fit=crop",
    },
    {
      number: "02",
      title: "Fabric Selection",
      description: "We source only the finest fabrics — Japanese crepe, Italian chiffon, and hand-woven silks — each chosen for its drape, texture, and ability to move like liquid shadow.",
      image: "https://images.unsplash.com/photo-1773747488280-8a3b36191129?w=700&q=80&fit=crop",
    },
    {
      number: "03",
      title: "Hand Embroidery",
      description: "Our master artisans spend hundreds of hours on each piece, using centuries-old techniques passed down through generations to create intricate patterns that catch the light like scattered stars.",
      image: "https://images.unsplash.com/photo-1775471234117-adff84750dd0?w=700&q=80&fit=crop",
    },
    {
      number: "04",
      title: "Final Finishing",
      description: "The final stage is an intimate process of refinement — every seam is inspected, every detail perfected, ensuring the finished abaya is not merely worn, but experienced.",
      image: "https://images.unsplash.com/photo-1777148783728-510bbeeba075?w=700&q=80&fit=crop",
    },
  ],
  ar: [
    {
      number: "٠١",
      title: "التصميم والرؤية",
      description: "كل تحفة فنية تبدأ برؤية. يرسم مصممونا كل خطوة باليد، مستلهمين من جمال سماء الليل العربية وأناقة نسائها الخالدة.",
      image: "https://images.unsplash.com/photo-1752702532556-2a0b095f3a98?w=700&q=80&fit=crop",
    },
    {
      number: "٠٢",
      title: "اختيار الأقمشة",
      description: "نختار فقط أفخم الأقمشة — الكريب الياباني، والشيفون الإيطالي، والحرير المنسوج يدوياً — كل منها مختار لhängeه وملمسه وقدرته على التحرك كظل سائل.",
      image: "https://images.unsplash.com/photo-1773747488280-8a3b36191129?w=700&q=80&fit=crop",
    },
    {
      number: "٠٣",
      title: "التطريز اليدوي",
      description: "يقضي حرفيونا المهرة مئات الساعات على كل قطعة، مستخدمين تقنيات عمرها قرون تنقل عبر الأجيال لإنشاء أنماط معقدة تلتقط الضوء كالنجوم المنتشرة.",
      image: "https://images.unsplash.com/photo-1775471234117-adff84750dd0?w=700&q=80&fit=crop",
    },
    {
      number: "٠٤",
      title: "الإنهاء النهائي",
      description: "المرحلة الأخيرة عملية تصفية حميمة — كل درز يفحص، كل تفاصيل تُكمَّل، لضمان أن العاءة النهائية لا تُلبس فحسب، بل تُعاش.",
      image: "https://images.unsplash.com/photo-1777148783728-510bbeeba075?w=700&q=80&fit=crop",
    },
  ],
};

export default function Craftsmanship() {
  const sectionRef = useRef(null);
  const { t, lang } = useLanguage();
  const steps = stepsData[lang];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".craft-label", {
        scrollTrigger: {
          trigger: ".craft-label",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".craft-title", {
        scrollTrigger: {
          trigger: ".craft-title",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
      });

      gsap.from(".craft-subtitle", {
        scrollTrigger: {
          trigger: ".craft-subtitle",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.25,
      });

      gsap.utils.toArray(".craft-step").forEach((step, i) => {
        const content = step.querySelector(".craft-content");
        const visual = step.querySelector(".craft-visual");
        const dot = step.querySelector(".craft-dot");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          },
        });

        tl.from(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
        })
          .from(
            content,
            {
              x: i % 2 === 0 ? -50 : 50,
              opacity: 0,
              duration: 0.7,
            },
            "-=0.2"
          )
          .from(
            visual,
            {
              x: i % 2 === 0 ? 50 : -50,
              opacity: 0,
              duration: 0.7,
            },
            "-=0.5"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      id="craftsmanship"
      ref={sectionRef}
      className="bg-black py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 md:mb-20 text-center">
          <p className={`craft-label mb-4 font-sans text-sm uppercase tracking-[0.3em] text-champagne ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
            {t('craftsmanship.label')}
          </p>
          <h2 className={`craft-title font-serif text-4xl md:text-5xl lg:text-6xl text-ivory ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {t('craftsmanship.title')}
          </h2>
          <p className={`craft-subtitle mx-auto mt-4 max-w-2xl font-sans text-sm md:text-base text-med-grey ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {t('craftsmanship.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="craft-step group relative overflow-hidden rounded-sm"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-[280px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="text-champagne font-serif text-3xl md:text-4xl font-light">
                  {step.number}
                </span>
                <h3 className={`font-serif text-xl md:text-2xl text-ivory mt-1 ${lang === 'ar' ? 'arabic-text' : ''}`}>
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
