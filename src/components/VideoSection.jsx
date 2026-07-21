import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const sectionRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { t, lang } = useLanguage();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".video-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".video-btn", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <>
      <section
        id="video"
        ref={sectionRef}
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/img/13.jpg"
            alt="Cinematic"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="video-content relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className={`mb-8 font-serif text-5xl md:text-6xl lg:text-7xl text-ivory ${lang === 'ar' ? 'arabic-text' : ''}`}>
            {t('video.title')}
          </h2>

          <button
            onClick={openModal}
            className="video-btn group mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-champagne/40 bg-white/10 backdrop-blur-sm transition-all duration-500 hover:border-champagne hover:bg-champagne/20 hover:scale-110"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`ml-1 h-8 w-8 text-champagne transition-colors duration-500 group-hover:text-ivory ${lang === 'ar' ? 'ml-0 mr-1' : ''}`}
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            className="relative w-full max-w-4xl px-4"
            style={{ animation: "scaleIn 0.3s ease-out" }}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-light-grey transition-colors hover:text-ivory"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="aspect-video w-full overflow-hidden rounded-sm">
              <iframe
                src="https://www.youtube.com/embed/be5GnVMENlA?rel=0&modestbranding=1"
                title="Noor Al Lail — The Art of Being Noor"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
