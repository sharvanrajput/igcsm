
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { X, Play } from 'lucide-react';
import thumbnailImage from "@/assets/images/whypartner.jpg"

const WhyPartnerWithUs = ({

    videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
}) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVideoOpen]);

    const benefits = [
        { icon: '🎓', title: '30+ Years of Educational Excellence', color: 'text--600' },
        { icon: '💼', title: 'High-Volume Business Model', color: 'text-orange-600' },
        { icon: '🤝', title: 'End-to-End Franchise Support', color: 'text-blue-600' },
        { icon: '👨‍👩‍👧‍👦', title: 'Student-Friendly Financing', color: 'text-green-600' },
        { icon: '🏢', title: '80+ Branches Nationwide', color: 'text-orange-600' },
        { icon: '🏥', title: 'Premier Healthcare Education Provider', color: 'text-blue-600' }
    ];

    return (
        <>
            <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8  overflow-hidden">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-3 sm:space-y-4" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-orange-500 font-semibold text-sm sm:text-base">
                                    Why Partner With Us
                                </span>
                            </div>

                            <div>
                                <h2 data-aos="fade-right" data-aos-duration="600" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-2 md:mb-3">  Build Careers with{' '}

                                    Join our <span className="text-orange-500"> franchise opportunity to unlock </span>

                                    entrepreneurial  success.
                                </h2>
                            </div>

                            <p className="text-gray-600 text-base! leading-relaxed">
                                Welcome to GD Goenka Healthcare where we empower future healthcare professionals
                                with quality education industry expertise and career opportunities.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 ">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 group"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className=" shrink-0 w-7 h-7 sm:w-10 sm:h-10 bg-linear-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-xl sm:text-xl">{benefit.icon}</span>
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <p className={`  font-semibold text-sm!  leading-snug`}>
                                                {benefit.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Video Thumbnail */}
                        <div className="relative" data-aos="fade-left" data-aos-delay="200">
                            <div
                                className="relative rounded-2xl  overflow-hidden shadow-2xl group cursor-pointer"
                                onClick={() => setIsVideoOpen(true)}
                            >
                                {/* Image with linear Overlay */}
                                <div className="aspect-4/3 relative bg-linear-to-br from-teal-500 to-blue-700">
                                    <img
                                        src={thumbnailImage}
                                        alt="Franchise Partner"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

                                    {/* Play Button with Ripple */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            {/* Ripple Effects */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-full opacity-30 animate-ping"></div>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-full opacity-20 animate-pulse"></div>
                                            </div>

                                            {/* Play Button */}
                                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                                <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500 fill-orange-500 ml-1" />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* Decorative Blurs */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl -z-10"></div>
                            <div className="absolute -top-4 -left-4 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-2xl animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group shadow-lg"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Video */}
                        <iframe
                            className="w-full h-full"
                            src={``}
                            title="Franchise Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default WhyPartnerWithUs;