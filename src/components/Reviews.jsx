import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import s1 from "@/assets/images/stu1.jpg"
import s2 from "@/assets/images/stu2.jpg"
import s3 from "@/assets/images/stu3.jpg"
import s4 from "@/assets/images/stu4.jpg"

// ── Add your real student data here ──────────────────────────────────────────
const students = [
    {
        id: 1,
        name: "Muskan",
        role: "Computer Diploma Student",
        image: s1,
        text: "I am Muskan, currently pursuing my computer diploma at IGCSM, and my experience has been amazing. The institute provides a very supportive learning environment, and the practical sessions helped me build real confidence in my skills.",
    },
    {
        id: 2,
        name: "Vinay",
        role: "IT Course Student",
        image: s2,
        text: "I'm Vinay, and studying at IGCSM has been a great journey. The trainers explain concepts clearly, and the hands-on projects make learning very engaging. It’s a perfect place for anyone who wants to start a career in IT.",
    },
    {
        id: 3,
        name: "Priya",
        role: "Web Development Student",
        image: s3,
        text: "Joining IGCSM was one of the best decisions I made. The faculty is knowledgeable and always ready to help. The practical assignments and real-world projects helped me improve my confidence and technical skills.",
    },
    {
        id: 4,
        name: "Rahul",
        role: "Software Training Student",
        image: s4,
        text: "The course structure at IGCSM is very well planned. I really liked the focus on practical learning and career guidance. The environment is friendly and motivating, which makes learning enjoyable.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────

// Split-panel image — vertical stripe mosaic effect
function SplitImage({ src }) {
    const stripes = 4;
    return (
        <div
            style={{
                width: "160px",
                minWidth: "160px",
                height: "",
                borderRadius: "10px",
                overflow: "hidden",
                flexShrink: 0,
            }}
        >
            <img
                src={src}
                alt="gallery"
                style={{
                    width: "w-full",
                    height: "h-auto",
                    objectFit: "cover",
                }}
            />
        </div>
    );
}

function TestimonialCard({ item }) {
    return (
        <div
            style={{
                display: "flex",
                gap: "20px",
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.06)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                position: "relative",
                overflow: "hidden",
                height: "100%",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(249,115,22,0.15)";
                e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            {/* Corner accent */}
            <div
                style={{
                    position: "absolute",
                    top: 0, right: 0,
                    width: "60px", height: "60px",
                    background: "linear-gradient(225deg, rgba(249,115,22,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <SplitImage src={item.image} />

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 0 }}>
                <p
                    style={{
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: "14px",
                        lineHeight: 1.75,
                        color: "#374151",
                        margin: 0,
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    "{item.text}"
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "16px" }}>
                    <div style={{ flexShrink: 0 }}>
                        <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                            <path
                                d="M0 28V17.6C0 14.4 0.8 11.467 2.4 8.8C4 6.133 6.267 3.867 9.2 2L12 5.6C10.133 6.933 8.667 8.467 7.6 10.2C6.533 11.933 6 13.733 6 15.6H10.4V28H0ZM20 28V17.6C20 14.4 20.8 11.467 22.4 8.8C24 6.133 26.267 3.867 29.2 2L32 5.6C30.133 6.933 28.667 8.467 27.6 10.2C26.533 11.933 26 13.733 26 15.6H30.4V28H20Z"
                                fill="#f59e0b"
                            />
                        </svg>
                    </div>
                    <div>
                        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "15px", color: "#f59e0b", margin: 0, letterSpacing: "0.03em", textTransform: "uppercase" }}>
                            {item.name}
                        </p>
                        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "13px", color: "#f97316", margin: "2px 0 0", fontWeight: 600 }}>
                            {item.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <style>{`
      
        @keyframes dotFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        .testimonial-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #f97316;
          width: 24px;
          border-radius: 4px;
        }
        .testimonial-swiper .swiper-slide {
          height: auto;
        }
      `}</style>

            <section
                style={{
                    background: "#fff",


                    position: "relative",
                    overflow: "hidden",
                }}
                className="pt-20"
            >
                {/* Dot grid — top right */}
                <div
                    style={{
                        position: "absolute",
                        top: "20px", right: "32px",
                        display: "grid",
                        gridTemplateColumns: "repeat(6, 8px)",
                        gap: "6px",
                        animation: "dotFloat 4s ease-in-out infinite",
                        opacity: 0.25,
                    }}
                >
                    {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f97316" }} />
                    ))}
                </div>

                {/* Dot grid — bottom right */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "24px", right: "80px",
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 8px)",
                        gap: "6px",
                        opacity: 0.15,
                    }}
                >
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f97316" }} />
                    ))}
                </div>

                <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

                    {/* ── Header row ── */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "16px",
                            marginBottom: "40px",
                        }}
                    >
                        {/* Left: label + heading */}
                        <div>
                            <p style={{ fontSize: "13px", fontWeight: 700, color: "#f59e0b", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 6px" }}>
                                Testimonials
                            </p>
                            <h2 data-aos="fade-right" data-aos-duration="600" className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-3 sm:mb-2 md:mb-3  "> Voices of Achievers!</h2>
                        </div>

                        {/* Right: nav arrows only */}
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <button
                                ref={prevRef}
                                style={{
                                    width: "40px", height: "40px",
                                    borderRadius: "50%",
                                    background: "#fff",
                                    border: "1.5px solid rgba(249,115,22,0.3)",
                                    color: "#f97316",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 2px 10px rgba(249,115,22,0.12)",
                                    transition: "all 0.25s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#f97316";
                                    e.currentTarget.style.color = "#fff";
                                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(249,115,22,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#fff";
                                    e.currentTarget.style.color = "#f97316";
                                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(249,115,22,0.12)";
                                }}
                            >
                                <ArrowLeft size={18} />
                            </button>

                            <button
                                ref={nextRef}
                                style={{
                                    width: "40px", height: "40px",
                                    borderRadius: "50%",
                                    background: "#fff",
                                    border: "1.5px solid rgba(249,115,22,0.3)",
                                    color: "#f97316",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 2px 10px rgba(249,115,22,0.12)",
                                    transition: "all 0.25s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#f97316";
                                    e.currentTarget.style.color = "#fff";
                                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(249,115,22,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#fff";
                                    e.currentTarget.style.color = "#f97316";
                                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(249,115,22,0.12)";
                                }}
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* ── Swiper Slider ── */}
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                        }}
                        className="testimonial-swiper"
                        style={{ paddingBottom: "44px" }}
                    >
                        {students.map((item) => (
                            <SwiperSlide key={item.id}>
                                <TestimonialCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </section>
        </>
    );
}