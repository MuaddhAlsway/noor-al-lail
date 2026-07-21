import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';

const sizes = [
  { size: 'XS', us: '0-2', bust: '31-32', waist: '24-25', hips: '34-35' },
  { size: 'S', us: '4-6', bust: '33-34', waist: '26-27', hips: '36-37' },
  { size: 'M', us: '8-10', bust: '35-36', waist: '28-29', hips: '38-39' },
  { size: 'L', us: '12-14', bust: '37-39', waist: '30-32', hips: '40-42' },
  { size: 'XL', us: '16-18', bust: '40-42', waist: '33-35', hips: '43-45' },
  { size: 'XXL', us: '20-22', bust: '43-45', waist: '36-38', hips: '46-48' },
];

const sizesAr = [
  { size: 'XS', us: '0-2', bust: '79-81', waist: '61-64', hips: '86-89' },
  { size: 'S', us: '4-6', bust: '84-86', waist: '66-69', hips: '91-94' },
  { size: 'M', us: '8-10', bust: '89-91', waist: '71-74', hips: '97-99' },
  { size: 'L', us: '12-14', bust: '94-99', waist: '76-81', hips: '102-107' },
  { size: 'XL', us: '16-18', bust: '102-107', waist: '84-89', hips: '109-114' },
  { size: 'XXL', us: '20-22', bust: '109-114', waist: '91-97', hips: '117-122' },
];

const howToMeasure = {
  en: [
    { label: 'Bust', desc: 'Measure around the fullest part of your chest, keeping the tape level.' },
    { label: 'Waist', desc: 'Measure around your natural waistline, the narrowest part of your torso.' },
    { label: 'Hips', desc: 'Measure around the fullest part of your hips and buttocks.' },
  ],
  ar: [
    { label: 'الصدر', desc: 'قيس حول أكمل جزء من صدرك، مع إبقاء الشريط أفقياً.' },
    { label: 'الخصر', desc: 'قيس حول خط خصرك الطبيعي، أضيق جزء من جذعك.' },
    { label: 'الأرداف', desc: 'قيس حول أكمل جزء من أردافك ومؤخرتك.' },
  ],
};

export default function SizeGuide() {
  const { lang } = useLanguage();
  const tableSizes = lang === 'ar' ? sizesAr : sizes;
  const measures = howToMeasure[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from('.sg-content', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.2 });
    gsap.from('.sg-table', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.4 });
  }, [lang]);

  return (
    <div className="bg-soft-white min-h-screen">
      <Navbar />

      <div className="pt-28 pb-4 max-w-[1440px] mx-auto px-6">
        <div className={`flex items-center gap-2 text-xs tracking-[.1em] uppercase text-med-grey ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
          <Link to="/" className="hover:text-champagne transition-colors">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link>
          <span>/</span>
          <span className="text-black">{lang === 'ar' ? 'دليل المقاسات' : 'Size Guide'}</span>
        </div>
      </div>

      <section className="max-w-[1440px] mx-auto px-6 pb-20">
        <div className="sg-content max-w-3xl mx-auto text-center mb-12">
          <span className={`text-champagne-dark font-sans tracking-[0.25em] text-sm uppercase ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
            {lang === 'ar' ? 'دليل المقاسات' : 'Size Guide'}
          </span>
          <div className="mx-auto my-3 h-px w-12 bg-black" />
          <h1 className={`font-serif text-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {lang === 'ar' ? 'اعثر على مقاسك المثالي' : 'Find Your Perfect Fit'}
          </h1>
          <p className={`text-med-grey leading-relaxed ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {lang === 'ar'
              ? 'تم تصميم عباءاتنا لتكون مريحة وأنيقة. استخدم الدليل أدناه لاختيار المقاس المناسب لك.'
              : 'Our abayas are designed for comfort and elegance. Use the guide below to find your ideal size.'}
          </p>
        </div>

        <div className="sg-table max-w-4xl mx-auto mb-16">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-beige">
                  {[
                    lang === 'ar' ? 'المقاس' : 'Size',
                    'US',
                    lang === 'ar' ? 'الصدر (سم)' : 'Bust (in)',
                    lang === 'ar' ? 'الخصر (سم)' : 'Waist (in)',
                    lang === 'ar' ? 'الأرداف (سم)' : 'Hips (in)',
                  ].map((h, i) => (
                    <th key={i} className={`py-4 px-4 text-left font-sans text-xs tracking-[.15em] uppercase text-black ${lang === 'ar' ? 'arabic-text tracking-normal text-right' : ''}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableSizes.map((row, i) => (
                  <tr key={i} className={`border-b border-beige/50 ${i % 2 === 0 ? 'bg-beige/10' : ''}`}>
                    <td className="py-4 px-4 font-serif text-lg text-black">{row.size}</td>
                    <td className="py-4 px-4 text-med-grey">{row.us}</td>
                    <td className="py-4 px-4 text-med-grey">{row.bust}</td>
                    <td className="py-4 px-4 text-med-grey">{row.waist}</td>
                    <td className="py-4 px-4 text-med-grey">{row.hips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="sg-table max-w-3xl mx-auto mb-16">
          <h2 className={`font-serif text-2xl md:text-3xl text-black text-center mb-8 ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {lang === 'ar' ? 'كيف تقيس' : 'How to Measure'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {measures.map((m, i) => (
              <div key={i} className="text-center p-6 bg-beige/10 rounded-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-champagne flex items-center justify-center">
                  <span className="font-serif text-2xl text-champagne">{i + 1}</span>
                </div>
                <h3 className={`font-serif text-lg text-black mb-2 ${lang === 'ar' ? 'arabic-text' : ''}`}>{m.label}</h3>
                <p className={`text-sm text-med-grey ${lang === 'ar' ? 'arabic-text' : ''}`}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sg-content max-w-2xl mx-auto text-center">
          <div className="p-8 bg-beige/10 rounded-sm">
            <h3 className={`font-serif text-xl text-black mb-3 ${lang === 'ar' ? 'arabic-text' : ''}`}>
              {lang === 'ar' ? 'هل أنت بين المقاسات؟' : 'Between Sizes?'}
            </h3>
            <p className={`text-med-grey text-sm leading-relaxed ${lang === 'ar' ? 'arabic-text' : ''}`}>
              {lang === 'ar'
                ? 'عباءاتنا مصممة بقصة مريحة وفضفاضة. إذا كنت بين مقاسين، ننصح باختيار المقاس الأكبر للحصول على مظهر أنيق ومريح.'
                : 'Our abayas feature a relaxed, flowing silhouette. If you\'re between sizes, we recommend sizing up for a graceful, comfortable drape.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
