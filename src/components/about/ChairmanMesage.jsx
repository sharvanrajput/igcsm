import { useEffect, useRef, useState } from "react";
// import chairman from "@/assets/images/chairman.webp"
// import chairman from "@/assets/images/chairman1.jpg"
import chairman from "@/assets/images/chariman2.jpg"
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const paragraphs = [
  "Education is essential for the growth and development of a country, but with skilled specific education it adds to the overall socio-economic and human resource development of the nation.",
  "We have been working on empowering youth through imparting various skill training programs along with NSQF/SSC aligned courses since 2008 and contributing towards 'Viksit Bharat (Progressive India)' and 'Akhand Bharat (One India)' to fulfill the vision of our Hon'ble Prime Minister Shri Narendra Modi of making India the 'Skill Capital of the World'. Over the years, we have had affiliations and partnerships with various Indian Government Organizations and Ministries such as Ministry of Rural Development (MoRD), State Skill Development Missions such as MoMA, UPSDM, MPSSDEGB, PBSSD, GNULM, RSLDC etc., Sector Skill Councils (SSC) and many other International as well as corporate organizations. Over the years, we have received 11 awards with 2 being International awards. Our associates and competitors alike recognize us today as a pioneer in bridging the gap between the industry requirements and the skill set of the aspirants by upskilling them in accordance with the present needs of various industries.",
  "Skilling is the essential ingredient that keeps the wheels of progress and development of a person running smoothly. The primary aim of skill development is to help the youth recognize their potential so as to maximize their contribution in nation building. The youth of a nation are the future leaders.",
  "In our pursuit of excellence, we have embarked on a journey to shape the future of education and inspire a new generation of innovative thinkers, problem solvers, and compassionate leaders by coming up with a State Private University, namely, Sikkim Global Technical University (SGTU) located in the beautiful valleys of Sikkim, known as Gateways of the Himalayas.",
  "Let us use our knowledge and skills for the betterment of society and to address the pressing challenges faced by humanity. We visualize making the world a better place by educating people and making them aware of their own conscience as well as working towards a sustainable and progressive future for generations to come.",
];

const stats = [
  { value: "11", label: "Awards" },
  { value: "2", label: "International" },
  { value: "15+", label: "Years" },
];

function AnimPara({ text, delay = 0, highlight = false }) {
  const [ref, inView] = useInView();
  return (
    <p
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        // fontFamily: highlight ? "'Cormorant Garamond', Georgia, serif" : "'Lora', Georgia, serif",
        fontSize: highlight ? "1.18rem" : "1rem",
        fontWeight: highlight ? "500" : "400",
        lineHeight: highlight ? "1.85" : "1.9",
        color: highlight ? "#1a1a2e" : "#3a3a4a",
        borderLeft: highlight ? "3px solid #c8973a" : "none",
        paddingLeft: highlight ? "1.25rem" : "0",
        marginBottom: "0",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {text}
    </p>
  );
}

export default function ChairmanMessage() {
  const [headerRef, headerInView] = useInView();
  const [imgRef, imgInView] = useInView();
  const [cardRef, cardInView] = useInView();

  return (
    <>
     

      <div className="chairman-wrapper">
        {/* Top accent band */}
        {/* <div className="top-band" /> */}

        {/* Section Header */}
        <div className="section-header">
          <div
            ref={headerRef}
            className={`fade-up ${headerInView ? "visible" : ""}`}
          >
           
            <h2 className="main-title">
             Message from the  <em>Chairman</em>
            </h2>
            <div className="ornamental-divider">
              <div className="ornamental-diamond" />
              <div className="ornamental-diamond" style={{ width: 5, height: 5, opacity: 0.5 }} />
              <div className="ornamental-diamond" />
            </div>
          </div>
        </div>

        {/* Main Body */}
        <div className="body-grid">
          {/* Left Column */}
          <div className="left-col">
            <div
              ref={imgRef}
              className={`fade-up ${imgInView ? "visible" : ""}`}
            >
              <div className="photo-frame">
                <div className="photo-frame-border" />
                <div className="photo-corner tl" />
                <div className="photo-corner br" />
                <img
                  className="photo-img"
                  src={chairman}
                  alt="Dr. Saurabh Singhal"
                  onError={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #e8ddd0 0%, #d4c4b0 100%)";
                  }}
                />
              </div>

              {/* Nameplate */}
              <div className="nameplate">
                <p className="nameplate-name">Dr. Saurabh Singhal</p>
                <p className="nameplate-title">Chairman — IGCSM</p>
              </div>

              {/* Stats */}
              <div className="stats-row">
                {stats.map(({ value, label }) => (
                  <div className="stat-item" key={label}>
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-col">
            <span className="big-quote">"</span>

            <div className="message-content">
              {/* Highlighted opening paragraph */}
              <AnimPara text={paragraphs[0]} delay={0} highlight={true} />

              {/* Main paragraphs */}
              {paragraphs.slice(1).map((para, i) => (
                <AnimPara key={i} text={para} delay={i * 80} />
              ))}
            </div>

            {/* Signature */}
            <div
              ref={cardRef}
              className={`signature-block fade-up ${cardInView ? "visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="sig-line" />
              <div className="sig-text-wrap">
                <span className="sig-name">Dr. Saurabh Singhal</span>
                <span className="sig-title">Chairman — IGCSM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent band */}
        <div className="bottom-band" />
      </div>
    </>
  );
}