


import { useEffect, useRef, useState } from "react";

function useInView() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
}

const paragraphs = [
    "Education is essential for the growth and development of a country, but with skilled specific education it adds to the overall socio-economic and human resource development of the nation.",
    "We have been working on empowering youth through imparting various skill training programs along with NSQF/SSC aligned courses since 2008 and contributing towards 'Viksit Bharat (Progressive India)' and 'Akhand Bharat (One India)' to fulfill the vision of our Hon'ble Prime Minister Shri Narendra Modi of making India the 'Skill Capital of the World'. Over the years, we have had affiliations and partnerships with various Indian Government Organizations and Ministries such as Ministry of Rural Development (MoRD), State Skill Development Missions such as MoMA, UPSDM, MPSSDEGB, PBSSD, GNULM, RSLDC etc., Sector Skill Councils (SSC) and many other International as well as corporate organizations. Over the years, we have received 11 awards with 2 being International awards. Our associates and competitors alike recognize us today as a pioneer in bridging the gap between the industry requirements and the skill set of the aspirants by upskilling them in accordance with the present needs of various industries. I believe them that hard work, sincerity and determination have made us stand firm despite all the challenges that we have faced all these years.",
    "Skilling is the essential ingredient that keeps the wheels of progress and development of a person running smoothly. The primary aim of skill development is to help the youth recognize their potential so as to maximize their contribution in nation building. The youth of a nation are the future leaders. We have always focused on doing right things and doing things right which I feel is a balancing act, and requires the development of good strategic operations to deliver the services in the most effective and efficient way possible.",
    "In our pursuit of excellence, we have embarked on a journey to shape the future of education and inspire a new generation of innovative thinkers, problem solvers, and compassionate leaders by coming up with a State Private University, namely, Sikkim Global Technical University (SGTU) located in the beautiful valleys of Sikkim, known as Gateways of the Himalayas. We strive to uphold the values of integrity, ethics, and social responsibility to ensure our contribution in SDG 4 and Viksit and Akhand Bharat.",
    "Let us use our knowledge and skills for the betterment of society and to address the pressing challenges faced by humanity. We visualize making the world a better place by educating people and making them aware of their own conscience as well as working towards a sustainable and progressive future for generations to come.",
];

function AnimPara({ text, delay = 0 }) {
    const [ref, inView] = useInView();
    return (
        <p
            ref={ref}
            style={{
                fontFamily: "'Lora', serif",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
                fontSize: "0.96rem",
                lineHeight: "1.95",
                color: "#44403c",
                marginBottom: "1.1rem",
            }}
        >
            {text}
        </p>
    );
}

