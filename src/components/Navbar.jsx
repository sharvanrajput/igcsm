// // import React from 'react'
// // import logo from "@/assets/images/logo.webp"
// // const Navbar = () => {
// //     return (
// //         <nav className='absolute z-10'>
// //             <div className="container">

// //                 {/* logo links */}
// //                 <div>
// //                     <div className="logo">
// //                         <img src={logo} width={70} alt="" />
// //                     </div>
// //                     <div className="links">

// //                     </div>
// //                 </div>
// //             </div>
// //         </nav>
// //     )
// // }

// // export default Navbar

// import React, { useState, useEffect } from 'react'
// import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react'
// import { Button } from './ui/button'
// import logo from "@/assets/images/logo.webp"

// const data = ["Students can now take direct admission in the skill course of their choice. Go to Apply Now for instant enrollment. "]



// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//     const [activeDropdown, setActiveDropdown] = useState(null)
//     const [isScrolled, setIsScrolled] = useState(false)
//     const [scrollY, setScrollY] = useState(0);

//     const [animatenav, setanimatenav] = useState(false);



//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//         };

//         window.addEventListener("scroll", handleScroll);
//         console.log(scrollY)
//         if (scrollY > 70) {
//             setanimatenav(true)
//         } else {
//             setanimatenav(false)
//         }

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [scrollY]);
//     const toggleDropdown = (menu) => {
//         setActiveDropdown(activeDropdown === menu ? null : menu)
//     }

//     return (
//         <nav className={`w-full  fixed top-0 z-20 relaive ${animatenav && "shadow-lg"}  rounded-bl-2xl rounded-br-2xl`}>
//             {/* Top Bar */}
//             <div className={`bg-linear-to-r from-green-700 to-green-700  text-white duration-100 transition-all  `}>
//                 <div className="container">

//                     <div className="flex items-center gap-4 py-1 justify-between text-xs">

//                         {/* Left Section */}
//                         <div className="flex items-center gap-6 shrink-0">
//                             <a
//                                 href="tel:+1234567890"
//                                 className="flex items-center gap-2 hover:text-orange-100 transition-colors"
//                             >

//                                 <span className="hidden sm:inline"> Helpline &nbsp; Number  &nbsp; +91-9818 841 248  </span>   <Phone className="w-3 h-3" />
//                             </a>


//                         </div>

//                         {/* Middle Marquee */}
//                         <div className="overflow-hidden whitespace-nowrap max-w-3xl">
//                             <div className="flex animate-marquee gap-10">
//                                 {[...data].map((ele, index) => (
//                                     <span key={index} className="text-xs font-medium">
//                                         {ele}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Right Section */}
//                         <div className="shrink-0">
//                             <Button
//                                 variant="bordered"
//                                 className="text-xs bg-white text-black"
//                                 size="xs"
//                             >
//                                 Enquire Now
//                             </Button>
//                         </div>

//                     </div>
//                 </div>
//             </div>


//             {/* Main Navbar */}
//             {/* Desktop Navigation */}

//             <div
//                 className={`sticky top-0 z-50  ${isMobileMenuOpen && "bg-white"}  ${animatenav ? "bg-white rounded-bl-2xl rounded-br-2xl" : "trainsparent "} bg-trainparent transition-all duration-300  duration-100 transition-all    `}
//             >
//                 <div className="container">
//                     <div className={` `}>
//                         {/* Home */}


//                     </div>
//                 </div>
//                 <div className={`container  duration-100 transition-all  `}>

//                     <div className="flex items-center justify-between py-1">
//                         {/* Logo */}
//                         <div className="flex items-center gap-3 group">
//                             <img src={logo} alt="" width={300} />

//                         </div>

//                         {/* Desktop Navigation */}
//                         <div className=" ">
//                             {/* Home */}
//                             <div className='hidden lg:flex items-center justify-end '>
//                                 <a
//                                     href="/"
//                                     className={`ps-4 py-1 ${animatenav ? "text-black" : "text-white"}  hover:text-orange-600 font-medium text-[12px] transition-all duration-200 relative group`}
//                                 >
//                                     Student Login
//                                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                 </a>


