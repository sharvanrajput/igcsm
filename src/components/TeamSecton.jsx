import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
    FaChevronLeft, FaChevronRight,
    FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp
} from "react-icons/fa";

import member1 from "@/assets/images/abhay-pratap-singh.jpg";
import member2 from "@/assets/images/avinash-yadav.webp";
import member3 from "@/assets/images/inderjeet.webp";
import member4 from "@/assets/images/naval-chaudhary.jpg";
import member5 from "@/assets/images/sanjeev.webp";
import member6 from "@/assets/images/shivani-singh.webp";
import member7 from "@/assets/images/kapil-dev.webp";
import member8 from "@/assets/images/arvind-pandey.webp";
import member9 from "@/assets/images/prince-kumar-soni.webp";
import member10 from "@/assets/images/Sabir-Sir.jpeg";
import member11 from "@/assets/images/jitender.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useInView } from "./about/ChairmanMesage";

const teamData = [
    { id: "1", name: "Mr. Abhay Pratap Singh", image: member1, post: "Project Manager" },
    { id: "2", name: "Mr. Avinash Yadav", image: member2, post: "Sr. Project Manager" },
    { id: "3", name: "Mr. Inderjeet", image: member3, post: "Finance Head" },
    { id: "4", name: "Mr. Naval Chaudhary", image: member4, post: "Project Manager" },
    { id: "5", name: "Mr. Sanjeev Prajapati", image: member5, post: "Director (Project)" },
    { id: "6", name: "Ms. Shivani Singh", image: member6, post: "Project manager" },
    { id: "7", name: "Mr. Kapil Dev", image: member7, post: "Project manager" },
    { id: "8", name: "Mr. Arvind Pandey", image: member8, post: "Project manager" },
    { id: "9", name: "Mr. Prince Kumar Soni", image: member9, post: "Project manager" },
    { id: "10", name: "Mr. Sabir", image: member10, post: "Project manager" },
    { id: "11", name: "Mr. Jitender", image: member11, post: "Project manager" },

    // { id: "7", name: "Team", image: member7, post: "" },
];



// ── Member Card ──
function MemberCard({ member, isCenter }) {
    return (
        <div
            className={`
                group relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isCenter ? "scale-105 opacity-100 z-10" : "scale-95 opacity-80"}
            `}
        >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-md group-hover:shadow-2xl group-hover:shadow-orange-200/50 transition-shadow duration-500">

                {/* Image area */}
                <div className="relative h-55 sm:h-60 md:h-65 overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Permanent dark linear for text readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Orange tint on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-orange-600/70 via-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Social icons — spring up from center on hover */}


                    {/* Orange sweep bar at image bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-linear-to-r from-orange-500 via-orange-400 to-amber-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                </div>

                {/* Info block */}
                <div className="relative px-4 py-4 bg-white overflow-hidden">
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-orange-100/60 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-4 bottom-4 w-0.75 rounded-full bg-linear-to-b from-orange-500 to-amber-300 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-400 ease-out" />

                    <div className="pl-1 transition-all duration-300 group-hover:pl-3">
                        <h4 className="font-bold text-[14px] sm:text-[15px] text-stone-800 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                            {member.name}
                        </h4>
                        {member.post && (
                            <p className="text-[10px] sm:text-[11px] font-semibold text-stone-400 uppercase tracking-widest mt-0.5">
                                {member.post}
                            </p>
                        )}
                        <div className="mt-2 h-0.5 w-6 rounded-full bg-linear-to-r from-orange-500 to-amber-300 group-hover:w-12 transition-all duration-500 ease-out" />
                    </div>
                </div>
            </div>

            {/* Pulsing glow ring on active/center card only */}
            {isCenter && (
                <div className="absolute -inset-0.5 rounded-2xl border-2 border-orange-400/50 pointer-events-none animate-pulse" />
            )}
        </div>
    );
}

// ── Main Section ──
export default function TeamSection() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const total = teamData.length;
    const [headerRef, headerInView] = useInView();

    return (
        <>
            <section className="py-12  relative" >



                <div className="container overflow-hidden!">

                    <div className="section-header">
                        <div
                            ref={headerRef}
                            className={`fade-up ${headerInView ? "visible" : ""}`}
                        >

                            <h2 className="main-title">
                              Meet Our <em> Team</em>
                            </h2>
                            <div className="ornamental-divider">
                                <div className="ornamental-diamond" />
                                <div className="ornamental-diamond" style={{ width: 5, height: 5, opacity: 0.5 }} />
                                <div className="ornamental-diamond" />
                            </div>
                        </div>
                    </div>
                 
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute left-0 sm:left-5 top-[45%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg text-orange-500 flex items-center justify-center border border-orange-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-orange-200/60 hover:shadow-xl transition-all duration-250"
                    >
                        <ArrowLeft size={12} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute right-0 sm:right-5 top-[45%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg text-orange-500 flex items-center justify-center border border-orange-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-orange-200/60 hover:shadow-xl transition-all duration-250"
                    >
                        <ArrowRight size={12} />
                    </button>

                    <div className="">
                        <Swiper
                            onSwiper={(s) => (swiperRef.current = s)}
                            onSlideChange={(s) => setActiveIndex(s.realIndex)}
                            modules={[Autoplay]}
                            centeredSlides
                            loop={true}
                            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            slidesPerView={1.2}
                            spaceBetween={16}
                            breakpoints={{
                                480: { slidesPerView: 1.8, spaceBetween: 16 },
                                640: { slidesPerView: 2.2, spaceBetween: 20 },
                                768: { slidesPerView: 3, spaceBetween: 20 },
                                1024: { slidesPerView: 5, spaceBetween: 24 },
                            }}

                            className="py-5!"

                        >
                            {teamData.map((member) => (
                                <SwiperSlide key={member.id} className="" >
                                    {({ isActive }) => (
                                        <MemberCard member={member} isCenter={isActive} />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>




                </div>
            </section>

            <style>{`
                @keyframes teamFloat {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50%       { transform: translateY(-10px) rotate(180deg); }
                }
                .animate-\\[teamFloat_6s_ease-in-out_infinite\\]    { animation: teamFloat 6s ease-in-out infinite; }
                .animate-\\[teamFloat_8s_ease-in-out_infinite_2s\\] { animation: teamFloat 8s ease-in-out infinite 2s; }
            `}</style>
        </>
    );
}