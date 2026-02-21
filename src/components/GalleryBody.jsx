


import { useState, useEffect, useCallback, useRef } from "react";

import g1 from "@/assets/images/award1.jpeg"
import g2 from "@/assets/images/award2.png"
import g3 from "@/assets/images/award3.jpg"
import g4 from "@/assets/images/award4.jpg"
import g5 from "@/assets/images/award5.jpg"
import g6 from "@/assets/images/award6.jpg"
import g7 from "@/assets/images/award7.jpg"
import g8 from "@/assets/images/award8.jpg"
import g9 from "@/assets/images/award9.jpeg"
import g10 from "@/assets/images/award10.jpg"
import g11 from "@/assets/images/gallery1.webp"
import g12 from "@/assets/images/gallery2.webp"
import g13 from "@/assets/images/gallery3.webp"
import g14 from "@/assets/images/gallery4.jpeg"
import g15 from "@/assets/images/gallery7.jpeg"
import g16 from "@/assets/images/gallery8.webp"
import g17 from "@/assets/images/gallery9.jpg"
import g18 from "@/assets/images/gallery10.jpg"
import g19 from "@/assets/images/gallery11.jpeg"
import g20 from "@/assets/images/gallery12.jpeg"
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryImages = [
    {
        id: 1,
        src: g1,
        thumb: g1,
        title: "",
    },
    {
        id: 2,
        src: g2,
        thumb: g2,
        title: "",
    },
    {
        id: 3,
        src: g3,
        thumb: g3,
        title: "",
    },
    {
        id: 4,
        src: g4,
        thumb: g4,
        title: "",
    },
    {
        id: 5,
        src: g5,
        thumb: g5,
        title: "",
    },
    {
        id: 6,
        src: g6,
        thumb: g6,
        title: "",
    },
    {
        id: 7,
        src: g7,
        thumb: g7,
        title: "",
    },
    {
        id: 8,
        src: g8,
        thumb: g8,
        title: "",
    },
    {
        id: 9,
        src: g9,
        thumb: g9,
        title: "",
    },
    {
        id: 10,
        src: g10,
        thumb: g10,
        title: "",
    },
    {
        id: 11,
        src: g11,
        thumb: g11,
        title: "",
    },
    {
        id: 12,
        src: g12,
        thumb: g12,
        title: "",
    },
    {
        id: 13,
        src: g13,
        thumb: g13,
        title: "",
    },
    {
        id: 14,
        src: g14,
        thumb: g14,
        title: "",
    },
    {
        id: 15,
        src: g15,
        thumb: g15,
        title: "",
    },
    {
        id: 16,
        src: g16,
        thumb: g16,
        title: "",
    },
    {
        id: 17,
        src: g17,
        thumb: g17,
        title: "",
    },
    {
        id: 18,
        src: g18,
        thumb: g18,
        title: "",
    },
    {
        id: 19,
        src: g19,
        thumb: g19,
        title: "",
    },
    {
        id: 20,
        src: g20,
        thumb: g20,
        title: "",
    },
];

