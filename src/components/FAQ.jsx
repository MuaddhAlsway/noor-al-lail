import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

const faqsData = {
  en: [
    {
      q: "What makes Noor Al Lail abayas different?",
      a: "Each piece is handcrafted by master artisans using the finest fabrics sourced from around the world. We blend centuries-old Arabian artistry with contemporary luxury design, ensuring every abaya is a unique expression of elegance.",
    },
    {
      q: "How do I find my perfect size?",
      a: "We provide a detailed size guide on every product page. For a truly custom fit, we also offer virtual consultations where our stylists take your measurements and recommend the perfect size or arrange a made-to-order piece.",
    },
    {
      q: "Do you work with clients internationally?",
      a: "Absolutely. We ship worldwide and have served clients across the Middle East, Europe, North America, and Asia. Our team ensures a seamless experience from consultation to delivery, wherever you are.",
    },
    {
      q: "Can I customize or personalize my abaya?",
      a: "Yes. We offer bespoke monogramming, custom embroidery, and personalized design consultations. Our artisans will work with you to create a one-of-a-kind piece tailored to your vision.",
    },
    {
      q: "What is your quality promise?",
      a: "Every Noor Al Lail piece comes with our quality guarantee. If you are not completely satisfied, we offer complimentary alterations or a full refund within 14 days of receipt. Your satisfaction is our legacy.",
    },
  ],
  ar: [
    {
      q: "ما الذي يميز عباءات نور الليل؟",
      a: "كل قطعة مصنوعة يدوياً من قبل حرفيين مهرة باستخدام أفخم الأقمشة المختارة من جميع أنحاء العالم. نجمع بين الفن العربي عابر القرون والأناقة الفاخرة المعاصرة.",
    },
    {
      q: "كيف أجد المقاس المثالي لي؟",
      a: "نقدم دليلاً مفصلاً للمقاسات في كل صفحة منتج. للحصول على مقاس مخصص، نقدم أيضاً استشارات افتراضية يقوم فيها مصممونا بأخذ مقاساتك والوصية بالمقاس المثالي.",
    },
    {
      q: "هل تعملون مع العملاء دولياً؟",
      a: "بالتأكيد. نشحن إلى جميع أنحاء العالم وقد خدم عملاء في الشرق الأوسط وأوروبا وأمريكا الشمالية وأسيا. فريقنا يضمن تجربة سلسة من الاستشارة إلى التوصيل.",
    },
    {
      q: "هل يمكنني تخصيص عبائتي؟",
      a: "نعم. نقدم نقش مخصص وتطريز حسب الطلب واستشارات تصميم شخصية. حرفيونا سيعملون معك لإنشاء قطعة فريدة من نوعها مصممة وفقاً لرؤيتك.",
    },
    {
      q: "ما هو وعدكم بالجودة؟",
      a: "كل قطعة من نور الليل تأتي مع ضمان الجودة. إذا لم تكن راضياً تماماً، نقدم تعديلاً مجانياً أو استرداداً كاملاً خلال 14 يوماً من الاستلام. رضاك هو إرثنا.",
    },
  ],
};

export default function FAQ() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const { t, lang } = useLanguage();
  const faqs = faqsData[lang];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-col", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [lang]);

  return (
    <section id="contact" ref={sectionRef} className="bg-warm-white py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className={`text-champagne-dark text-sm tracking-[0.2em] uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
            {t('faq.label')}
          </span>
          <h2 className={`text-black text-4xl md:text-5xl font-light mt-2 ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {t('faq.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Accordion */}
          <div className="faq-col space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black/10 pb-3">
                <button
                  onClick={() => toggle(i)}
                  className={`flex items-center justify-between w-full text-left py-3 text-black font-medium text-lg ${lang === 'ar' ? 'arabic-text text-right' : ''}`}
                >
                  <span>{faq.q}</span>
                  <span className={`text-champagne-dark text-xl ml-4 shrink-0 ${lang === 'ar' ? 'ml-0 mr-4' : ''}`}>
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === i ? "300px" : "0",
                  }}
                >
                  <p className={`text-med-grey pb-3 leading-relaxed ${lang === 'ar' ? 'arabic-text' : ''}`}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Contact info */}
          <div className="faq-col bg-beige-light rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <div className="w-14 h-14 bg-beige rounded-full flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-champagne-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>

            <h3 className={`text-black text-2xl font-light mb-3 ${lang === 'ar' ? 'arabic-text' : ''}`}>
              {t('faq.contactTitle')}
            </h3>
            <p className={`text-med-grey leading-relaxed mb-8 ${lang === 'ar' ? 'arabic-text' : ''}`}>
              {t('faq.contactDesc')}
            </p>

            <a
              href="#"
              className={`inline-block self-start bg-[#d4af37] text-black font-semibold px-8 py-3 rounded-full tracking-wide hover:bg-[#c5a030] transition-colors mb-8 ${lang === 'ar' ? 'arabic-text self-end' : ''}`}
            >
              {t('faq.contactCta')}
            </a>

            <div className="space-y-3 text-sm text-med-grey">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-champagne-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-champagne-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@noorallail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
