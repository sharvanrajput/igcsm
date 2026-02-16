import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import gallery1 from "@/assets/images/gallery1.webp"
import gallery2 from "@/assets/images/gallery2.webp"
import gallery3 from "@/assets/images/gallery3.webp"
import gallery4 from "@/assets/images/gallery4.jpeg"
import gallery5 from "@/assets/images/gallery5.jpeg"
import gallery6 from "@/assets/images/gallery6.jpeg"
import gallery7 from "@/assets/images/gallery7.jpeg"

export default function ImageGallery() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    const images = [
        {
            id: 1,
            src: gallery1
        },
        {
            id: 2,
            src: gallery2
        },
        {
            id: 3,
            src: gallery3
        },
        {
            id: 4,
            src: gallery4
        },
        {
            id: 5,
            src: gallery5
        },
        {
            id: 6,
            src: gallery6
        },

        {
            id: 7,
            src: gallery7
        },

    ];

    const openDialog = (index) => {
        setCurrentIndex(index);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const scrollToImage = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'next' ? 400 : -400;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            // Update current index
            if (direction === 'next' && currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else if (direction === 'prev' && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        }
    };

    // Scroll to the selected image when dialog opens
    useEffect(() => {
        if (isDialogOpen && carouselRef.current) {
            const imageWidth = carouselRef.current.offsetWidth;
            carouselRef.current.scrollTo({
                left: currentIndex * imageWidth,
                behavior: 'smooth'
            });
        }
    }, [isDialogOpen, currentIndex]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isDialogOpen) return;

            if (e.key === 'Escape') closeDialog();
            if (e.key === 'ArrowLeft') scrollToImage('prev');
            if (e.key === 'ArrowRight') scrollToImage('next');
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isDialogOpen, currentIndex]);

    return (
        <section className=" bg-linear-to-l from-amber-300 to-orange-500 py-16 px-4">


            <div className="container">
                {/* Image Gallery Grid */}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">


                    <div className="mb-10  ">

                        <div className="flex relative flex-col gap-5  ">
                             <div className='size-50 absolute right-15 text-white rotate-70'>
                                <svg width="90" height="100" viewBox="0 0 90 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0605 0.220148C82.3012 0.571891 81.621 0.900181 76.7889 4.04241C72.2617 6.9736 69.7049 8.47437 61.7765 12.9532C54.4814 17.0803 47.7258 21.9578 45.7789 24.5138C44.3011 26.4601 44.9579 28.852 47.1159 29.5086C48.4295 29.9072 49.4381 29.4851 54.153 26.507C61.6357 21.8171 68.532 17.479 72.074 15.2513C73.974 14.0319 75.5926 13.0705 75.6395 13.1174C75.7099 13.2112 72.4728 17.69 66.9135 25.2173C49.4381 48.8075 39.0233 65.058 29.406 83.7473C21.196 99.646 13.3614 119.484 9.04537 135.242C3.83794 154.166 0.389773 178.319 0.0379198 198.228C-0.196649 211.313 0.647801 217.714 2.82929 219.543C3.55646 220.153 4.18979 220.317 4.18979 219.895C4.18979 219.754 4.00214 219.262 3.74411 218.77C2.80583 216.894 2.66509 215.463 2.66509 206.998C2.66509 197.102 3.46263 186.902 5.26881 173.465C8.15401 151.892 12.1886 135.172 18.7331 117.772C27.764 93.7367 37.5455 74.8599 53.1209 51.387C57.6011 44.6101 72.4024 23.9745 72.6135 24.1855C72.637 24.209 71.9333 26.2256 71.0419 28.6878C67.0543 39.6622 64.4036 50.449 63.7938 58.328C63.6765 60.0633 63.4888 63.7917 63.4184 66.6057C63.3012 71.108 63.3246 71.7177 63.653 71.8349C63.8641 71.9287 64.0987 71.9287 64.1691 71.8349C64.2394 71.7646 64.7555 68.9975 65.3185 65.6677C65.8814 62.3379 66.7259 58.117 67.1716 56.3114C69.9395 45.1728 79.2284 22.9896 85.4679 12.6015C89.3852 6.08252 90.1828 3.76102 89.1741 1.81471C88.2828 0.102898 86.9222 -0.31919 84.0605 0.220148Z" fill="currentColor" />
                                </svg>

                            </div>
                            <div>

                                <h2 className="text-3xl text-white mb-3 lg:text-4xl font-bold leading-tight">
                                    Gallery
                                </h2>
                                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam est deserunt quas hic. Officia eius deleniti tempora cupiditate quis asperiores.</p>
                            </div>
                            {/* Navigation Arrows */}

                            <div>
                                <div className="flex gap-3 mb-4">
                                    <button
                                        ref={prevRef}
                                        className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition"
                                    >
                                        <ChevronLeft />
                                    </button>

                                    <button
                                        ref={nextRef}
                                        className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition"
                                    >
                                        <ChevronRight />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-2">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                1024: { slidesPerView: 2 },
                                1280: { slidesPerView: 2 }
                            }}
                            className="pb-12"
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={image.id} className="mb-10">
                                    <button
                                        key={image.id}
                                        onClick={() => openDialog(index)}
                                        className="group relative aspect-square overflow-hidden rounded-sm  focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:scale-101"
                                    >

                                        <div className="absolute text-orange-500 cursor-pointer flex justify-center items-center opacity-0 group-hover:opacity-100  group-hover:bg-black/50 w-full h-full">
                                            <Eye size={30} />
                                        </div>

                                        <img
                                            src={image.src}
                                            alt={"gallery"}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        {/* Hover Overlay with Pin Icon */}

                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Dialog/Modal */}
            {isDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
                    <div className="relative w-full h-full max-w-4xl max-h-[90vh] md:max-h-[80vh] flex items-center justify-center">
                        {/* Carousel Container */}
                        <div
                            ref={carouselRef}
                            className="w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth flex hide-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {images.map((image, index) => (
                                <div
                                    key={image.id}
                                    className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center p-4"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Controls */}
                        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
                            {/* Previous Button */}
                            {currentIndex > 0 && (
                                <button
                                    onClick={() => scrollToImage('prev')}
                                    className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                            )}
                            <div className="flex-1"></div>
                            {/* Next Button */}
                            {currentIndex < images.length - 1 && (
                                <button
                                    onClick={() => scrollToImage('next')}
                                    className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                            )}
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeDialog}
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95 z-20"
                            aria-label="Close dialog"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm z-20">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </section>
    );
}