function Lightbox({ images, startIndex, onClose }) {
    const [current, setCurrent] = useState(startIndex);
    const [animDir, setAnimDir] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const thumbsRef = useRef(null);

    useEffect(() => {
        requestAnimationFrame(() => setIsVisible(true));
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    useEffect(() => {
        const thumb = thumbsRef.current?.children[current];
        if (thumb) thumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }, [current]);

    const go = useCallback((dir) => {
        setAnimDir(dir);
        setTimeout(() => {
            setCurrent((c) => dir === "right" ? (c + 1) % images.length : (c - 1 + images.length) % images.length);
            setAnimDir(null);
        }, 180);
    }, [images.length]);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === "ArrowRight") go("right");
            if (e.key === "ArrowLeft") go("left");
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [go, onClose]);

    const imgTransform = animDir === "right"
        ? "translateX(-44px) scale(0.95)"
        : animDir === "left"
            ? "translateX(44px) scale(0.95)"
            : "translateX(0) scale(1)";

    return (
        <div
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            style={{
                position: "fixed", inset: 0, zIndex: 1000,
                background: "rgba(8,8,12,0.94)",
                backdropFilter: "blur(12px)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.32s ease",
            }}
        >
            {/* Close */}
            <button
                onClick={onClose}
                style={{
                    position: "absolute", top: 20, right: 24,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "50%", width: 42, height: 42,
                    color: "#fff", fontSize: 18, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; e.currentTarget.style.transform = "rotate(90deg)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "rotate(0deg)"; }}
            >
                ✕
            </button>

            {/* Counter */}
            <div style={{
                position: "absolute", top: 28, left: 24,
                color: "rgba(255,255,255,0.35)", fontSize: 12,
                letterSpacing: "0.12em",
            }}>
                {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>

            {/* Image row */}
            <div style={{ display: "flex", alignItems: "center", gap: 18, width: "100%", maxWidth: 940, padding: "0 16px" }}>
                {/* Prev */}
                <button
                    onClick={() => go("left")}
                    style={{
                        flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#fff", fontSize: 24, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.2s, transform 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(224,92,26,0.5)"; e.currentTarget.style.transform = "scale(1.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "scale(1)"; }}
                >
                    <ArrowLeft />
                </button>

                {/* Image + title */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                        width: "100%", borderRadius: 14, overflow: "hidden",
                        boxShadow: "0 36px 90px rgba(0,0,0,0.75)",
                        lineHeight: 0,
                    }}>
                        <img
                            key={current}
                            src={images[current].src}
                            alt={images[current].title}
                            style={{
                                width: "100%", maxHeight: "62vh", objectFit: "contain", display: "block",
                                transform: imgTransform,
                                opacity: animDir ? 0.2 : 1,
                                transition: "transform 0.18s ease, opacity 0.18s ease",
                            }}
                        />
                    </div>
                    <p style={{
                        marginTop: 16, color: "#fff",

                        fontSize: 16, fontWeight: 600, textAlign: "center",
                        opacity: 0.9,
                    }}>
                        {images[current].title}
                    </p>
                </div>

                {/* Next */}
                <button
                    onClick={() => go("right")}
                    style={{
                        flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#fff", fontSize: 24, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.2s, transform 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(224,92,26,0.5)"; e.currentTarget.style.transform = "scale(1.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "scale(1)"; }}
                >
                    <ArrowRight />
                </button>
            </div>

            {/* Thumbnails */}
            <div
                ref={thumbsRef}
                style={{
                    display: "flex", gap: 8, marginTop: 22,
                    padding: "4px 20px", overflowX: "auto", maxWidth: "100%",
                    scrollbarWidth: "none",
                }}
            >
                {images.map((img, i) => (
                    <button
                        key={img.id}
                        onClick={() => {
                            setAnimDir(i > current ? "right" : "left");
                            setTimeout(() => { setCurrent(i); setAnimDir(null); }, 180);
                        }}
                        style={{
                            flexShrink: 0, width: 66, height: 50,
                            borderRadius: 7, overflow: "hidden", cursor: "pointer",
                            border: i === current ? "2px solid #e05c1a" : "2px solid transparent",
                            opacity: i === current ? 1 : 0.42,
                            transition: "opacity 0.2s, border-color 0.2s, transform 0.2s",
                            transform: i === current ? "scale(1.1)" : "scale(1)",
                            padding: 0, background: "none",
                        }}
                    >
                        <img src={img.thumb} alt={img.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function GalleryBody() {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    return (
        <>
            <style>{`
     
        .gal-card {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          background: #e8e8e8;
          aspect-ratio: 4/3;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s;
        }
        .gal-card:hover {
          transform: translateY(-5px) scale(1.016);
          box-shadow: 0 16px 44px rgba(0,0,0,0.14);
        }
        .gal-card img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
        .gal-card:hover img { transform: scale(1.09); }

        .gal-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.64) 0%, transparent 52%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex; align-items: flex-end;
          padding: 14px;
        }
        .gal-card:hover .gal-overlay { opacity: 1; }

        .gal-zoom {
          position: absolute; top: 10px; right: 10px;
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.92);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.25s, transform 0.25s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .gal-card:hover .gal-zoom { opacity: 1; transform: scale(1); }
      `}</style>

            <section style={{ background: "#fafaf8", padding: "64px 0" }}>
                <div  className="container">

                  

                    {/* Grid */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
                        gap: 16,
                    }}>
                        {galleryImages.map((img, i) => (
                            <div
                                key={img.id}
                                className="gal-card"
                                onClick={() => setLightboxIndex(i)}
                            >
                                <img src={img.thumb} alt={img.title} loading="lazy" />
                                <div className="gal-overlay">
                                    <span style={{
                                        color: "#fff",

                                        fontWeight: 600, fontSize: 14,
                                    }}>
                                        {img.title}
                                    </span>
                                </div>
                                <div className="gal-zoom">🔍</div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {lightboxIndex !== null && (
                <Lightbox
                    images={galleryImages}
                    startIndex={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}
        </>
    );
}