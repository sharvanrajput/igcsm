import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";

import politician1 from "@/assets/images/politician1.jpg";
import politician2 from "@/assets/images/politician2.jpg";
import politician3 from "@/assets/images/politician3.jpg";
import politician4 from "@/assets/images/politician4.jpg";
import politician5 from "@/assets/images/politician5.jpg";

const appreciationData = [
    { id: "1", name: "shri yogi adityanath", post: "hon'ble chief minister of up", image: politician2 },
    { id: "2", name: "shri Kunga Nima Lepcha", post: "member of the sikkim legislative assembly", image: politician3 },
    { id: "3", name: "shri giriraj singh", post: "minister of rural development and panchayati raj", image: politician4 },
    { id: "4", name: "shri Prem singh tamang", post: "hon'ble chief minister of sikkim", image: politician5 },
    { id: "5", name: "shri Narendra modi", post: "hon'ble prime minister of india", image: politician1 },
];

// ── Profile Card ──
function ProfileCard({ politician, isCenter }) {
    const words = politician.name?.trim()?.split(" ") ?? [];
    const lastName = words.pop();
    const firstPart = words.join(" ");

    return (
        <div
            className={`
                group relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isCenter ? "scale-105 opacity-100 z-10" : "scale-95 opacity-70"}
            `}
        >
            {/* Pulsing glow ring on center card */}
            {isCenter && (
                <div className="absolute -inset-0.5 rounded-3xl border-2 border-orange-400/60 pointer-events-none animate-pulse z-20" />
            )}

            {/* Card */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-md group-hover:shadow-2xl group-hover:shadow-orange-200/60 transition-shadow duration-500">

                {/* Top tricolor strip */}
                <div className="h-1 w-full flex">
                    <div className="flex-1 bg-orange-400" />
                    <div className="flex-1 bg-white border-y border-gray-100" />
                    <div className="flex-1 bg-green-600" />
                </div>

                {/* Header gradient bg */}
                <div className="relative bg-gradient-to-br from-orange-50 to-green-50 flex flex-col items-center pt-7 pb-5 px-5 overflow-hidden">

                    {/* Decorative blobs */}
                    <div className="absolute -top-5 -right-5 w-24 h-24 bg-orange-100 opacity-50 rounded-full pointer-events-none" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 opacity-50 rounded-full pointer-events-none" />

                    {/* Spinning ring + image */}
                    <div className="relative w-28 h-28 mb-4">
                        {/* Spinning conic ring */}
                        <div
                            className="absolute -inset-2 rounded-full"
                            style={{
                                background: "conic-gradient(#FF9933 0deg 100deg, transparent 100deg 180deg, #138808 180deg 280deg, transparent 280deg 360deg)",
                                animation: isCenter ? "spin 4s linear infinite" : "spin 7s linear infinite",
                            }}
                        />
                        {/* White separator */}
                        <div className="absolute inset-0 rounded-full bg-white" />
                        {/* Image */}
                        <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-orange-100">
                            <img
                                src={politician.image}
                                alt={politician.name}
                                className="w-full h-full object-cover object-top rounded-full transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        {/* Verified badge */}
                        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-bold shadow z-10">
                            ✓
                        </div>
                    </div>

                    {/* Name */}
                    <h2
                        className="text-center font-extrabold text-base leading-tight mb-2 capitalize"
                        style={{ fontFamily: "Georgia, serif" }}
                    >
                        <span className="text-gray-800">{firstPart} </span>
                        <span className="text-orange-500">{lastName}</span>
                    </h2>

                    {/* Divider */}
                    <div className="flex items-center gap-2 w-full mb-3">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-300" />
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-300" />
                    </div>

                    {/* Post badge */}
                    <div className="bg-white border border-orange-100 rounded-xl px-4 py-2 text-center shadow-sm w-full">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 leading-relaxed capitalize">
                            {politician.post}
                        </p>
                    </div>
                </div>

                {/* Bottom tricolor strip */}
                <div className="h-1 w-full flex">
                    <div className="flex-1 bg-orange-400" />
                    <div className="flex-1 bg-white border-y border-gray-100" />
                    <div className="flex-1 bg-green-600" />
                </div>
            </div>
        </div>
    );
}

// ── Main Section ──
const AppreciationSlicer = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <section className="py-12 sm:py-16 relative bg-gradient-to-br from-orange-50 via-white to-green-50">
                <div className="container overflow-hidden!">

                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-10">
                        
                        <h2
                            data-aos="fade-right"
                            data-aos-duration="600"
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800"
                        >
                            Our <span className="text-orange-500">Appreciation</span>
                        </h2>
                        <p className="text-sm text-gray-400 mt-2 font-medium">
                            Honoured by distinguished leaders of the nation
                        </p>
                    </div>

                    {/* Prev Button */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute left-0 sm:left-5 top-[50%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg text-orange-500 flex items-center justify-center border border-orange-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-orange-200/60 hover:shadow-xl transition-all duration-250"
                    >
                        <ArrowLeft size={14} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute right-0 sm:right-5 top-[50%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg text-orange-500 flex items-center justify-center border border-orange-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-orange-200/60 hover:shadow-xl transition-all duration-250"
                    >
                        <ArrowRight size={14} />
                    </button>

                    {/* Swiper */}
                    <Swiper
                        onSwiper={(s) => (swiperRef.current = s)}
                        onSlideChange={(s) => setActiveIndex(s.realIndex)}
                        modules={[Autoplay]}
                        centeredSlides
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        slidesPerView={1.2}
                        spaceBetween={16}
                        breakpoints={{
                            480: { slidesPerView: 1.8, spaceBetween: 16 },
                            640: { slidesPerView: 2.2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                        }}
                        className="py-6!"
                    >
                        {[...appreciationData,...appreciationData].map((politician) => (
                            <SwiperSlide key={politician.id}>
                                {({ isActive }) => (
                                    <ProfileCard politician={politician} isCenter={isActive} />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {appreciationData.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => swiperRef.current?.slideToLoop(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    activeIndex === i ? "w-6 bg-orange-500" : "w-2 bg-orange-200"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
};

export default AppreciationSlicer;