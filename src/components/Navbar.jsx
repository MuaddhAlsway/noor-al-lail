import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { label: t('nav.collection'), href: '/#collections' },
    { label: t('nav.about'), href: '/#brand-story' },
    { label: t('nav.lookbook'), href: '/#lookbook' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-champagne text-black py-2 text-center">
        <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase arabic-text">
          {t('announcement')}
        </p>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${scrolled ? 'glass-dark py-4 shadow-[0_1px_0_rgba(161,98,7,.15)]' : 'py-6'}`}>
        <div className="max-w-[1440px] mx-auto px-6 relative flex items-center justify-between">
          {/* Left - Logo + Mobile Menu */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            <button onClick={() => setMobileOpen(true)} className="lg:hidden text-ivory cursor-pointer" aria-label="Open menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
            <Link to="/" className="text-center">
              <div className={`font-serif text-[1.1rem] md:text-[1.4rem] lg:text-[1.777rem] font-normal tracking-[.2em] md:tracking-[.35em] uppercase text-ivory leading-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'ar' ? 'نور الليل' : 'Noor Al Lail'}
              </div>
              <div className="text-[.45rem] md:text-[.5rem] lg:text-[.55rem] tracking-[.2em] md:tracking-[.35em] uppercase text-champagne mt-0.5 arabic-text">
                {lang === 'ar' ? 'عباءات فاخرة' : 'Luxury Abayas'}
              </div>
            </Link>
          </div>
          
          {/* Center - Nav Links */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-10">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-[.694rem] font-normal tracking-[.2em] uppercase text-ivory relative py-2 hover:text-champagne-light transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-[width] after:duration-400 hover:after:w-full arabic-text">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right */}
          <div className="flex items-center gap-6 shrink-0">
            <button 
              onClick={toggleLang} 
              className="text-[.694rem] font-normal tracking-[.1em] uppercase text-ivory hover:text-champagne-light transition-colors border border-white/20 px-3 py-1 rounded-sm"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <a href="/#contact" className="text-[.694rem] font-normal tracking-[.2em] uppercase text-ivory hover:text-champagne-light transition-colors hidden lg:block arabic-text">{t('nav.contact')}</a>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 z-[10000] glass-dark transition-all duration-500 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button onClick={() => setMobileOpen(false)} className="absolute top-5 right-5 text-ivory cursor-pointer z-10" aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-5">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="font-serif text-lg sm:text-xl text-ivory hover:text-champagne transition-colors arabic-text">{l.label}</a>
          ))}
          <div className="w-8 h-px bg-champagne/40 my-1" />
          <a href="/#craftsmanship" onClick={() => setMobileOpen(false)} className="font-serif text-lg sm:text-xl text-ivory hover:text-champagne transition-colors arabic-text">{t('craftsmanship.title')}</a>
          <a href="/#faq" onClick={() => setMobileOpen(false)} className="font-serif text-lg sm:text-xl text-ivory hover:text-champagne transition-colors arabic-text">{t('faq.title')}</a>
          <a href="/#contact" onClick={() => setMobileOpen(false)} className="font-serif text-lg sm:text-xl text-ivory hover:text-champagne transition-colors arabic-text">{t('nav.contact')}</a>
          <button 
            onClick={toggleLang} 
            className="text-xs text-champagne border border-champagne/50 px-5 py-1.5 rounded-sm mt-2"
          >
            {lang === 'en' ? 'عربي' : 'English'}
          </button>
        </div>
      </div>
    </>
  );
}