//                                 {/* Career */}
//                                 <a
//                                     href="/career"
//                                     className={`ps-4 py-1 ${animatenav ? "text-black" : "text-white"}  hover:text-orange-600 font-medium text-[12px] transition-all duration-200 relative group`}
//                                 >
//                                     Franchise Login
//                                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                 </a>

//                                 {/* Contact */}
//                                 <a
//                                     href="/contact"
//                                     className={`ps-4 py-1 ${animatenav ? "text-black" : "text-white"}  hover:text-orange-600 font-medium text-[12px] transition-all duration-200 relative group`}
//                                 >
//                                     Apply Now
//                                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                 </a>
//                                 {/* Get Started Button */}

//                             </div>

//                             <div className='hidden lg:flex  items-center'>

//                                 {/* About Dropdown */}
//                                 <div className="relative group">
//                                     <button className={`"px-4 py-2 me-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
//                                         About Us
//                                         <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
//                                         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                     </button>

//                                     {/* Dropdown Menu */}
//                                     <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
//                                         <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
//                                         <a href="/about" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">

//                                             About &nbsp; IGCSM
//                                         </a>
//                                         <a href="/about" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">

//                                             Our &nbsp; Mission &nbsp; & &nbsp; Vision
//                                         </a>
//                                         <a href="/about" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">

//                                             From &nbsp; Founder's &nbsp; Desk
//                                         </a>
//                                         <a href="/about" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">

//                                             Awards &nbsp; and &nbsp; Recognition
//                                         </a>
//                                         <a href="/about" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             Team &nbsp; IGCSM
//                                         </a>
//                                         <a href="/about" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             International &nbsp; Student &nbsp; Suport
//                                         </a>

//                                     </div>
//                                 </div>

//                                 {/* Services Dropdown */}
//                                 <div className="relative group">
//                                     <button className={`"px-4 py-2 me-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
//                                         Courses
//                                         <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
//                                         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                     </button>

//                                     <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
//                                         <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
//                                         <a href="/hr-management" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             HR Management
//                                         </a>
//                                         <a href="/payroll" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             Payroll Management
//                                         </a>
//                                         <a href="/recruitment" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             Recruitment & Talent
//                                         </a>
//                                         <a href="/training" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             Corporate Training
//                                         </a>
//                                         <a href="/upskilling" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200">
//                                             Upskilling Programs
//                                         </a>
//                                     </div>
//                                 </div>

//                                 {/* Industries Dropdown */}
//                                 <div className="relative group">
//                                     <button className={`"px-4 py-2  ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
//                                         Admission
//                                         <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
//                                         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                     </button>

//                                     <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
//                                         <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
//                                         <a href="/blue-collar" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             Blue-Collar & Support
//                                         </a>
//                                         <a href="/construction" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             Construction
//                                         </a>
//                                         <a href="/it" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             IT
//                                         </a>
//                                         <a href="/engineering" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
//                                             Engineering
//                                         </a>
//                                         <a href="/white-collar" className="block px-3 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200">
//                                             White-Collar Roles
//                                         </a>
//                                     </div>
//                                 </div>

//                                 {/* Career */}
//                                 <a
//                                     href="/career"
//                                     className={`ps-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 relative group`}
//                                 >
//                                     Verification
//                                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                 </a>
//                                 <a
//                                     href="/career"
//                                     className={`ps-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 relative group`}
//                                 >
//                                     Franchise
//                                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                 </a>
//                                 <a
//                                     href="/career"
//                                     className={`ps-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 relative group`}
//                                 >
//                                     Downloads
//                                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                 </a>
//                                 <a
//                                     href="/career"
//                                     className={`ps-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 relative group`}
//                                 >
//                                     Job Updates
//                                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                 </a>

//                                 {/* Contact */}
//                                 <a
//                                     href="/contact"
//                                     className={`ps-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 relative group`}
//                                 >
//                                     Contact
//                                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
//                                 </a>
//                                 {/* Get Started Button */}

//                             </div>

