import React from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {
    FaAward,
    FaTrophy,
    FaMedal,
    FaCertificate,
    FaUsers,
    FaStar
} from "react-icons/fa";
import Counter from './Counter';


export const awardsData = [
    {
        id: 1,
        head: "Best Training Institute Award",
        title: "Recognized for excellence in professional training programs.",
        icon: FaAward,
    },
    {
        id: 2,
        head: "National Skill Development Recognition",
        title: "Awarded for outstanding contribution to skill development.",
        icon: FaTrophy,
    },
    {
        id: 3,
        head: "ISO Certified Institution",
        title: "Certified for maintaining high-quality education standards.",
        icon: FaCertificate,
    },
    {
        id: 4,
        head: "500+ Placement Partners",
        title: "Strong industry network helping students secure jobs.",
        icon: FaUsers,
    },
    {
        id: 5,
        head: "Top Rated by Students",
        title: "Consistently rated highly for teaching and support.",
        icon: FaStar,
    },
    {
        id: 6,
        head: "Excellence in Education Medal",
        title: "Honored for innovation in digital learning methods.",
        icon: FaMedal,
    },
];


const AwardsSlider = () => {
    // Sample awards data

    const statistics = [
        { value: 30,  suffix:"+" , label: 'Years of Legacy' },
        { value: 99,  suffix:"%" , label: 'Placement Success' },
        { value: 100, suffix:"+" ,  label: 'Centers Across India' },
        { value: 500, suffix:"+" ,  label: 'Placement Partners' },
    ];

    // Awards logos data
    const awards = [
        {
            id: 1,
            name: 'Times School',
            description: 'Survey Awards',
            logo: 'TIMES',
            subtext: 'Top School Award'
        },
        {
            id: 2,
            name: 'ASSOCHAM',
            description: 'Excellence Award',
            logo: 'ASSOCHAM',
            subtext: 'Quality Education'
        },
        {
            id: 3,
            name: 'Education Excellence',
            description: 'National Award',
            logo: 'AWARD',
            subtext: 'Best Institution 2024'
        },
        {
            id: 4,
            name: 'Forbes',
            description: 'Top Ranking',
            logo: 'FORBES',
            subtext: 'Best College'
        },
        {
            id: 5,
            name: 'NAAC',
            description: 'A+ Accredited',
            logo: 'NAAC',
            subtext: 'Grade A+'
        },
    ];


    return (
        <section className="w-full bg-white">
            {/* Statistics Bar */}
            <div className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-800">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
                        {statistics.map((stat, index) => (
                            <div
                                key={index}
                                className="py-4 sm:py-5 md:py-6 text-center text-white"
                            >
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base font-medium opacity-90">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                        {/* <Counter number={100} title="check" /> */}
                        {/* <CountUp end={100} /> */}
                    </div>
                </div>
            </div>

            {/* Awards Section */}
            <div className=" py-12 sm:py-16 md:pt-15 ">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    {/* Section Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-3 sm:mb-4 md:mb-6 text-center leading-tight">               Awards & Achievements
                    </h2>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 }
                        }}
                        className="pb-12"
                    >
                        {awardsData.map((item) => {
                            const Icon = item.icon;
                            return (
                                <SwiperSlide key={item.id} className="mb-10">
                                    <div className="bg-white flex h-full!  rounded-2xl p-6 gap-3  shadow-sm hover:shadow-xl transition ">
                                        <Icon className="text-orange-500 text-3xl size-10  flex-nowrap " />
                                        <div>
                                            <h3 className="text-gray-900 font-semibold text-sm">{item.head}</h3>
                                            <p className="text-gray-500 text-sm!">{item.title}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>


                </div>
            </div>
        </section>
    );
};

export default AwardsSlider;