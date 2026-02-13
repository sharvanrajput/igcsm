import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CoursesSection = () => {
    // Sample course data
    const courseCategories = [
        {
            id: 1,
            title: 'CERTIFICATE',
            image: '/images/certificate.jpg',
            color: 'bg-amber-500'
        },
        {
            id: 2,
            title: 'DIPLOMA',
            image: '/images/diploma.jpg',
            color: 'bg-blue-800'
        },
        {
            id: 3,
            title: 'ADVANCE DIPLOMAC',
            image: '/images/bvoc.jpg',
            color: 'bg-blue-800'
        },
        {
            id: 4,
            title: 'P. G. DIPLOMA',
            image: '/images/mvoc.jpg',
            color: 'bg-blue-800'
        }
    ];

    const featuredCourses = [
        {
            id: 1,
            title: 'Pharmacy Assistant',
            duration: '6 Months',
            level: '12th (PCB)',
            rating: 4.6,
            reviews: '3.8K',
            image: '/images/pharmacy.jpg',
            badges: [
                { icon: '🏛️', alt: 'University Badge' },
                { icon: '🎓', alt: 'Certification Badge' }
            ]
        },
        {
            id: 2,
            title: 'Medical Laboratory Technology',
            duration: '2 Years',
            level: '12th (PCB)',
            rating: 4.8,
            reviews: '5.2K',
            image: '/images/mlt.jpg',
            badges: [
                { icon: '🏛️', alt: 'University Badge' },
                { icon: '🎓', alt: 'Certification Badge' }
            ]
        },
        {
            id: 3,
            title: 'Radiology & Imaging Technology',
            duration: '2 Years',
            level: '12th (PCB)',
            rating: 4.7,
            reviews: '4.1K',
            image: '/images/radiology.jpg',
            badges: [
                { icon: '🏛️', alt: 'University Badge' },
                { icon: '🎓', alt: 'Certification Badge' }
            ]
        },
        {
            id: 4,
            title: 'Operation Theatre Technology',
            duration: '2 Years',
            level: '12th (PCB)',
            rating: 4.5,
            reviews: '2.9K',
            image: '/images/ot.jpg',
            badges: [
                { icon: '🏛️', alt: 'University Badge' },
                { icon: '🎓', alt: 'Certification Badge' }
            ]
        }
    ];

    return (
        <section className="bg-linear-to-br from-green-900 via-green-800 to-green-900 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-orange-700 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-orange-600 rounded-full blur-3xl opacity-10"></div>

            {/* Dotted Pattern - Hidden on mobile and tablet */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 hidden lg:block">
                <div className="grid grid-cols-6 gap-1.5 md:gap-2">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-400 rounded-full opacity-40"></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="text-white space-y-4 sm:space-y-6 md:space-y-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                                <span className='italic'>Skills and Vocational Courses</span>  
                                <span className="  mt-1 sm:mt-2"> will make you future ready </span>
                            </h2>
                            <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed">
                                Explore our diverse courses at IGCSM ,
                                designed to equip you with essential skills for an excelling career
                                in the  industry.
                            </p>
                        </div>

                        {/* Course Categories Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                            {courseCategories.map((category) => (
                                <div
                                    key={category.id}
                                    className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    {/* Image / Banner */}
                                    <div className="aspect-[4/3] sm:aspect-[5/4] md:aspect-[3/4] bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-300"></div>

                                        {/* Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg
                                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white/30"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Label */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 ${category.color} py-2   px-2 sm:px-3 text-center`}
                                    >
                                        <span className="text-white font-semibold text-[11px] sm:text-sm!  leading-tight">
                                            {category.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <button className="w-full xs:w-auto group bg-white text-blue-900 font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-blue-50 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                                Enquire Now
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button className="w-full xs:w-auto group bg-transparent border-2 border-white text-white font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-900 flex items-center justify-center gap-2 text-sm sm:text-base">
                                Student Testimonials
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Featured Course Swiper */}
                    <div className="relative mt-8 lg:mt-0">
                        {/* Header Badge */}
                        <div className="bg-linear-to-r from-amber-500 to-amber-600 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-t-xl sm:rounded-t-md font-semibold text-base sm:text-lg shadow-lg">
                            Courses You Shouldn't Miss
                        </div>

                        {/* Swiper Container */}
                        <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-b-md   overflow-hidden">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                    bulletActiveClass: 'swiper-pagination-bullet-active',
                                }}
                                navigation={false}
                                loop={true}
                                className="featured-courses-swiper"
                            >
                                {featuredCourses.map((course) => (
                                    <SwiperSlide key={course.id}>
                                        <div className="relative">
                                            {/* Course Image */}
                                            <div className="aspect-4/3 sm:aspect-16/10 md:aspect-11/9 bg-linear-to-br from-gray-700 to-gray-600 relative overflow-hidden">
                                                {/* Placeholder Image */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>

                                                {/* Dark Overlay */}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>
                                            </div>

                                            {/* Course Info Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 line-clamp-2">{course.title}</h3>

                                                {/* Course Meta */}
                                                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 flex-wrap">
                                                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
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
                                                        <div className="flex items-center gap-1 bg-amber-500 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg">
                                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-white" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            <span className="font-bold text-xs sm:text-sm">{course.rating}</span>
                                                            <span className="text-[10px] sm:text-xs">({course.reviews})</span>
                                                        </div>

                                                        {/* University Badges */}
                                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                                            {course.badges.map((badge, idx) => (
                                                                <div key={idx} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/90 rounded-md sm:rounded-lg flex items-center justify-center shadow-md">
                                                                    <span className="text-base sm:text-lg md:text-xl">{badge.icon}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Enquire Button */}
                                                <button className="w-full sm:w-auto group bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base">
                                                    Enquire Now
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
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

            <style jsx>{`
                .featured-courses-swiper .swiper-pagination {
                    bottom: 16px;
                    padding: 0 16px;
                }
                
                @media (min-width: 640px) {
                    .featured-courses-swiper .swiper-pagination {
                        bottom: 20px;
                        padding: 0 20px;
                    }
                }
                
                .featured-courses-swiper .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.5);
                    width: 6px;
                    height: 6px;
                    opacity: 1;
                    margin: 0 3px;
                }
                
                @media (min-width: 640px) {
                    .featured-courses-swiper .swiper-pagination-bullet {
                        width: 8px;
                        height: 8px;
                        margin: 0 4px;
                    }
                }
                
                .featured-courses-swiper .swiper-pagination-bullet-active {
                    width: 20px;
                    border-radius: 4px;
                    background: #f59e0b !important;
                }
                
                @media (min-width: 640px) {
                    .featured-courses-swiper .swiper-pagination-bullet-active {
                        width: 24px;
                    }
                }
            `}</style>
        </section>
    );
};

export default CoursesSection;