//                         </div>


//                         {/* Mobile Menu Toggle */}
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className={`lg:hidden p-2 rounded-lg ${animatenav ? "text-black" : "text-white"}     bg-orange-500 transition-colors`}
//                         >
//                             {isMobileMenuOpen ? (
//                                 <X className="w-6 h-6" />
//                             ) : (
//                                 <Menu className="w-6 h-6" />
//                             )}
//                         </button>
//                     </div>

//                     {/* Mobile Menu */}
//                     {isMobileMenuOpen && (
//                         <div className="lg:hidden pb-6 animate-slideDown">
//                             <div className="flex flex-col space-y-1 mt-4">


//                                 {/* Mobile About Dropdown */}
//                                 <div>
//                                     <button
//                                         onClick={() => toggleDropdown('about')}
//                                         className="w-full px-4 py-3  hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
//                                     >
//                                         About Us
//                                         <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
//                                     </button>
//                                     {activeDropdown === 'about' && (
//                                         <div className="pl-8 py-2 space-y-1 animate-slideDown">
//                                             <a href="/about" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">About IGCSM</a>
//                                             <a href="/mission" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Our Mission & Vision</a>
//                                             <a href="/team" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">From Founder's Desk</a>
//                                             <a href="/team" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Awords and Recognition</a>
//                                             <a href="/team" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Team IGCSM</a>
//                                             <a href="/team" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">International Student Suport </a>
//                                         </div>
//                                     )}
//                                 </div>


//                                 {/* Mobile Services Dropdown */}
//                                 <div>
//                                     <button
//                                         onClick={() => toggleDropdown('services')}
//                                         className="w-full px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
//                                     >
//                                         Services
//                                         <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
//                                     </button>
//                                     {activeDropdown === 'services' && (
//                                         <div className="pl-8 py-2 space-y-1 animate-slideDown">
//                                             <a href="/hr-management" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">HR Management</a>
//                                             <a href="/hr-management" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Payroll Management</a>
//                                             <a href="/hr-management" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Recruitment & Talent</a>
//                                             <a href="/hr-management" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Corporate Training</a>
//                                             <a href="/hr-management" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Upskilling Programs</a>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Mobile Industries Dropdown */}
//                                 <div>
//                                     <button
//                                         onClick={() => toggleDropdown('industries')}
//                                         className="w-full px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
//                                     >
//                                         Industries
//                                         <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
//                                     </button>
//                                     {activeDropdown === 'industries' && (
//                                         <div className="pl-3 py-2 space-y-1   animate-slideDown">
//                                             <a href="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Blue-Collar & Support</a>
//                                             <a href="/construction" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Construction</a>
//                                             <a href="/it" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">IT</a>
//                                             <a href="/engineering" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Engineering</a>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <a href="/career" className="px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all">
//                                     Career
//                                 </a>

//                                 <a href="/contact" className="px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all">
//                                     Contact
//                                 </a>

//                                 <button className="mx-4 mt-4 flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-yellow-500   px-3 py-3 rounded-lg font-semibold text-sm">
//                                     Get Started
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

//         * {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//       `}</style>
//         </nav >
//     )
// }

// export default Navbar

// import React from 'react'
// import logo from "@/assets/images/logo.webp"
// const Navbar = () => {
//     return (
//         <nav className='absolute z-10'>
//             <div className="container">

//                 {/* logo links */}
//                 <div>
//                     <div className="logo">
//                         <img src={logo} width={70} alt="" />
//                     </div>
//                     <div className="links">

//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar

import logo from "@/assets/images/logo.webp"
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MegaDropdown from './MegaDropdown'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { courseData } from "./data/courseData "

const data = ["Students can now take direct admission in the skill course of their choice. Go to Apply Now for instant enrollment. "]



