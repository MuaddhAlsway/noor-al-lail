import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();

  const collections = {
    en: ['The Midnight Garden', 'Golden Soirée', 'The Velvet Moon', 'Lumière', 'Bespoke'],
    ar: ['حديقة منتصف الليل', 'سهرة ذهبية', 'القمر المخملي', 'لومير', 'حسب الطلب'],
  };

  const aboutLinks = {
    en: ['Our Story', 'Craftsmanship', 'Sustainability', 'Careers', 'Press'],
    ar: ['قصتنا', 'الحِرَف', 'الاستدامة', 'الوظائف', 'الصحافة'],
  };

  const helpLinks = {
    en: ['Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'],
    ar: ['دليل المقاسات', 'تعليمات العناية', 'الأسئلة الشائعة', 'اتصل بنا'],
  };

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block text-left">
              <div className={`font-serif text-[1.777rem] font-normal tracking-[.35em] uppercase text-ivory ${lang === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                {lang === 'ar' ? 'نور الليل' : 'Noor Al Lail'}
              </div>
              <div className={`text-[.55rem] tracking-[.35em] uppercase text-champagne mt-0.5 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
                {lang === 'ar' ? 'عباءات فاخرة' : 'Luxury Abayas'}
              </div>
            </Link>
            <p className={`text-sm font-light leading-relaxed text-med-grey mt-6 max-w-sm ${lang === 'ar' ? 'arabic-text' : ''}`}>
              {t('footer.desc')}
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok', 'YouTube'].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs text-ivory hover:border-champagne hover:text-champagne transition-all" aria-label={s}>{s[0]}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className={`text-xs tracking-[.15em] uppercase text-champagne-dark mb-6 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
              {t('footer.collections')}
            </h4>
            <ul className="space-y-3">
              {collections[lang].map(l => (
                <li key={l}><a href="#" className={`text-sm font-light text-light-grey hover:text-champagne transition-colors ${lang === 'ar' ? 'arabic-text' : ''}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`text-xs tracking-[.15em] uppercase text-champagne-dark mb-6 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
              {t('footer.about')}
            </h4>
            <ul className="space-y-3">
              {aboutLinks[lang].map(l => (
                <li key={l}><a href="#" className={`text-sm font-light text-light-grey hover:text-champagne transition-colors ${lang === 'ar' ? 'arabic-text' : ''}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`text-xs tracking-[.15em] uppercase text-champagne-dark mb-6 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
              {t('footer.help')}
            </h4>
            <ul className="space-y-3">
              {helpLinks[lang].map(l => (
                <li key={l}><a href="#" className={`text-sm font-light text-light-grey hover:text-champagne transition-colors ${lang === 'ar' ? 'arabic-text' : ''}`}>{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className={`text-xs text-med-grey ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
