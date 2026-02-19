import { useState, useEffect, useRef } from "react";

import award1 from "@/assets/images/award1.jpeg"
import award2 from "@/assets/images/award2.png"
import award3 from "@/assets/images/award3.jpg"
import award4 from "@/assets/images/award4.jpg"
import award5 from "@/assets/images/award5.jpg"
import award6 from "@/assets/images/award6.jpg"
import award7 from "@/assets/images/award7.jpg"
import award8 from "@/assets/images/award8.jpg"
import award9 from "@/assets/images/award9.jpeg"
import award10 from "@/assets/images/award10.jpg"

const awards = [
  {
    id: 1,
    image: award1,
    title: "National Excellence Award",
    organization: "Ministry of Education, India",
    category: "Education",
    year: "2023",
    badge: "Gold",
    description: "Recognized for transformative impact in educational outreach across rural India.",
  },
  {
    id: 2,
    image: award2,
    title: "Best NGO in Skill Development",
    organization: "NASSCOM Foundation",
    category: "Skill Development",
    year: "2022",
    badge: "Platinum",
    description: "Honored for pioneering digital skill programs reaching 50,000+ youth.",
  },
  {
    id: 3,
    image: award3,
    title: "Digital India Champion",
    organization: "Government of India",
    category: "Digital Literacy",
    year: "2021",
    badge: "Gold",
    description: "Awarded for exceptional contribution to the Digital India mission.",
  },
  {
    id: 4,
    image: award4,
    title: "Social Impact Leadership",
    organization: "CII — Confederation of Indian Industry",
    category: "Social Impact",
    year: "2020",
    badge: "Silver",
    description: "Celebrated for visionary leadership in corporate social responsibility.",
  },
  {
    id: 5,
    image: award5,
    title: "Community Empowerment Award",
    organization: "United Nations Development Programme",
    category: "Community",
    year: "2019",
    badge: "Gold",
    description: "UN recognition for grassroots community empowerment initiatives.",
  },
  {
    id: 6,
    image: award6,
    title: "Best Literacy Program",
    organization: "UNESCO India Chapter",
    category: "Literacy",
    year: "2018",
    badge: "Platinum",
    description: "UNESCO distinction for innovative adult literacy programs.",
  },
  {
    id: 7,
    image: award7,
    title: "Women Empowerment Excellence",
    organization: "National Women's Commission",
    category: "Social Impact",
    year: "2017",
    badge: "Gold",
    description: "Honored for championing women's rights and economic independence.",
  },
  {
    id: 8,
    image: award8,
    title: "Rural Development Innovation",
    organization: "NABARD Foundation",
    category: "Community",
    year: "2016",
    badge: "Silver",
    description: "Recognized for innovative approaches to rural livelihood development.",
  },
  {
    id: 9,
    image: award9,
    title: "Youth Skill Champion",
    organization: "Ministry of Skill Development",
    category: "Skill Development",
    year: "2015",
    badge: "Platinum",
    description: "Platinum honors for empowering over 1 lakh youth with vocational skills.",
  },
];

