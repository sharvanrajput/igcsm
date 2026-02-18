import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import gallery1 from "@/assets/images/gallery1.webp";
import gallery2 from "@/assets/images/gallery2.webp";
import gallery3 from "@/assets/images/gallery3.webp";
import gallery4 from "@/assets/images/gallery4.jpeg";
import gallery5 from "@/assets/images/gallery5.jpeg";
import gallery6 from "@/assets/images/gallery6.jpeg";
import gallery7 from "@/assets/images/gallery7.jpeg";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function SimpleGallery() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // ── Modal state ──────────────────────────────────────────────────────────────
    const [modalImage, setModalImage] = useState(null);

    const openModal = (src) => setModalImage(src);
    const closeModal = () => setModalImage(null);

    // Close modal on Escape key
    useEffect(() => {
        const handleKey = (e) => { if (e.key === "Escape") closeModal(); };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);
    // ────────────────────────────────────────────────────────────────────────────

    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
    ];

    return (
        // `relative` on <section> so nav buttons anchor to the full section width
        <section className="py-16   relative overflow-hidden">

            {/* ── Nav Buttons — OUTSIDE .container so they hug the section edges ─────── */}
            <button
                ref={prevRef}
                style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#fff",
                    border: "1.5px solid rgba(249,115,22,0.3)",
                    color: "#f97316",
                    fontSize: "22px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(249,115,22,0.15)",
                    transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f97316";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(249,115,22,0.4)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#f97316";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(249,115,22,0.15)";
                }}
            >
                <ArrowLeft size={20} />
            </button>

            <button
                ref={nextRef}
                style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#fff",
                    border: "1.5px solid rgba(249,115,22,0.3)",
                    color: "#f97316",
                    fontSize: "22px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(249,115,22,0.15)",
                    transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f97316";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(249,115,22,0.4)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#f97316";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(249,115,22,0.15)";
                }}
            >
                <ArrowRight size={20} />
            </button>
            {/* ─────────────────────────────────────────────────────────────────────── */}

            <div className="container  relative ">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-px w-10 bg-gradient-to-r from-transparent to-orange-400" />
                        <span className="text-xs font-bold tracking-widest text-orange-400 uppercase">
                            Visual Collection
                        </span>
                        <div className="h-px w-10 bg-gradient-to-l from-transparent to-orange-400" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-orange-500">
                        Gallery
                    </h2>
                </div>
                <div className="overflow-x-hidden">
                    {/* Swiper — no extra wrapper needed, nav refs point to section-level buttons */}
                    <Swiper
                        modules={[Autoplay, Navigation, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 120,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        className="pb-10!"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide
                                key={index}
                                style={{ width: "420px" }}
                                className="h-auto!"
                            >
                                {({ isActive }) => (
                                    <div
                                        onClick={() => openModal(img)}
                                        style={{
                                            cursor: "pointer",
                                            transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",
                                            transform: isActive ? "scale(1)" : "scale(0.85)",

                                            // ── OPACITY CONTROL ──────────────────────────────────────
                                            // isActive = true  → this is the CENTER (focused) slide
                                            // isActive = false → these are the SIDE slides
                                            //
                                            // Change the second value (currently 0.75) to control
                                            // how faded the non-center slides appear:
                                            //   0.3  → very faded
                                            //   0.55 → medium fade
                                            //   0.8  → barely faded
                                            //   1    → no fade at all
                                            opacity: isActive ? 1 : 0.8,
                                            // ────────────────────────────────────────────────────────

                                            borderRadius: "18px",
                                            overflow: "hidden",
                                            boxShadow: isActive
                                                ? "0 0px 60px rgba(249,115,22,0.28), 0 8px 24px rgba(0,0,0,0.12)"
                                                : "0 4px 16px rgba(0,0,0,0.08)",
                                            border: isActive
                                                ? "2px solid rgba(249,115,22,0.5)"
                                                : "2px solid transparent",
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`gallery ${index + 1}`}
                                            loading="lazy"
                                            style={{
                                                width: "100%",
                                                height: "400px",
                                                objectFit: "cover",
                                                display: "block",
                                                transition: "transform 0.5s ease",
                                                transform: isActive ? "scale(1.02)" : "scale(1)",
                                            }}
                                        />

                                        {/* Active indicator bar */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: "3px",
                                                background: "linear-gradient(90deg, #f97316, #fb923c, #fdba74)",
                                                opacity: isActive ? 1 : 0,
                                                transition: "opacity 0.4s ease",
                                            }}
                                        />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* ── Lightbox Modal ──────────────────────────────────────────────────────────
                Opens when any gallery image is clicked.
                Click outside the image OR press Escape to close.
            ─────────────────────────────────────────────────────────────────────────── */}
            {modalImage && (
                <div
                    onClick={closeModal}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 1000,
                        background: "rgba(0,0,0,0.85)",
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        animation: "modalFadeIn 0.3s ease",
                    }}
                >
                    {/* Card — stopPropagation so clicking the image doesn't close the modal */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: "relative",
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "2px solid rgba(249,115,22,0.4)",
                            boxShadow: "0 40px 100px rgba(249,115,22,0.2), 0 8px 40px rgba(0,0,0,0.4)",
                            maxWidth: "90vw",
                            maxHeight: "85vh",
                            animation: "modalScaleIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                        }}
                    >
                        {/* Orange top accent bar */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "3px",
                                background: "linear-gradient(90deg, #f97316, #fb923c, #fdba74)",
                                zIndex: 10,
                            }}
                        />

                        <img
                            src={modalImage}
                            alt="preview"
                            style={{
                                display: "block",
                                maxWidth: "90vw",
                                maxHeight: "85vh",
                                objectFit: "contain",
                            }}
                        />

                        {/* ✕ Close button */}
                        <button
                            onClick={closeModal}
                            style={{
                                position: "absolute",
                                top: "12px",
                                right: "12px",
                                zIndex: 20,
                                width: "38px",
                                height: "38px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.95)",
                                border: "1.5px solid rgba(249,115,22,0.4)",
                                color: "#f97316",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 2px 12px rgba(249,115,22,0.25)",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#f97316";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                                e.currentTarget.style.color = "#f97316";
                            }}
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>
            )}
            {/* ─────────────────────────────────────────────────────────────────────── */}

            <style>{`
                @keyframes modalFadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes modalScaleIn {
                    from { transform: scale(0.88); opacity: 0; }
                    to   { transform: scale(1);    opacity: 1; }
                }
                .swiper-pagination-bullet {
                    // background: #f97316 !important;
                    // opacity: 0.35;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    transform: scale(1.3);
                }
            `}</style>
        </section>
    );
}