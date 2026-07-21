import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return time;
}

const pad = (n) => String(n).padStart(2, "0");

export default function LimitedEdition() {
  const sectionRef = useRef(null);
  const countdown = useCountdown("2026-12-31T00:00:00");
  const { t, lang } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".le-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-28 px-4 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/img/3.jpg)",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="le-content relative z-10 max-w-4xl mx-auto text-center">
        <span className={`text-champagne text-sm tracking-[0.2em] uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
          {t('limited.label')}
        </span>

        <h2 className={`text-ivory text-4xl md:text-6xl font-light mt-4 mb-6 ${lang === 'ar' ? 'arabic-text' : ''}`}>
          {t('limited.title')}
        </h2>

        <p className={`text-light-grey text-lg max-w-2xl mx-auto leading-relaxed mb-12 ${lang === 'ar' ? 'arabic-text' : ''}`}>
          {t('limited.desc')}
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-10 mb-12">
          {[
            { label: t('limited.days'), value: countdown.days },
            { label: t('limited.hours'), value: countdown.hours },
            { label: t('limited.minutes'), value: countdown.minutes },
            { label: t('limited.seconds'), value: countdown.seconds },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <span className="text-ivory text-3xl sm:text-4xl md:text-5xl font-light block">
                {pad(value)}
              </span>
              <span className={`text-champagne-dark text-[10px] sm:text-xs md:text-sm uppercase tracking-widest mt-1 block ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className={`inline-block bg-[#d4af37] text-black font-semibold px-8 py-4 rounded-full tracking-wide hover:bg-[#c5a030] transition-colors ${lang === 'ar' ? 'arabic-text' : ''}`}
          >
            {t('limited.cta1')}
          </a>
          <a
            href="#"
            className={`inline-block border border-white text-ivory px-8 py-4 rounded-full tracking-wide hover:bg-white/10 transition-colors ${lang === 'ar' ? 'arabic-text' : ''}`}
          >
            {t('limited.cta2')}
          </a>
        </div>
      </div>
    </section>
  );
}
