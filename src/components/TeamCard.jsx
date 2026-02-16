import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import member1 from "@/assets/images/abhay-pratap-singh.webp"
import member2 from "@/assets/images/inderjeet.webp"
import member3 from "@/assets/images/naval-chaudhary.webp"
import member4 from "@/assets/images/sanjeev.webp"
import member5 from "@/assets/images/shivani-singh.webp"
import member6 from "@/assets/images/team.webp"
import member7 from "@/assets/images/avinash-yadav.webp"





export default function ExpertTeam() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const teamMembers = [
        {
            id: 1,
            name: "Mr Abhay Pratap Singh",
            role: "Project Manager",
            image: member1,
            socials: [
                { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
                { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-blue-700" },
                { icon: <FaGooglePlusG />, link: "#", color: "hover:bg-red-600" },
            ]
        },
        {
            id: 2,
            name: "Mr Inderjeet",
            role: "Finance Head",
            image: member2,
            socials: [
                { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
                { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-blue-700" },
                { icon: <FaGooglePlusG />, link: "#", color: "hover:bg-red-600" },
            ]
        },
        {
            id: 3,
            name: "Mr Naval Chaudhary",
            role: "Project Manager",
            image: member3,
            socials: [
                { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
                { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-blue-700" },
                { icon: <FaGooglePlusG />, link: "#", color: "hover:bg-red-600" },
            ],
            isGroup: true,
        },
        {
            id: 4,
            name: "Mr Sanjeev",
            role: "Director (Projects)",
            image: member4,
            socials: [
                { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
                { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-blue-700" },
                { icon: <FaGooglePlusG />, link: "#", color: "hover:bg-red-600" },
            ]
        },
        {
            id: 5,
            name: "Ms Shivani Singh",
            role: "Project Manager",
            image: member5,
            socials: [
                { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
                { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-blue-700" },
                { icon: <FaGooglePlusG />, link: "#", color: "hover:bg-red-600" },
            ]
        },
        {
            id: 6,
            name: "Team",
            role: "Our Team",
            image: member6,
            socials: [
                { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
                { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-blue-700" },
                { icon: <FaGooglePlusG />, link: "#", color: "hover:bg-red-600" },
            ]
        },
        {
            id: 7,
            name: "Mr Avinash Yadav",
            role: "Sr. Project Manager",
            image: member7,
            socials: [
                { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
                { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-blue-700" },
                { icon: <FaGooglePlusG />, link: "#", color: "hover:bg-red-600" },
            ]
        },
    ];

    const socials = [
        { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
        { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
        { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-blue-700" },
        { icon: <FaGooglePlusG />, link: "#", color: "hover:bg-red-600" },
    ];

    return (
        <section className="py-15 px-4 ">
            <div className="container">
                {/* Section Header */}
                <div className="mb-10">
                   
                    <div className="flex items-center ">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                            Expert Team
                        </h2>
                        {/* Navigation Arrows */}

                        <div className='rotate-40 ms-10 text-orange-600'>

                            <svg width="100" height="73" viewBox="0 0 149 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M137.863 0.579489C137.792 0.790681 137.722 1.35386 137.722 1.84664C137.722 2.33943 137.558 4.1463 137.346 5.88277C136.877 9.8485 137.041 15.8792 137.722 19.3287C137.98 20.6193 138.191 21.7222 138.191 21.7926C138.168 21.9804 137.182 20.7601 134.86 17.733C131.763 13.65 130.355 12.0778 127.54 9.59038C119.399 2.38636 111.869 -0.523407 104.408 0.696818C100.584 1.30693 94.9773 3.77085 91.4113 6.37556C83.6695 12.0778 77.734 22.9659 76.4672 33.8072C76.1856 36.1537 76.3029 43.0762 76.6548 46.2675L76.7956 47.6286L75.4115 46.995C68.2795 43.7332 64.6432 42.3722 59.482 41.0346C53.9688 39.6032 48.7372 39.087 43.529 39.439C25.3239 40.6592 10.0982 57.4842 3.55276 83.6252C2.49705 87.896 0.854832 96.0386 0.362167 99.5585C-0.623162 106.434 0.479469 115.609 2.73165 119.246C3.5293 120.514 4.46771 121.523 4.86653 121.523C5.33574 121.523 5.2419 121.077 4.32695 119.246C2.96625 116.477 2.49705 113.755 2.49705 108.499C2.47359 103.454 2.56743 102.891 4.37387 95.0061C7.16564 82.8743 9.32398 76.4916 13.3591 68.5601C16.5497 62.2713 19.5292 58.0709 23.7989 53.8235C29.0775 48.5672 34.661 45.4932 40.8545 44.4137C44.1155 43.8505 50.7078 44.0852 54.5788 44.883C60.655 46.1737 64.9717 47.7459 73.1827 51.7116C78.3674 54.2225 79.4701 54.5041 80.8073 53.6124C82.4495 52.5564 82.6372 51.1954 81.9803 45.6809C81.7692 43.9444 81.5815 40.5419 81.5815 37.9841C81.558 34.0653 81.6284 33.0797 82.0742 31.0382C83.4114 24.8432 86.0624 19.4226 90.0272 14.7294C93.7808 10.2709 99.9509 6.77447 105.37 6.04703C109.499 5.48385 114.168 6.98567 119.024 10.4821C121.769 12.4298 126.766 17.4514 129.088 20.6193L131.083 23.3179L130.215 23.4822C129.745 23.5526 127.235 23.7638 124.678 23.9046C119.306 24.2096 118.555 24.3739 117.429 25.336C115.575 26.9786 115.904 29.9822 118.086 31.0147C119.212 31.5544 123.012 32.0472 127.282 32.2349C129.229 32.3053 133.945 32.5869 137.769 32.8685C145.511 33.4317 145.98 33.3848 147.458 32.0941C149.288 30.475 149.194 28.4569 147.059 23.5291C146.214 21.5814 145.112 18.7421 144.643 17.1933C142.602 10.5994 139.974 2.59755 139.458 1.44773C138.895 0.180568 138.168 -0.218351 137.863 0.579489Z" fill="currentColor" />
                            </svg>


                        </div>

                    </div>
                </div>

                {/* Team Grid */}

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
                        1280: { slidesPerView: 5 }
                    }}
                    className="pb-12"
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id} className="mb-10">
                            <div
                                key={member.id}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                                onMouseEnter={() => setHoveredCard(member.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Image Container */}
                                <div className="relative aspect-square overflow-hidden rounded-xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${hoveredCard === member.id ? 'opacity-100' : 'opacity-0'
                                        }`}></div>

                                    {/* Hover Content - Green Box */}
                                    <div className={`absolute inset-0 bg-green-600/70 flex flex-col items-center justify-center p-6 transition-all duration-500 ${hoveredCard === member.id ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'
                                        }`}>
                                        <h3 className="text-orange-500 text-xl font-bold mb-1 text-center">
                                            {member.name}
                                        </h3>
                                        <p className="text-white/90 text-sm mb-3 text-center">
                                            {member.role}
                                        </p>

                                        {/* Social Icons */}
                                        <div className="flex gap-3">
                                            {member?.socials.map((social, index) => (
                                                <a
                                                    key={index}
                                                    href={social.link}
                                                    className={`w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                                                    style={{
                                                        transitionDelay: hoveredCard === member.id ? `${index * 50}ms` : '0ms'
                                                    }}
                                                >
                                                    {social.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

              
            </div>
        </section >
    );
}