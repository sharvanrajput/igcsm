import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { ArrowRight, BookCopy, MoveRight, Star, StarIcon } from 'lucide-react';
import { FaStar } from 'react-icons/fa';

import c1 from "@/assets/images/c1.jpg"
import c2 from "@/assets/images/c2.jpg"
import c3 from "@/assets/images/c3.jpg"
import c4 from "@/assets/images/c4.jpg"


import v1 from "@/assets/videos/fashion_design.mp4"
import v2 from "@/assets/videos/intrior.mp4"
import v3 from "@/assets/videos/teacher_traning.mp4"
import v4 from "@/assets/videos/computer_application.mp4"



import { useEffect, useRef, useState } from "react";

const CoursesSection = () => {
    // Sample course data
    const courseCategories = [
        {
            id: 1,
            title: 'CERTIFICATE',
            image: c1,

        },
        {
            id: 2,
            title: 'DIPLOMA',
            image: c2,

        },
        {
            id: 3,
            title: 'ADVANCE DIPLOMAC',
            image: c3,

        },
        {
            id: 4,
            title: 'P. G. DIPLOMA',
            image: c4,

        }
    ];

    const featuredCourses = [
        {
            id: 1,
            title: 'Post Graduate Diploma In Computer Application',
            duration: '1 Year',
            level: '12th (PCB)',
            rating: 4.6,
            reviews: '3.8K',
            video: v4,
            badges: [
                { icon: '🏛️', alt: 'University Badge' },
                { icon: '🎓', alt: 'Certification Badge' }
            ]
        },
        {
            id: 2,
            title: 'Diploma In Pre Primary Teacher Training',
            duration: '2 Years',
            level: '12th (PCB)',
            rating: 4.8,
            reviews: '5.2K',
            video: v3,
            badges: [
                { icon: '🏛️', alt: 'University Badge' },
                { icon: '🎓', alt: 'Certification Badge' }
            ]
        },
        {
            id: 3,
            title: 'Diploma In Fashion Designing',
            duration: '2 Years',
            level: '12th (PCB)',
            rating: 4.7,
            reviews: '4.1K',
            video: v1,
            badges: [
                { icon: '🏛️', alt: 'University Badge' },
                { icon: '🎓', alt: 'Certification Badge' }
            ]
        },
        {
            id: 4,
            title: 'Diploma In Interior Designing',
            duration: '2 Years',
            level: '12th (PCB)',
            rating: 4.5,
            reviews: '2.9K',
            video: v2,
            badges: [
                { icon: '🏛️', alt: 'University Badge' },
                { icon: '🎓', alt: 'Certification Badge' }
            ]
        }
    ];


    const [isHovering, setIsHovering] = useState(false);
    const [offsets, setOffsets] = useState(courseCategories.map(() => 0));
    const [hoveredCard, setHoveredCard] = useState(null);
    const frameRef = useRef(null);
    const startTimeRef = useRef(null);
    const exitTimeRef = useRef(null);

    useEffect(() => {
        const animate = (timestamp) => {
            if (isHovering) {
                exitTimeRef.current = null;
                if (!startTimeRef.current) startTimeRef.current = timestamp;
                const t = (timestamp - startTimeRef.current) / 1000;

                setOffsets(
                    courseCategories.map((_, i) => {
                        const col = i % 4;
                        const row = Math.floor(i / 4);
                        const phase = col * 0.6 + row * 0.4;
                        return Math.sin(t * 3 + phase) * 8;
                    })
                );
            } else {
                if (!exitTimeRef.current) exitTimeRef.current = timestamp;

                setOffsets((prev) => {
                    const next = prev.map((v) => v * 0.85);
                    const allDone = next.every((v) => Math.abs(v) < 0.05);
                    if (allDone) {
                        startTimeRef.current = null;
                        cancelAnimationFrame(frameRef.current);
                        return courseCategories.map(() => 0);
                    }
                    return next;
                });
            }

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, [isHovering])

    return (
        <section className=" py-17 bg-linear-to-r from-orange-300/80 to-orange-300/80  px-4 sm:px-6 md:px-8 relative overflow-hidden">
            {/* Decorative Elements */}

            <style>{`
                @keyframes flip360 {
                    0%   { transform: rotatez(0deg); scale:0.92 }

                   
                    40% { transform: rotatez(-10deg);scale:0.92  }
                    80% { transform: rotatez(10deg); scale:0.92 }
                    100% { transform: rotatez(0deg); scale:0.92 }
                }
                .flip-card-inner {
                    animation: none;
                    transform-style: preserve-3d;
                }
                .flip-card-inner.flipping {
                    animation: flip360 0.6s ease-in-out forwards;
                }
            `}</style>

            {/* Dotted Pattern - Hidden on mobile and tablet */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 hidden lg:block">
                <div className="grid grid-cols-6 gap-1.5 md:gap-2">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-400  rounded-full opacity-40"></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className=" space-y-4  sm:space-y-6 ">
                        <div>
                            <h2 data-aos="fade-right" data-aos-duration="600" className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-3 sm:mb-2 md:mb-3  ">
                                <span className=''>Skills and Vocational Courses</span>
                                <span className=" text-orange-500  mt-1 sm:mt-2"> will make you future ready </span>
                            </h2>
                            <p data-aos="zoom-out-up" data-aos-duration="600" className="text-gray-700 text-md! sm:text-base md:text-lg leading-relaxed">
                                Explore our diverse courses at IGCSM ,
                                designed to equip you with essential skills for an excelling career
                                in the  industry.
                            </p>
                        </div>

                        {/* Course Categories Grid */}
                        <div
                            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => {
                                setIsHovering(false);
                                setHoveredCard(null);
                            }}
                        >
                            {courseCategories.map((category, i) => (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={(i + 1) * 200}
                                    key={category.id}
                                    className="group relative overflow-hidden rounded-md cursor-pointer hover:shadow-2xl"
                                    style={{
                                        transform: `translateY(${offsets[i]}px)`,
                                        perspective: "800px",
                                    }}
                                    onMouseEnter={() => setHoveredCard(category.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Flip wrapper */}
                                    <div
                                        className={`flip-card-inner ${hoveredCard === category.id ? "flipping" : ""}`}
                                    >
                                        {/* Image / Banner */}
                                        <div className="h-[150px] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-300"></div>
                                            <img src={category.image} alt="" className="w-full h-full object-cover" />
                                        </div>

                                        {/* Label */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-orange-500 py-1 text-center">
                                            <span className="text-white font-semibold text-[11px]!">
                                                {category.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 c">
                            <button className="w-full xs:w-auto group   text-white-900 font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg transition-all duration-300 bg-orange-500 text-white   shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                                Enquire Now
                                <ArrowRight />
                            </button>

                        </div>
                    </div>

                    {/* Right Side - Featured Course Swiper */}
                    <div data-aos="fade-left" className="relative mt-8 lg:mt-0">
                        {/* Header Badge */}
                        <div className='w-[80%] mx-auto rounded-md overflow-hidden'>


                            <div className="bg-linear-to-r from-orange-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3     font-semibold text-base sm:text-lg shadow-lg">
                                Courses You Shouldn't Miss
                            </div>

                            {/* Swiper Container */}
                            <div className="  overflow-hidden">
                                {/* <Swiper
                                    modules={[Autoplay, Pagination, Navigation, FreeMode]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 0, // key for continuous motion
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    freeMode={true}
                                    freeModeMomentum={false}
                                    allowTouchMove={false}
                                    pagination={{
                                        clickable: true,
                                        bulletActiveClass: 'swiper-pagination-bullet-active',
                                    }}
                                    navigation={false}
                                    loop={true}
                                    className="featured-courses-swiper"
                                > */}
                                <Swiper
                                    modules={[Autoplay, FreeMode]}
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    loop={true}

                                    speed={6000} // ⭐ smooth long motion

                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}

                                    freeMode={true}
                                    freeModeMomentum={false}
                                    allowTouchMove={false}

                                    className="featured-courses-swiper continuous-swiper"
                                >
                                    {featuredCourses.map((course) => (
                                        <SwiperSlide key={course.id}>
                                            <div className="relative w-full h-96 sm:h-96 md:h-96 lg:h-87">
                                                {/* Course Video Background */}
                                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-600 relative overflow-hidden">
                                                    <video
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="w-full h-full object-cover"
                                                    >
                                                        <source src={course.video} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>

                                                    {/* Dark Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                                </div>

                                                {/* Course Info Overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                                                    <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-1 md:mb-2 line-clamp-2 border-b-2 border-orange-500 pb-3">{course.title}</h3>

                                                    {/* Course Meta */}
                                                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 flex-wrap">
                                                        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                                                            <FaStar className="text-yellow-400" />
                                                            <span>{course.duration}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                            </svg>
                                                            <span>{course.level}</span>
                                                        </div>
                                                    </div>

                                                    {/* Rating and Badges */}
                                                    <div className="flex items-center justify-between flex-wrap gap-3 mb-3 sm:mb-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center gap-1 bg-orange-500 px-2 sm:px-2 py-1 rounded-sm sm:rounded-lg">
                                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-white" viewBox="0 0 20 20">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <span className="font-bold text-xs sm:text-sm">{course.rating}</span>
                                                                <span className="text-[10px] sm:text-xs">({course.reviews})</span>
                                                            </div>

                                                            {/* University Badges */}
                                                            <div className="flex items-center gap-1.5 sm:gap-2">
                                                                {course.badges.map((badge, idx) => (
                                                                    <div key={idx} className="rounded-md sm:rounded-lg flex items-center justify-center shadow-md">
                                                                        <span className="text-base sm:text-lg md:text-xl">{badge.icon}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Enquire Button */}
                                                    <button className="w-full sm:w-auto px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base">
                                                        Enquire Now
                                                        <MoveRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section >
    );
};

export default CoursesSection;