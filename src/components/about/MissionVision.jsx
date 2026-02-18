

import { useEffect, useState } from "react";

const tabs = [
    {
        id: "history",
        label: "History",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "IGCSM History",
        content:
            "IGCSM was registered as a Trust under the Indian Trust Act, 1882, on 15th September 2008, with its head office in Delhi. In the same year, it initiated five IT education centers for economically inefficient youth in Delhi and UP. With contributions from trustees and donations from well-wishers, it managed to train about 200 beneficiaries in less than six months.",
        stats: [
            { value: "2008", label: "Founded" },
            { value: "200+", label: "Trained" },
            { value: "5", label: "Centers" },
        ],
        accent: "#f97316",
    },
    {
        id: "mission",
        label: "Mission & Vision",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Mission & Vision",
        content:
            "Indira Gandhi Computer Shaksharta Mission (IGCSM) is an Indian not-for-profit organization working at the national level to uplift and empower the poor through education, skill development, and microfinance programs. With its head office in Delhi, IGCSM operates in more than 21 states across India through its development initiatives.",
        stats: [
            { value: "10K+", label: "Beneficiaries" },
            { value: "15+", label: "States" },
            { value: "98%", label: "Placement" },
        ],
        accent: "#f97316",
    },
    {
        id: "administration",
        label: "Administration",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Administration",
        content:
            "The administration of IGCSM (Indira Gandhi Computer Saksharta Mission) is dedicated to delivering high-quality education and skill development through its extensive network of centers across India. Focused on transparency, industry alignment, and continuous improvement, IGCSM ensures students gain practical expertise, supported by government affiliations and robust industry partnerships.",
        stats: [
            { value: "12", label: "Trustees" },
            { value: "50+", label: "Staff" },
            { value: "100%", label: "Transparent" },
        ],
        accent: "#f97316",
    },
];

export default function MissionVision() {
    const [active, setActive] = useState("history");
    const [animating, setAnimating] = useState(false);

    const current = tabs.find((t) => t.id === active);

    const handleTabClick = (id) => {
        if (id === active) return;
        setAnimating(true);
        setTimeout(() => {
            setActive(id);
            setAnimating(false);
        }, 250);
    };

    return (
        <section
        
            className="min-h-screen    flex items-center justify-center p-4 sm:p-8"
        >
            <style>{`
      
        .tab-btn {
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .tab-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.06), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tab-btn:hover::before { opacity: 1; }
        .tab-btn.active::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          border-radius: 0 2px 2px 0;
          background: var(--accent);
        }
        .content-fade-in {
          animation: fadeSlideUp 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .content-fade-out {
          animation: fadeSlideDown 0.25s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideDown {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-10px); }
        }
        .stat-card {
          transition: transform 0.2s, background 0.2s;
        }
        .stat-card:hover {
          transform: translateY(-3px);
        }
        .bg-blur-panel {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .tab-icon-ring {
          transition: all 0.3s;
        }
        .tab-btn.active .tab-icon-ring {
          box-shadow: 0 0 0 2px var(--accent);
        }
      `}</style>

            <div className=" container   ">
                {/* Heading */}
                {/* <div className="mb-8 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-2">About us</p>
                    <h2 className="text-3xl sm:text-4xl   font-bold">
                        Who We <span style={{ color: "#f97316" }}>Are</span>
                    </h2>
                </div> */}

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
                    {/* LEFT: Image + Tabs */}
                    <div className="relative w-full lg:w-[420px] flex-shrink-0 rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[460px]">
                        {/* Background image */}
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                            alt="bg"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1117]/70 via-[#0f1117]/40 to-transparent" />

                        {/* Tabs stacked */}
                        <div className="absolute bottom-5 right-0 w-[64%] sm:w-[58%] flex flex-col gap-2.5 pr-3 sm:pr-4">
                            {tabs.map((tab) => {
                                const isActive = tab.id === active;
                                return (
                                    <button
                                        key={tab.id}
                                        className={`tab-btn ${isActive ? "active" : ""} flex items-center gap-3 px-4 py-3 rounded-xl text-left`}
                                        style={{
                                            "--accent": tab.accent,
                                            background: isActive
                                                ? `rgba(15,17,23,0.92)`
                                                : "rgba(15,17,23,0.65)",
                                            border: isActive
                                                ? `1px solid ${tab.accent}44`
                                                : "1px solid rgba(255,255,255,0.06)",
                                        }}
                                        onClick={() => handleTabClick(tab.id)}
                                    >
                                        <span
                                            className="tab-icon-ring flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                                            style={{
                                                "--accent": tab.accent,
                                                background: isActive ? tab.accent : "rgba(255,255,255,0.08)",
                                                color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                                            }}
                                        >
                                            {tab.icon}
                                        </span>
                                        <span
                                            className="text-sm font-500 leading-tight"
                                            style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.55)", fontWeight: isActive ? 600 : 400 }}
                                        >
                                            {tab.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT: Content */}
                    <div className="flex-1   rounded-2xl  sm:p-8 flex flex-col justify-between border border-white/5 ">
                        <div
                            key={active}
                            className={animating ? "content-fade-out" : "content-fade-in"}
                        >
                            {/* Title */}
                            <div className="flex items-center gap-3 mb-5">
                                {/* <span
                                    className="w-10 h-10 rounded-xl flex items-center justify-center   flex-shrink-0"
                                    style={{ background: current.accent }}
                                >
                                    {current.icon}
                                </span> */}
                                <h2
                                    
                                    className="text-2xl sm:text-3xl font-bold"
                                >
                                    {current.title}
                                </h2>
                            </div>

                            {/* Divider */}
                            <div className="h-px mb-5" style={{ background: `linear-gradient(to right, ${current.accent}55, transparent)` }} />

                            {/* Text */}
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                                {current.content}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3">
                                {current.stats.map((s) => (
                                    <div
                                        key={s.label}
                                        className="stat-card rounded-xl p-4 text-center"
                                        style={{ background: `${current.accent}12`, border: `1px solid ${current.accent}22` }}
                                    >
                                        <div
                                            className="text-2xl sm:text-3xl font-bold mb-1"
                                            
                                        >
                                            {s.value}
                                        </div>
                                        <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom accent */}
                        <div className="mt-6 flex items-center gap-2">
                            {tabs.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => handleTabClick(t.id)}
                                    className="h-1 rounded-full transition-all duration-300"
                                    style={{
                                        background: t.id === active ? t.accent : "rgba(0,0,0,0.40)",
                                        width: t.id === active ? "2rem" : "0.5rem",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}