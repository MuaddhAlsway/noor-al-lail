import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import gsap from 'gsap';

const productNamesAr = {
  'The Midnight Noir Abaya': 'عباءة منتصف الليل',
  'The Golden Grace Abaya': 'عباءة النعمة الذهبية',
  'The Velvet Dusk Abaya': 'عباءة الشفق المخملي',
  'The Ivory Whisper Abaya': 'عباءة همس العاج',
  'The Celestial Pearl Abaya': 'عباءة اللؤلؤ السماوي',
  'The Desert Rose Abaya': 'عباءة ورد الصحراء',
};

const collectionNamesAr = {
  'Signature Collection': 'المجموعة المميزة',
  'Bridal Collection': 'مجموعة العروس',
  'Evening Collection': 'مجموعة المساء',
  'Everyday Collection': 'المجموعة اليومية',
  'Luxury Collection': 'المجموعة الفاخرة',
  'Limited Edition': 'إصدار محدود',
};

const colorNamesAr = {
  'Noir': 'أسود',
  'Midnight Blue': 'أزرق منتصف الليل',
  'Plum': 'برقوقي',
  'Champagne Gold': 'ذهبي شمبانيا',
  'Ivory': 'عاجي',
  'Dusk Brown': 'بني الشفق',
  'Mocha': 'موكا',
  'Beige': 'بيج',
  'Pearl White': 'أبيض لؤلؤي',
  'Blush': 'وردي فاتح',
  'Desert Rose': 'ورد الصحراء',
  'Sand': 'رملي',
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('details');
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!product) return;
    gsap.fromTo('.product-gallery', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
    gsap.fromTo('.product-info', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 });
  }, [product]);

  if (!product) {
    return (
      <div className="bg-soft-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className={`font-serif text-4xl text-black mb-4 ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {lang === 'ar' ? 'المنتج غير موجود' : 'Product Not Found'}
          </h1>
          <Link to="/" className="text-champagne underline">{lang === 'ar' ? 'العودة للرئيسية' : 'Return Home'}</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);
  const productName = lang === 'ar' ? productNamesAr[product.name] || product.name : product.name;
  const collectionName = lang === 'ar' ? collectionNamesAr[product.collection] || product.collection : product.collection;

  return (
    <div className="bg-soft-white min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 max-w-[1440px] mx-auto px-6">
        <div className={`flex items-center gap-2 text-xs tracking-[.1em] uppercase text-med-grey ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
          <Link to="/" className="hover:text-champagne transition-colors">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link>
          <span>/</span>
          <span className="text-black">{productName}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="max-w-[1440px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="product-gallery">
            <div className="relative aspect-[3/4] overflow-hidden bg-beige-light mb-4">
              <img
                src={product.images[activeImage]}
                alt={productName}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {product.badge && (
                <div className={`absolute top-4 left-4 bg-black text-ivory text-[.694rem] tracking-[.15em] uppercase px-4 py-2 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
                  {product.badge}
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[3/4] overflow-hidden cursor-pointer transition-all duration-300 ${activeImage === i ? 'ring-2 ring-champagne' : 'opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="product-info lg:py-4">
            <div className={`text-[.694rem] tracking-[.35em] uppercase text-champagne mb-3 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
              {collectionName}
            </div>
            <h1 className={`font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight text-black mb-4 ${lang === 'ar' ? 'arabic-text' : ''}`}>
              {productName}
            </h1>
            
            <div className="w-16 h-px bg-gradient-to-r from-champagne to-champagne-light mb-6" />
            
            <div className="mb-6">
              <span className="font-serif text-3xl text-black">${product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <span className="ml-3 text-lg text-med-grey line-through">${product.oldPrice.toLocaleString()}</span>
              )}
            </div>

            <p className={`text-med-grey leading-relaxed mb-8 ${lang === 'ar' ? 'arabic-text' : ''}`}>
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-8">
              <div className={`text-xs tracking-[.15em] uppercase text-black mb-3 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
                {lang === 'ar' ? 'الألوان المتاحة' : 'Available Colors'}
              </div>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full border border-beige"
                      style={{ background: color.hex }}
                    />
                    <span className={`text-[10px] text-med-grey ${lang === 'ar' ? 'arabic-text' : ''}`}>
                      {lang === 'ar' ? colorNamesAr[color.name] || color.name : color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/#contact"
                className={`btn-luxury flex-1 bg-black text-ivory py-4 px-8 text-xs tracking-[.2em] uppercase hover:bg-charcoal transition-all duration-400 text-center ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}
              >
                {lang === 'ar' ? 'اسأل عن هذا' : 'Ask About This'}
              </a>
              <a
                href="/#contact"
                className={`flex-1 border border-black text-black py-4 px-8 text-xs tracking-[.2em] uppercase hover:bg-black hover:text-ivory transition-all duration-400 text-center ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}
              >
                {lang === 'ar' ? 'احجز زيارة' : 'Schedule a Visit'}
              </a>
            </div>

            {/* Accordion Tabs */}
            <div className="border-t border-beige">
              {[
                { key: 'details', label: lang === 'ar' ? 'تفاصيل المنتج' : 'Product Details' },
                { key: 'care', label: lang === 'ar' ? 'تعليمات العناية' : 'Care Instructions' },
                { key: 'shipping', label: lang === 'ar' ? 'الشحن والإرجاع' : 'Shipping & Returns' },
              ].map(tab => (
                <div key={tab.key} className="border-b border-beige">
                  <button
                    onClick={() => setActiveTab(activeTab === tab.key ? null : tab.key)}
                    className={`w-full flex items-center justify-between py-5 text-xs tracking-[.15em] uppercase text-black cursor-pointer ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}
                  >
                    {tab.label}
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                      className={`transition-transform duration-300 ${activeTab === tab.key ? 'rotate-45' : ''}`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${activeTab === tab.key ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                    {tab.key === 'details' && (
                      <ul className="space-y-2">
                        {product.details.map((d, i) => (
                          <li key={i} className={`text-sm text-med-grey flex items-start gap-2 ${lang === 'ar' ? 'arabic-text' : ''}`}>
                            <span className="text-champagne mt-1">&#8226;</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                    {tab.key === 'care' && (
                      <div className={`text-sm text-med-grey space-y-2 ${lang === 'ar' ? 'arabic-text' : ''}`}>
                        <p>{lang === 'ar' ? 'يُنصح بالتنظيف الجاف الاحترافي للقطع المزخرفة.' : 'Professional dry clean recommended for embellished pieces.'}</p>
                        <p>{lang === 'ar' ? 'اخزن في كيس الملابس المقدم بعيداً عن أشعة الشمس المباشرة.' : 'Store in the provided garment bag away from direct sunlight.'}</p>
                        <p>{lang === 'ar' ? 'اكوي على حرارة منخفضة مع قماش ضغط إذا لزم الأمر.' : 'Iron on low heat with a pressing cloth if needed.'}</p>
                      </div>
                    )}
                    {tab.key === 'shipping' && (
                      <div className={`text-sm text-med-grey space-y-2 ${lang === 'ar' ? 'arabic-text' : ''}`}>
                        <p>{lang === 'ar' ? 'توصيل مجاني داخل الإمارات. الشحن الدولي متاح.' : 'Complimentary delivery within the UAE. International shipping available.'}</p>
                        <p>{lang === 'ar' ? 'كل قطعة تصل في عبالتنا المميزة مع شهادة أصالة.' : 'Each piece arrives in our signature packaging with a certificate of authenticity.'}</p>
                        <p>{lang === 'ar' ? 'الطلبات المخصصة تتطلب 4-6 أسابيع للإنجاز.' : 'Custom orders require 4-6 weeks for completion.'}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-[1440px] mx-auto px-6 pb-20">
        <div className="mb-10">
          <div className={`text-[.694rem] tracking-[.35em] uppercase text-champagne mb-2 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
            {lang === 'ar' ? 'قد يعجبك أيضاً' : 'You May Also Love'}
          </div>
          <h2 className={`font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light text-black ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {lang === 'ar' ? 'قطع ذات صلة' : 'Related Pieces'}
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-champagne to-champagne-light mt-3" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-beige-light mb-4">
                <img
                  src={p.images[0]}
                  alt={lang === 'ar' ? productNamesAr[p.name] || p.name : p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className={`text-[.694rem] tracking-[.2em] uppercase text-champagne mb-1 ${lang === 'ar' ? 'arabic-text tracking-normal' : ''}`}>
                {lang === 'ar' ? collectionNamesAr[p.collection] || p.collection : p.collection}
              </div>
              <div className={`font-serif text-xl text-black group-hover:text-champagne transition-colors ${lang === 'ar' ? 'arabic-text' : ''}`}>
                {lang === 'ar' ? productNamesAr[p.name] || p.name : p.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