function ScrollWave({ reverse = false }) {
    return (
        <div style={{ overflow: "hidden", lineHeight: 0, height: 52 }}>
            <div
                style={{
                    display: "flex",
                    width: "200%",
                    animation: `${reverse ? "waveLeft" : "waveRight"} 14s linear infinite`,
                }}
            >
                {[...Array(10)].map((_, i) => (
                    <svg key={i} viewBox="0 0 400 52" style={{ width: 400, flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0,26 C80,52 160,0 240,26 C320,52 360,0 400,26"
                            fill="none"
                            stroke="#ea580c"
                            strokeWidth="1.8"
                            opacity="0.22"
                        />
                    </svg>
                ))}
            </div>
        </div>
    );
}


export default function ChairmanMesage() {
    const [headerRef, headerInView] = useInView();
    const [imgRef, imgInView] = useInView();
    const [badgeRef, badgeInView] = useInView();
    const [sigRef, sigInView] = useInView();

    return (
        <section className="py-20" >


            {/* ── TOP ACCENT BAND ── */}
            <div style={{ background: "linear-gradient(135deg, #fff7ed 0%, #fef9f0 100%)" }}>
                {/* <ScrollWave /> */}

                {/* ── SECTION HEADER ── */}

                {/* <ScrollWave reverse /> */}
            </div>

            {/* ── MAIN BODY ── */}
            <div className="container">
                <div  >
                    <div className="grid  lg:grid-cols-2 grid-cols-1 gap-3 ">

                        {/* ── LEFT COLUMN: Photo + Nameplate ── */}
                        <div
                            ref={imgRef}
                            style={{
                                opacity: imgInView ? 1 : 0,
                                transform: imgInView ? "translateX(0)" : "translateX(-44px)",
                                transition: "opacity 0.9s ease, transform 0.9s ease",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            {/* Photo */}
                            <div
                                className="img-glow"
                                style={{
                                    borderRadius: "24px 24px 100px 24px",
                                    overflow: "hidden",
                                    border: "4px solid #fff7ed",
                                    outline: "2px solid rgba(234,88,12,0.18)",
                                    outlineOffset: 6,
                                    width: "100%",
                                    maxWidth: 380,
                                }}
                            >
                                <div className="img-float">
                                    <img
                                        src="https://igcsm.com/assets/img/team/chairmar.webp"
                                        alt="Dr. Saurabh Singhal – Chairman IGCSM"
                                        style={{ width: "100%", display: "block", objectFit: "cover" }}
                                        onError={(e) => {
                                            e.target.style.background = "#f3e8dc";
                                            e.target.style.minHeight = "400px";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Nameplate card */}
                            <div style={{
                                marginTop: "1.4rem",
                                width: "100%",
                                maxWidth: 380,
                                borderRadius: 16,
                                background: "linear-gradient(135deg, #1c1917 0%, #292524 100%)",
                                padding: "1.2rem 1.6rem",
                                boxShadow: "0 10px 36px rgba(0,0,0,0.2)",
                                position: "relative",
                                overflow: "hidden",
                            }}>
                                <div className="shimmer-line" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3 }} />
                                <p style={{
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "1.45rem",
                                    fontWeight: 700,
                                    color: "#fff",
                                    margin: "0 0 0.2rem",
                                }}>Dr. Saurabh Singhal</p>
                                <p style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.72rem",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "#f97316",
                                    fontWeight: 500,
                                    margin: 0,
                                }}>Chairman – IGCSM</p>

                                <div style={{
                                    display: "flex",
                                    gap: "1.2rem",
                                    marginTop: "1rem",
                                    paddingTop: "1rem",
                                    borderTop: "1px solid rgba(255,255,255,0.07)",
                                }}>
                                    {[["11", "Awards"], ["2", "Intl"], ["15+", "Years"]].map(([val, lbl]) => (
                                        <div key={lbl} style={{ textAlign: "center" }}>
                                            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.45rem", fontWeight: 700, color: "#f97316" }}>{val}</div>
                                            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{lbl}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT COLUMN: Message Text ── */}
                        <div>
                            {/* decorative quote mark */}
                            <div style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "7rem",
                                lineHeight: 0.55,
                                color: "#ea580c",
                                opacity: 0.12,
                                userSelect: "none",
                                marginBottom: "-1rem",
                            }}>"</div>

                            {/* First paragraph — highlighted */}
                            <div style={{
                                background: "linear-gradient(135deg, #fff7ed, #fef3e2)",
                                borderLeft: "4px solid #ea580c",
                                borderRadius: "0 14px 14px 0",
                                padding: "1.2rem 1.5rem",
                                marginBottom: "1.3rem",
                            }}>
                                <p style={{
                                    fontFamily: "'Lora', serif",
                                    fontSize: "1.03rem",
                                    fontStyle: "italic",
                                    color: "#1c1917",
                                    margin: 0,
                                    lineHeight: 1.85,
                                }}>
                                    {paragraphs[0]}
                                </p>
                            </div>


                        </div>

                    </div>
                    {/* Remaining paragraphs with scroll animation */}
                    {paragraphs.slice(1).map((para, i) => (
                        <AnimPara key={i} text={para} delay={i * 100} />
                    ))}

                    {/* Signature */}
                    <div
                        ref={sigRef}
                        style={{
                            marginTop: "2rem",
                            paddingTop: "1.5rem",
                            borderTop: "1px solid #f0e6da",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            opacity: sigInView ? 1 : 0,
                            transform: sigInView ? "translateY(0)" : "translateY(18px)",
                            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
                        }}
                    >
                        <div className="shimmer-line" style={{ width: 44, height: 3, borderRadius: 2, flexShrink: 0 }} />
                        <div>
                            <p style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "1.25rem",
                                fontWeight: 700,
                                color: "#1c1917",
                                margin: "0 0 0.15rem",
                            }}>Dr. Saurabh Singhal</p>
                            <p style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "0.72rem",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "#ea580c",
                                fontWeight: 600,
                                margin: 0,
                            }}>Chairman – IGCSM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── BOTTOM WAVE BAND ── */}
            <div style={{ background: "linear-gradient(135deg, #fff7ed 0%, #fef9f0 100%)" }}>
                <ScrollWave />
                <div style={{ padding: "1rem 0 2rem", textAlign: "center" }}>
                    <div className="shimmer-line" style={{ width: 80, height: 2, borderRadius: 2, margin: "0 auto" }} />
                </div>
            </div>
            <style>{`
      
        @keyframes waveRight {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes waveLeft {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmerBg {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glowRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(234,88,12,0.18), 0 16px 48px rgba(0,0,0,0.13); }
          50% { box-shadow: 0 0 0 14px rgba(234,88,12,0.04), 0 20px 56px rgba(0,0,0,0.18); }
        }
        @keyframes badgePop {
          0% { opacity: 0; transform: scale(0.5) rotate(-15deg); }
          70% { opacity: 1; transform: scale(1.06) rotate(3deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .img-float { animation: floatUp 6s ease-in-out infinite; }
        .img-glow { animation: glowRing 4s ease-in-out infinite; }
        .badge-rot { animation: rotateSlow 20s linear infinite; }
        .shimmer-line {
          background: linear-gradient(90deg, #ea580c, #f97316, #fcd34d, #f97316, #ea580c);
          background-size: 300% auto;
          animation: shimmerBg 3.5s linear infinite;
        }
      `}</style>
        </section>
    );
}