// Minimal custom CSS — only what Tailwind cannot express
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,700&family=Outfit:wght@300;400;500;600&display=swap');

  .font-display { font-family: 'Cormorant Garamond', serif; }

  .hero-title {
    font-size: clamp(3rem, 7vw, 5.5rem);
    line-height: 0.92;
    letter-spacing: -0.02em;
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .card-enter {
    opacity: 0;
    animation: cardIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
  }

  @keyframes modalIn {
    from { opacity: 0; transform: scale(0.94) translateY(16px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
  .modal-enter {
    animation: modalIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards;
  }

  /* Image zoom on card hover */
  .card-img {
    transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
    transform: scale(1);
    filter: brightness(0.6) saturate(0.65);
  }
  .card-root:hover .card-img { transform: scale(1.1); }

  /* Description max-height reveal (Tailwind can't animate this) */
  .desc-hidden  { max-height: 0;    opacity: 0; margin-bottom: 0;    overflow: hidden; transition: max-height 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s 0.05s, margin 0.4s; }
  .desc-visible { max-height: 80px; opacity: 1; margin-bottom: 16px; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s 0.05s, margin 0.4s; }

  /* Accent line scale-in */
  .line-hidden  { transform: scaleX(0); opacity: 0; transform-origin: left; transition: transform 0.4s 0.2s cubic-bezier(0.22,1,0.36,1), opacity 0.3s 0.2s; }
  .line-visible { transform: scaleX(1); opacity: 1; transform-origin: left; transition: transform 0.4s 0.2s cubic-bezier(0.22,1,0.36,1), opacity 0.3s 0.2s; }
`;

const BADGE = {
  Gold:     { border: "#f97316", text: "#f97316", glow: "rgba(249,115,22,0.45)", label: "✦ Gold" },
  Platinum: { border: "#6A90A8", text: "#6A90A8", glow: "rgba(106,144,168,0.42)", label: "✦ Platinum" },
  Silver:   { border: "#909090", text: "#909090", glow: "rgba(144,144,144,0.38)", label: "✦ Silver" },
};

/* ── Icons ── */
function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-4 h-4">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      className="w-4 h-4">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Image Lightbox Modal with prev/next navigation ── */
function ImageModal({ initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const [slideDir, setSlideDir] = useState(null); // "left" | "right" | null
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(null);

  const award = awards[index];
  const total = awards.length;
  const b = BADGE[award.badge];

  const go = (dir) => {
    if (animating) return;
    setSlideDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (dir === "next" ? (prev + 1) % total : (prev - 1 + total) % total));
      setSlideDir(null);
      setAnimating(false);
    }, 260);
  };

  const goNext = () => go("next");
  const goPrev = () => go("prev");

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [animating]);

  // Touch/swipe support
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  // Slide animation style
  const slideStyle = slideDir === "next"
    ? { animation: "slideOutLeft 0.26s ease forwards" }
    : slideDir === "prev"
    ? { animation: "slideOutRight 0.26s ease forwards" }
    : { animation: "slideInFade 0.3s ease forwards" };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10"
      style={{ background: "rgba(8,5,1,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <style>{`
        @keyframes slideOutLeft  { to { opacity: 0; transform: translateX(-48px); } }
        @keyframes slideOutRight { to { opacity: 0; transform: translateX(48px); } }
        @keyframes slideInFade   { from { opacity: 0; transform: translateX(0) scale(0.97); } to { opacity: 1; transform: translateX(0) scale(1); } }
      `}</style>

      {/* Prev arrow — outside panel on desktop */}
      <button
        onClick={goPrev}
        className="hidden sm:flex absolute left-4 lg:left-8 w-11 h-11 items-center justify-center rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(6px)" }}
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Modal panel */}
      <div
        className="modal-enter relative w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl"
        style={{ border: "1px solid rgba(249,115,22,0.18)", background: "#140f07" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-all duration-200 hover:bg-white/15 active:scale-90"
          style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}
          aria-label="Close preview"
        >
          <CloseIcon />
        </button>

        {/* Counter pill — top left */}
        <div
          className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-[11px] font-semibold text-white/60 tracking-widest"
          style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(6px)" }}
        >
          {index + 1} / {total}
        </div>

        {/* Image area with slide animation */}
        <div
          className="w-full bg-stone-950 flex items-center justify-center overflow-hidden"
          style={{ maxHeight: "60vh", minHeight: 220 }}
        >
          <img
            key={index}
            src={award.image}
            alt={award.title}
            className="w-full object-contain"
            style={{ maxHeight: "60vh", ...slideStyle }}
          />
        </div>

        {/* Info strip */}
        <div className="px-5 py-4" style={{ background: "#0e0905" }}>
          {/* Title + badge row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="min-w-0">
              <p className="font-display text-lg font-bold text-stone-100 leading-tight">
                {award.title}
              </p>
              <p className="text-[11.5px] mt-1 text-stone-500 tracking-wide">
                {award.organization} · {award.year}
              </p>
            </div>
            <span
              className="shrink-0 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-sm mt-0.5"
              style={{ color: b.text, border: `1px solid ${b.border}`, background: "rgba(255,255,255,0.04)" }}
            >
              {b.label}
            </span>
          </div>

          {/* Dot indicators + mobile arrows */}
          <div className="flex items-center justify-between gap-3">
            {/* Mobile prev/next */}
            <button
              onClick={goPrev}
              className="sm:hidden w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-all"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 flex-1 justify-center flex-wrap">
              {awards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (i !== index && !animating) { setSlideDir(i > index ? "next" : "prev"); setAnimating(true); setTimeout(() => { setIndex(i); setSlideDir(null); setAnimating(false); }, 260); } }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 20 : 6,
                    height: 6,
                    background: i === index ? "#f97316" : "rgba(255,255,255,0.2)",
                  }}
                  aria-label={`Go to award ${i + 1}`}
                />
              ))}
            </div>

            {/* Mobile next */}
            <button
              onClick={goNext}
              className="sm:hidden w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-all"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Next arrow — outside panel on desktop */}
      <button
        onClick={goNext}
        className="hidden sm:flex absolute right-4 lg:right-8 w-11 h-11 items-center justify-center rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(6px)" }}
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

/* ── Award Card ── */
function AwardCard({ award, index, onPreview }) {
  const [hovered, setHovered] = useState(false);
  const b = BADGE[award.badge];

  return (
    <div
      className="card-root card-enter relative rounded overflow-hidden cursor-pointer transition-shadow duration-500 shadow-sm hover:shadow-xl"
      style={{
        aspectRatio: "3/3",
        animationDelay: `${index * 90}ms`,
        border: `1px solid ${hovered ? "rgba(184,146,42,0.35)" : "rgba(184,146,42,0.13)"}`,
        transition: "border-color 0.35s, box-shadow 0.5s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={award.image} alt={award.title} className="card-img w-full h-full object-cover" />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: hovered
              ? "linear-gradient(to top, rgba(14,9,2,0.97) 0%, rgba(14,9,2,0.72) 50%, rgba(14,9,2,0.18) 100%)"
              : "linear-gradient(to top, rgba(14,9,2,0.9) 0%, rgba(14,9,2,0.3) 45%, rgba(14,9,2,0.04) 100%)",
          }}
        />
      </div>

      {/* Eye button — appears in center on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <button
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full text-white text-[11px] font-semibold tracking-widest uppercase backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-white/25 hover:scale-105 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.1)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            transform: hovered ? "translateY(0) scale(1)" : "translateY(6px) scale(0.95)",
            transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), background 0.2s",
          }}
          onClick={(e) => { e.stopPropagation(); onPreview(); }}
        >
          <EyeIcon />
          View Photo
        </button>
      </div>

      {/* Year — top left */}
      <div className="font-display absolute top-4 left-4 text-[13px] tracking-widest text-orange-400">
        {award.year}
      </div>

      {/* Hover info panel */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500"
        style={{ transform: hovered ? "translateY(0)" : "translateY(8px)" }}
      >
        {/* Title */}
        <h3 className="font-display text-[1.4rem] font-bold leading-tight text-stone-100 mb-1.5">
          {award.title}
        </h3>

        {/* Organization */}
        <p className="text-[11.5px] tracking-wide mb-3" style={{ color: "rgba(245,235,218,0.5)" }}>
          {award.organization}
        </p>

        {/* Description — animated reveal */}
        <p
          className={`text-[12px] leading-relaxed ${hovered ? "desc-visible" : "desc-hidden"}`}
          style={{ color: "rgba(245,235,218,0.38)" }}
        >
          {award.description}
        </p>

        {/* Accent line */}
        <div className={`h-px w-8 ${hovered ? "line-visible" : "line-hidden"}`} style={{ background: b.border }} />
      </div>
    </div>
  );
}

/* ── Page ── */
export default function AwardGallery() {
  const [previewIndex, setPreviewIndex] = useState(null); // index or null

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = previewIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [previewIndex]);

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-amber-50 text-stone-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <style>{GLOBAL_CSS}</style>

      {/* Ambient glows */}
      <div className="fixed rounded-full pointer-events-none blur-3xl -z-10"
        style={{ width: 700, height: 700, top: -200, left: -200, background: "radial-gradient(circle, rgba(212,175,55,0.11) 0%, transparent 70%)" }} />
      <div className="fixed rounded-full pointer-events-none blur-3xl -z-10"
        style={{ width: 500, height: 500, bottom: 0, right: -100, background: "radial-gradient(circle, rgba(106,144,168,0.09) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">

        {/* ── Hero ── */}
        <div className="mb-16">
          {/* Eyebrow */}
          <div data-aos="fade-right" data-aos-duration="600" className="flex items-center gap-3.5 mb-5">
            <div className="w-12 h-px bg-orange-500" />
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-orange-500">
              IGCSM Achievements
            </span>
          </div>

          {/* Title */}
          <h2 data-aos="fade-right" data-aos-duration="600" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-2 md:mb-3">
            Awards &amp;<br />
            <em className="text-orange-500 not-italic">Recognition</em>
          </h2>

          {/* Subtitle */}
          <p className="text-[0.95rem] leading-relaxed font-light max-w-md" style={{ color: "#7A6A55" }}>
            A curated legacy of honors earned through years of dedicated service, innovation, and measurable community impact.
          </p>
        </div>

        {/* ── Gallery Grid ── */}
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {awards.map((award, i) => (
            <AwardCard key={award.id} award={award} index={i} onPreview={() => setPreviewIndex(i)} />
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center gap-6 mt-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
          <p className="text-[11px] tracking-widest uppercase whitespace-nowrap text-stone-400">
            <span className="text-orange-500">IGCSM</span> — All honors verified © {new Date().getFullYear()}
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {previewIndex !== null && <ImageModal initialIndex={previewIndex} onClose={() => setPreviewIndex(null)} />}
    </div>
  );
}