const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [scrollY, setScrollY] = useState(0);
    const [courseCategory, setCourseCategory] = useState(null);

    const [animatenav, setanimatenav] = useState(false);

    const location = useLocation()
    const animatedPaths = ["/online-admission"];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        if (animatedPaths.includes(location.pathname)) {
            setanimatenav(true)
        } else {
            if (scrollY > 70) {
                setanimatenav(true)
            } else {
                setanimatenav(false)
            }
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY, location.pathname]);
    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu)
    }



    useEffect(() => {

        const categories = [];

        courseData.forEach(item => {
            categories.push(item.category);
        });

        setCourseCategory(categories)

    }, [])



    return (
        <nav className={`w-full  fixed top-0 z-20 relaive ${animatenav && "shadow-lg"}  rounded-bl-2xl rounded-br-2xl`}>
            {/* Top Bar */}
            <div className={`bg-linear-to-r from-green-700 to-green-700  text-white duration-100 transition-all  `}>
                <div className="container">

                    <div className="flex items-center gap-4 py-1 justify-between text-xs">

                        {/* Left Section */}
                        <div className="flex items-center gap-6 shrink-0">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-2 hover:text-orange-100 transition-colors"
                            >

                                <span className="hidden sm:inline"> Helpline &nbsp; Number  &nbsp; +91-9818 841 248  </span>   <Phone className="w-3 h-3" />
                            </a>


                        </div>

                        {/* Middle Marquee */}
                        <div className="overflow-hidden whitespace-nowrap max-w-3xl">
                            <div className="flex animate-marquee gap-10">
                                {[...data].map((ele, index) => (
                                    <span key={index} className="text-xs font-medium">
                                        {ele}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="shrink-0">
                            <Button
                                variant="bordered"
                                className="text-xs bg-white text-black"
                                size="xs"
                            >
                                Enquire Now
                            </Button>
                        </div>

                    </div>
                </div>
            </div>


            {/* Main Navbar */}
            {/* Desktop Navigation */}

            <div
                className={`sticky top-0 z-50  ${isMobileMenuOpen && "bg-white"}  ${animatenav ? "bg-white rounded-bl-2xl rounded-br-2xl" : "trainsparent "} bg-trainparent transition-all duration-300  duration-100 transition-all    `}
            >
                <div className="container">
                    <div className={` `}>
                        {/* Home */}


                    </div>
                </div>
                <div className={`container  duration-100 transition-all  `}>

                    <div className="flex items-center justify-between py-1">
                        {/* Logo */}
                        <div className="flex items-center gap-3 group pb-3">
                            <Link to={"/"} >
                                <img src={logo} alt="" width={270} />
                            </Link>

                        </div>

                        {/* Desktop Navigation */}
                        <div className=" ">
                            {/* Home */}
                            <div className='hidden lg:flex items-center justify-end '>
                                <Link to="/"
                                    className={`ps-4 py-1 ${animatenav ? "text-black" : "text-white"}  hover:text-orange-600 font-medium text-[12px] transition-all duration-200 relative group`}
                                >
                                    Student Login
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>


                                {/* Career */}
                                <Link to="/career"
                                    className={`ps-4 py-1 ${animatenav ? "text-black" : "text-white"}  hover:text-orange-600 font-medium text-[12px] transition-all duration-200 relative group`}
                                >
                                    Franchise Login
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>

                                {/* Contact */}
                                <Link to="/contact"
                                    className={`ps-4 py-1 ${animatenav ? "text-black" : "text-white"}  hover:text-orange-600 font-medium text-[12px] transition-all duration-200 relative group`}
                                >
                                    Apply Now
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                                {/* Get Started Button */}

                            </div>

                            <div className='hidden lg:flex  items-center'>
                                {/* About Dropdown */}
                                <div className="relative group">
                                    <button className={`"px-4 py-2 me-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
                                        About Us
                                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className="absolute py-3 left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <Link to="/about" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">

                                            About   IGCSM
                                        </Link>
                                        <Link to="/mission-vision" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">

                                            Our Mission &  Vision
                                        </Link>
                                        <Link to="/chairman-mesage" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">

                                            From Founder's Desk
                                        </Link>
                                        <Link to="/awards-and-recognition" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Awards and Recognition
                                        </Link>
                                        <Link to="/team" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Team IGCSM
                                        </Link>
                                        <Link to="/international-student-support" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            International Student Suport
                                        </Link>

                                    </div>
                                </div>
                                {/* Services Dropdown */}
                                <div className="relative group">
                                    <button className={`"px-4 py-2 me-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
                                        Courses Category
                                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                    </button>

                                    <div className="absolute gap-0 py-3 left-0 mt-2 -translate-x-[40%]  w-200 pt-3   bg-white rounded-xl shadow-2xl    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <p className="pb-2 mb-0 block  border-b border-green-500 text-orange-500  mx-3 v font-semibold">Select the category of courses</p>
                                        <div className="grid xl:grid-cols-3 md:grid-cols-1 gap-0">
                                            <div className="">
                                                {courseCategory?.slice(0, 8).map((data, i) => (
                                                    <Link key={i} to={`/courses/${data.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                                        {data}
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="">
                                                {courseCategory?.slice(8, 16).map((data, i) => (
                                                    <Link key={i} to={`/courses/${data.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                                        {data}
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="">
                                                {courseCategory?.slice(16).map((data, i) => (
                                                    <Link key={i} to={`/courses/${data.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                                        {data}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <MegaDropdown animatenav={animatenav} /> */}

                                {/* Industries Dropdown */}
                                <div className="relative group">
                                    <button className={`"pl-4 py-2  ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
                                        Admission
                                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                    </button>

                                    <div className="absolute py-3 left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <Link to="/online-admission" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Online Admission
                                        </Link>

                                        <Link to="/notice-board" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Notice Board
                                        </Link>

                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Online Examination
                                        </Link>

                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Online Results
                                        </Link>

                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Payment Information
                                        </Link>

                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            IGCSM Sample Marksheet
                                        </Link>

                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            IGCSM Sample Certificate
                                        </Link>

                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            IGCSM Sample Verification
                                        </Link>


                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className={`pl-4 py-2  ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
                                        Verification
                                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                    </button>

                                    <div className="absolute py-3 left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Admission Verification
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Result Verification
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Certificate Verification
                                        </Link>



                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className={`pl-4 py-2  ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
                                        Franchise
                                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                    </button>

                                    <div className="absolute py-3 left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            India’s Best Franchise & it’s Benefits
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Apply for Franchise
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Terms & Conditions
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Download Franchise Brochure
                                        </Link>




                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className={`pl-4 py-2  ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
                                        Downloads
                                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                    </button>

                                    <div className="absolute py-3 left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Student Application Form
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Centre Affiliation Form
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Agreement Sample
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Affiliation Certificate Sample
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Student Marksheet Sample
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            Student Certificate Sample
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            IGCSM Brochure
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            IGCSM Information Voucher
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            IGCSM Centre Front Flex
                                        </Link>
                                        <Link to="/blue-collar" className="block px-4 py-1.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm  transition-all duration-200 border-b border-gray-50">
                                            IGCSM Centre Office Backdrop Flex
                                        </Link>




                                    </div>
                                </div>




                                <a
                                    href="/career"
                                    className={`ps-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 relative group`}
                                >
                                    Job Updates
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </a>

                                {/* Contact */}
                                <a
                                    href="/contact"
                                    className={`ps-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 relative group`}
                                >
                                    Contact
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                                {/* Get Started Button */}

                            </div>

                        </div>


                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg ${animatenav ? "text-black" : "text-white"}     bg-orange-500 transition-colors`}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden pb-6 animate-slideDown  ">
                            <div className="flex flex-col space-y-1 mt-4">


                                {/* Mobile About Dropdown */}
                                <div>
                                    <button
                                        onClick={() => toggleDropdown('about')}
                                        className="w-full px-4 py-3  hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
                                    >
                                        About Us
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === 'about' && (
                                        <div className="pl-8 py-2 space-y-1 animate-slideDown">
                                            <Link to="/about" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">About IGCSM</Link>
                                            <Link to="/mission-vision" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Our Mission & Vision</Link>
                                            <Link to="/chairman-mesage" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">From Founder's Desk</Link>
                                            <Link to="/awards-and-recognition" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Awords and Recognition</Link>
                                            <Link to="/team" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Team IGCSM</Link>
                                            <Link to="/international-student-support" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">International Student Suport </Link>
                                        </div>
                                    )}
                                </div>


                                {/* Mobile Services Dropdown */}
                                <div>
                                    <button
                                        onClick={() => toggleDropdown('services')}
                                        className="w-full px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
                                    >
                                        COURSES
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === 'services' && (
                                        <div className="pl-8 py-2 space-y-1 animate-slideDown">
                                            <ScrollArea className="h-50   rounded-md  ">
                                                {courseCategory?.map((data, i) => (
                                                    <Link to={`/courses/${data.toLowerCase().replace(/\s+/g, "-")}`} key={importScripts} className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm"> 	{data}	 </Link>
                                                ))}
                                            </ScrollArea>

                                        </div>
                                    )}
                                </div>


                                {/* Mobile Industries Dropdown */}
                                <div>
                                    <button
                                        onClick={() => toggleDropdown('ADMISSION')}
                                        className="w-full px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
                                    >
                                        ADMISSION
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'ADMISSION' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === 'ADMISSION' && (
                                        <div className="pl-3 py-2 space-y-1   animate-slideDown">
                                            <Link to="/online-admission" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Online Admission </Link>
                                            <Link to="/notice-board" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Notice Board </Link>
                                            <Link to="" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Online Examination </Link>
                                            <Link to="" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Online Results </Link>
                                            <Link to="" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Payment Information </Link>
                                            <Link to="" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">IGCSM Sample Marksheet </Link>
                                            <Link to="" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">IGCSM Sample Certificate </Link>
                                            <Link to="" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">IGCSM Sample Verification </Link>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <button
                                        onClick={() => toggleDropdown('VERIFICATION')}
                                        className="w-full px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
                                    >
                                        VERIFICATION
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'VERIFICATION' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === 'VERIFICATION' && (
                                        <div className="pl-3 py-2 space-y-1   animate-slideDown">
                                            <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Admission Verification</Link>
                                            <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Result Verification</Link>
                                            <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Certificate Verification</Link>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <button
                                        onClick={() => toggleDropdown('FRANCHISE')}
                                        className="w-full px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
                                    >
                                        FRANCHISE
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'FRANCHISE' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === 'FRANCHISE' && (
                                        <div className="pl-3 py-2 space-y-1   animate-slideDown">
                                            <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm"> India’s Best Franchise & it’s Benefits</Link>
                                            <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Apply for Franchise</Link>
                                            <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Terms & Conditions	</Link>
                                            <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Download Franchise Brochure</Link>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <button
                                        onClick={() => toggleDropdown('DOWNLOADS')}
                                        className="w-full px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
                                    >
                                        DOWNLOADS
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'DOWNLOADS' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === 'DOWNLOADS' && (
                                        <div className="pl-3 py-2 space-y-1   animate-slideDown">
                                            <ScrollArea className="h-30   rounded-md  ">

                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Student Application Form </Link>
                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Centre Affiliation Form </Link>
                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm"> Agreement Sample </Link>
                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Affiliation Certificate Sample </Link>
                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm"> Student Marksheet Sample </Link>
                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm"> Student Certificate Sample </Link>
                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">IGCSM Brochure </Link>
                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">IGCSM Information Voucher </Link>
                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm"> IGCSM Centre Front Flex </Link>
                                                <Link to="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm"> IGCSM Centre Office Backdrop Flex </Link>
                                            </ScrollArea>
                                        </div>
                                    )}
                                </div>


                                <Link to="/career" className="px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all">
                                    GALLERY
                                </Link>
                                <Link to="/career" className="px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all">
                                    JOB UPDATES
                                </Link>
                                <Link to="/career" className="px-4 py-3   hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all">
                                    CONTACT US
                                </Link>


                                <button className="mx-4 mt-4 flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-yellow-500   px-3 py-3 rounded-lg font-semibold text-sm">
                                    Get Started
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
    

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
        </nav >
    )
}

export default Navbar