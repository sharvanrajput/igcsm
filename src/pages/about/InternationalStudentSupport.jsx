

import { useEffect, useRef, useState } from "react";
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from "@/components/about/Breadcrumb";


const TITP_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,700&family=Outfit:wght@300;400;500;600&display=swap');

  .titp-font-display { font-family: 'Cormorant Garamond', serif; }
  .titp-font-body    { font-family: 'Outfit', sans-serif; }

  @keyframes titpFadeUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes titpFadeLeft {
    from { opacity: 0; transform: translateX(-32px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes titpFadeRight {
    from { opacity: 0; transform: translateX(32px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes titpLineGrow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes titpImgReveal {
    from { opacity: 0; transform: scale(1.06); }
    to   { opacity: 1; transform: scale(1); }
  }

  .titp-reveal       { opacity: 0; transform: translateY(36px); }
  .titp-reveal-left  { opacity: 0; transform: translateX(-32px); }
  .titp-reveal-right { opacity: 0; transform: translateX(32px); }
  .titp-img-reveal   { opacity: 0; transform: scale(1.06); }

  .titp-reveal.visible       { animation: titpFadeUp   0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
  .titp-reveal-left.visible  { animation: titpFadeLeft  0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
  .titp-reveal-right.visible { animation: titpFadeRight 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
  .titp-img-reveal.visible   { animation: titpImgReveal 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }

  .titp-line { transform: scaleX(0); transform-origin: left; }
  .titp-line.visible { animation: titpLineGrow 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }

  .titp-card-hover {
    transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s;
  }
  .titp-card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 48px rgba(249,115,22,0.13), 0 4px 12px rgba(0,0,0,0.06);
  }

  .titp-img-zoom img {
    transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
  }
  .titp-img-zoom:hover img {
    transform: scale(1.06);
  }

  .titp-flag-dot {
    transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s;
  }
  .titp-flag-dot:hover {
    transform: scale(1.12);
    box-shadow: 0 4px 12px rgba(249,115,22,0.2);
  }

  .titp-hero-img {
    filter: brightness(0.55) saturate(0.8);
  }
`;

// Images
const IMGS = {
    hero: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400&q=80",   // Tokyo cityscape
    handshake: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",    // Handshake / cooperation
    training1: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",   // Manufacturing / industrial
    training2: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=700&q=80",   // Healthcare
    training3: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80",   // Agriculture
    training4: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80",   // Construction
    japan1: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",   // Japan street
    japan2: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",      // Japan landmark
    students: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",   // Students graduating
};

function useReveal(threshold = 0.12) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

function Reveal({ children, delay = 0, className = "", dir = "up" }) {
    const [ref, visible] = useReveal();
    const cls = dir === "left" ? "titp-reveal-left" : dir === "right" ? "titp-reveal-right" : dir === "img" ? "titp-img-reveal" : "titp-reveal";
    return (
        <div
            ref={ref}
            className={`${cls} ${visible ? "visible" : ""} ${className}`}
            style={{ animationDelay: visible ? `${delay}ms` : "0ms" }}
        >
            {children}
        </div>
    );
}

function CountUp({ target, suffix = "" }) {
    const [count, setCount] = useState(0);
    const [ref, visible] = useReveal(0.3);
    useEffect(() => {
        if (!visible) return;
        let v = 0;
        const step = Math.ceil(target / 50);
        const t = setInterval(() => {
            v += step;
            if (v >= target) { setCount(target); clearInterval(t); }
            else setCount(v);
        }, 28);
        return () => clearInterval(t);
    }, [visible, target]);
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function CountryPill({ name, isDestination = false }) {
    return (
        <span
            className={`titp-flag-dot inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide cursor-default ${isDestination ? "bg-orange-500 text-white" : "bg-white text-stone-600 border border-stone-200"
                }`}
            style={{ boxShadow: isDestination ? "0 2px 14px rgba(249,115,22,0.38)" : "0 1px 4px rgba(0,0,0,0.05)" }}
        >
            {isDestination && <span className="w-1.5 h-1.5 rounded-full bg-white/80 inline-block" />}
            {name}
        </span>
    );
}

export default function InternationalStudentSupport() {
    const [lineRef, lineVisible] = useReveal(0.3);

    const benefits = [
        {
            img: IMGS.training1,
            icon: "🏭",
            label: "Manufacturing & Industry",
            text: "TITP allows foreign workers to acquire technical skills and knowledge from foreign companies in various industries such as manufacturing, agriculture, construction, and healthcare.",
        },
        {
            img: IMGS.training2,
            icon: "🏥",
            label: "Cultural Exchange",
            text: "Participants have the opportunity to experience other culture and work environment, fostering cross-cultural understanding.",
        },
        {
            img: IMGS.training3,
            icon: "👷",
            label: "Labor & Agriculture",
            text: "TITP helps foreign companies cope with labor shortages in certain sectors by providing them with a pool of foreign trainees.",
        },
        {
            img: IMGS.training4,
            icon: "📈",
            label: "Economic Growth",
            text: "The program can contribute to the economy by supporting industries in need of skilled workers and boosting productivity.",
        },
    ];

    const originCountries = [
        "Bangladesh", "Cambodia", "China", "India", "Indonesia",
        "Laos", "Pakistan", "Peru", "The Philippines", "Myanmar",
        "Mongolia", "Nepal", "Sri Lanka", "Thailand", "Uzbekistan", "Vietnam",
    ];

    return (
        <>
            <style>{TITP_CSS}</style>


            <Breadcrumb Heading={"About IGCSM"} bg={IMGS.hero} path={"About IGCSM"} />


            <section className="  relative overflow-hidden" style={{ background: "#FAF7F2" }} id="titp">

                {/* Ambient glows */}
                <div className="absolute rounded-full pointer-events-none blur-3xl"
                    style={{ width: 700, height: 700, top: -200, right: -200, background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />
                <div className="absolute rounded-full pointer-events-none blur-3xl"
                    style={{ width: 500, height: 500, bottom: 0, left: -150, background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)" }} />

                 
                {/* ══ MAIN CONTENT ══ */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pb-20 sm:pb-28 pt-10">

                    {/* Intro paragraph + decorative line */}
                    <Reveal delay={60} className="mb-16">
                        <p  >
                            The program promotes international collaboration through the transfer of skills, technology, and knowledge among the participating countries thereby, contributing towards the human resource development. It offers training to the workers for a specific period (3 – 5 years) in other country's industrial society.
                        </p>
                        <div
                            ref={lineRef}
                            className={`titp-line h-px w-20 mt-7 ${lineVisible ? "visible" : ""}`}
                            style={{ background: "#f97316", animationDelay: "300ms" }}
                        />
                    </Reveal>

                    {/* ══ MoC — split layout: text left, image right ══ */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-center">
                        {/* Text side */}
                        <Reveal dir="left" delay={0}>
                            <div
                                className="   h-full relative overflow-hidden"

                            >
                                <div className="absolute top-0 right-0 w-28 h-28 opacity-30 rounded-bl-full"
                                    style={{ background: "radial-gradient(circle at top right, rgba(249,115,22,0.18), transparent 70%)" }} />

                                <div className="flex items-start gap-4 mb-5">
                                    <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-xl"
                                        style={{ background: "rgba(249,115,22,0.1)" }}>
                                        🤝
                                    </div>
                                    <div>
                                        <h2 className="text-2xl lg:text-3xl font-semibold leading-tight">Memorandum of Cooperation</h2>
                                        <p  >India – Japan · October 2017</p>
                                    </div>
                                </div>

                                <p  >
                                    To allow the participation of Indian youths in TITP, the ministry of skill Development and Entrepreneurship (MSDE), Government of India and the Ministry of Justice, the Ministry of Foreign Affairs and the Ministry Of Health, Labour and Welfare, Government of Japan, signed a Memorandum of Cooperation (MoC) in Japan on October, 2017.
                                </p>

                                <div className="pt-5 border-t border-orange-100">
                                    <p  >
                                        <span className="font-semibold text-stone-700">Indira Gandhi Computer Shaksharta Mission</span> is collaborated with{" "}
                                        <span className="font-semibold text-stone-700">New Delhi Institute of Management (NDIM)</span> and{" "}
                                        <span className="font-semibold text-stone-700">Team Tensai</span> to formed a new company with name of{" "}
                                        <span className="font-semibold text-orange-600">International Skills Centre India (ISCI)</span> for the implementation of "INDO – JAPAN Technical Intern Training Programme"
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Image side */}
                        <Reveal dir="right" delay={80}>
                            <div className="titp-img-zoom rounded-2xl overflow-hidden shadow-xl" style={{ height: 380, border: "1px solid rgba(249,115,22,0.12)" }}>
                                <img src={IMGS.handshake} alt="India Japan Cooperation" className="w-full h-full object-cover" />
                            </div>
                        </Reveal>
                    </div>

                    {/* ══ Highlights strip ══ */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
                        {[
                            { icon: "🏅", img: null, text: "Empanelled as a SENDING ORGANIZATION in TITP Programme", delay: 0 },
                            { icon: "✈️", img: null, text: "Placement Opportunities in JAPAN for Foreign Placement", delay: 100 },
                            { icon: "🎓", img: null, text: "Already provide placement in JAPAN to approx 105 nos. of Students", delay: 200 },
                        ].map(({ icon, text, delay }) => (
                            <Reveal key={text} delay={delay}>
                                <div
                                    className="titp-card-hover flex items-start gap-3 p-5 rounded-xl h-full"
                                    style={{ background: "#fff", border: "1px solid rgba(249,115,22,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl"
                                        style={{ background: "rgba(249,115,22,0.08)" }}>
                                        {icon}
                                    </div>
                                    <p className="text-sm font-medium text-stone-700 leading-snug pt-1.5">{text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* ══ Benefits — image cards ══ */}
                    <div className="mb-20">
                        <Reveal className="mb-8">
                            <div className="flex items-center gap-3.5">
                                <div className="w-8 h-px bg-orange-500" />
                                <h2
                                    className="text-2xl sm:text-3xl font-semibold"
                                >
                                    Potential Benefits of <em className="text-orange-500 not-italic">TITP</em>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {benefits.map((b, i) => (
                                <Reveal key={i} delay={i * 90}>
                                    <div
                                        className="titp-card-hover rounded-xl overflow-hidden"
                                        style={{ background: "#fff", border: "1px solid rgba(249,115,22,0.12)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
                                    >
                                        {/* Image strip */}
                                        <div className="titp-img-zoom relative overflow-hidden" style={{ height: 160 }}>
                                            <img src={b.img} alt={b.label} className="w-full h-full object-cover" style={{ filter: "brightness(0.75) saturate(0.85)" }} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            <div className="absolute bottom-3 left-4 flex items-center gap-2">
                                                <span className="text-lg">{b.icon}</span>
                                                <span className="text-xs font-semibold tracking-widest uppercase text-white/90">{b.label}</span>
                                            </div>
                                        </div>
                                        {/* Text */}
                                        <div className="p-5">
                                            <p className="text-sm leading-relaxed text-stone-600">{b.text}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* ══ Stats ══ */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
                        {[
                            { value: 402356, suffix: "", label: "Beneficiaries in 2020", delay: 0 },
                            { value: 17, suffix: "+", label: "Participating Countries", delay: 80 },
                            { value: 105, suffix: "", label: "Students Placed in Japan", delay: 160 },
                            { value: 1993, suffix: "", label: "Programme Est.", delay: 240 },
                        ].map(({ value, suffix, label, delay }) => (
                            <Reveal key={label} delay={delay}>
                                <div
                                    className="titp-card-hover rounded-xl p-6 text-center"
                                    style={{ background: "#fff", border: "1px solid rgba(249,115,22,0.12)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                                >
                                    <div className="titp-font-display text-4xl font-bold text-orange-500 leading-none mb-2">
                                        <CountUp target={value} suffix={suffix} />
                                    </div>
                                    <p className="titp-font-body text-[10px] uppercase tracking-widest text-stone-400 mt-1">{label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* ══ Japan imagery strip ══ */}
                    {/* <Reveal className="mb-20">
                        <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden" style={{ height: 260 }}>
                            <div className="titp-img-zoom overflow-hidden rounded-xl">
                                <img src={IMGS.japan1} alt="Japan" className="w-full h-full object-cover" style={{ filter: "brightness(0.8)" }} />
                            </div>
                            <div className="grid grid-rows-2 gap-3">
                                <div className="titp-img-zoom overflow-hidden rounded-xl">
                                    <img src={IMGS.students} alt="Students" className="w-full h-full object-cover" style={{ filter: "brightness(0.8)" }} />
                                </div>
                                <div className="titp-img-zoom overflow-hidden rounded-xl">
                                    <img src={IMGS.japan2} alt="Japan landscape" className="w-full h-full object-cover" style={{ filter: "brightness(0.8)" }} />
                                </div>
                            </div>
                        </div>
                    </Reveal> */}

                    {/* ══ Countries ══ */}
                    <div className="mb-4">
                        <Reveal className="mb-8">
                            <div className="flex items-center gap-3.5">
                                <div className="w-8 h-px bg-orange-500" />
                                <h3 className="titp-font-display text-2xl sm:text-3xl font-bold text-stone-800">
                                    Participating <em className="text-orange-500 not-italic">Countries</em>
                                </h3>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                            {/* Countries card */}
                            <Reveal dir="left" delay={0}>
                                <div
                                    className="rounded-2xl p-6 sm:p-8"
                                    style={{ background: "#fff", border: "1px solid rgba(249,115,22,0.12)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                                >
                                    <div className="mb-6 pb-6 border-b border-stone-100">
                                        <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-stone-400 mb-3">Country of Destination</p>
                                        <CountryPill name="🇯🇵 Japan" isDestination />
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-stone-100">
                                        <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-stone-400 mb-3">Countries of Origin</p>
                                        <div className="flex flex-wrap gap-2">
                                            {originCountries.map((c) => <CountryPill key={c} name={c} />)}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { label: "Skill Level", value: "Low" },
                                            { label: "Timeline", value: "1993 – Ongoing" },
                                            { label: "Beneficiaries (2020)", value: "402,356" },
                                        ].map(({ label, value }) => (
                                            <div key={label}>
                                                <p className="text-[10px] tracking-widest uppercase text-stone-400 mb-1">{label}</p>
                                                <p className="text-sm font-semibold text-stone-700">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            {/* Map / globe visual */}
                            <Reveal dir="right" delay={100}>
                                <div className="titp-img-zoom rounded-2xl overflow-hidden shadow-lg" style={{ height: 360, border: "1px solid rgba(249,115,22,0.12)" }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=80"
                                        alt="World map globe"
                                        className="w-full h-full object-cover"
                                        style={{ filter: "brightness(0.7) saturate(0.7)" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 pointer-events-none" style={{ position: "relative", marginTop: -360 }}>
                                        <p className="titp-font-display text-2xl font-bold text-white leading-snug">
                                            Including Japan some of the countries commonly associated with participating in the TITP program
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* Bottom divider */}
                <div className="flex items-center gap-6 pb-10 max-w-6xl mx-auto px-6 sm:px-10">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
                    <p className="text-[11px] tracking-widest uppercase whitespace-nowrap text-stone-400">
                        <span className="text-orange-500">IGCSM</span> — Indo Japan TITP
                    </p>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
                </div>
            </section>
        </>
    );
}