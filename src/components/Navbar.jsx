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

import React, { useState, useEffect } from 'react'
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from './ui/button'
import logo from "@/assets/images/logo.webp"

const data = ["Students can now take direct admission in the skill course of their choice. Go to Apply Now for instant enrollment. "]



const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [scrollY, setScrollY] = useState(0);

    const [animatenav, setanimatenav] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        console.log(scrollY)
        if (scrollY > 150) {
            setanimatenav(true)
        } else {
            setanimatenav(false)
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);
    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu)
    }

    return (
        <nav className="w-full sticky top-0 z-20 relaive  ">
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
                                {[...data ].map((ele, index) => (
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
                className={`sticky top-0 z-50 ${animatenav ? "bg-white rounded-bl-xl rounded-br-xl" : "trainsparent "} bg-trainparent transition-all duration-300  duration-100 transition-all    `}
            >
                <div className="container">
                    <div className={`hidden lg:flex items-center justify-end pt-3 `}>
                        {/* Home */}
                        <a
                            href="/"
                            className={`px-4 py-1 ${animatenav ? "text-black" : "text-white"}  hover:text-orange-600 font-medium text-[12px] transition-all duration-200 relative group`}
                        >
                           Student Login
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                        </a>


                        {/* Career */}
                        <a
                            href="/career"
                            className={`px-4 py-1 ${animatenav ? "text-black" : "text-white"}  hover:text-orange-600 font-medium text-[12px] transition-all duration-200 relative group`}
                        >
                            Franchise Login
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                        </a>

                        {/* Contact */}
                        <a
                            href="/contact"
                            className={`px-4 py-1 ${animatenav ? "text-black" : "text-white"}  hover:text-orange-600 font-medium text-[12px] transition-all duration-200 relative group`}
                        >
                           Apply Now
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        {/* Get Started Button */}


                    </div>
                </div>
                <div className={`container  duration-100 transition-all  `}>

                    <div className="flex items-center justify-between pb-2">
                        {/* Logo */}
                        <div className="flex items-center gap-3 group">
                            <img src={logo} alt="" width={250} />

                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center ">
                            {/* Home */}
                           

                            {/* About Dropdown */}
                            <div className="relative group">
                                <button className={`"px-4 py-2 me-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[15px] transition-all duration-200 flex items-center gap-1 relative`}>
                                    About Us
                                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                    <a href="/about" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">

                                        About &nbsp; IGCSM
                                    </a>
                                    <a href="/about" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">

                                        Our &nbsp; Mission &nbsp; & &nbsp; Vision
                                    </a>
                                    <a href="/about" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">

                                        From &nbsp; Founder's &nbsp; Desk
                                    </a>
                                    <a href="/about" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">

                                        Awards &nbsp; and &nbsp; Recognition
                                    </a>
                                    <a href="/about" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        Team &nbsp; IGCSM
                                    </a>
                                    <a href="/about" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        International &nbsp; Student &nbsp; Suport
                                    </a>

                                </div>
                            </div>

                            {/* Services Dropdown */}
                            <div className="relative group">
                                <button className={`"px-4 py-2 me-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[15px] transition-all duration-200 flex items-center gap-1 relative`}>
                                    Courses
                                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </button>

                                <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                    <a href="/hr-management" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        HR Management
                                    </a>
                                    <a href="/payroll" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        Payroll Management
                                    </a>
                                    <a href="/recruitment" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        Recruitment & Talent
                                    </a>
                                    <a href="/training" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        Corporate Training
                                    </a>
                                    <a href="/upskilling" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200">
                                        Upskilling Programs
                                    </a>
                                </div>
                            </div>

                            {/* Industries Dropdown */}
                            <div className="relative group">
                                <button className={`"px-4 py-2  ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[15px] transition-all duration-200 flex items-center gap-1 relative`}>
                                    Admission
                                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </button>

                                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-300 overflow-hidden z-50">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-yellow-500"></div>
                                    <a href="/blue-collar" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        Blue-Collar & Support
                                    </a>
                                    <a href="/construction" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        Construction
                                    </a>
                                    <a href="/it" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        IT
                                    </a>
                                    <a href="/engineering" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200 border-b border-gray-50">
                                        Engineering
                                    </a>
                                    <a href="/white-collar" className="block px-6 py-3.5 text-black hover:bg-linear-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 text-sm font-medium transition-all duration-200">
                                        White-Collar Roles
                                    </a>
                                </div>
                            </div>

                            {/* Career */}
                            <a
                                href="/career"
                                className={`px-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[15px] transition-all duration-200 relative group`}
                            >
                                Verification
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a
                                href="/career"
                                className={`px-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[15px] transition-all duration-200 relative group`}
                            >
                                Franchise
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a
                                href="/career"
                                className={`px-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[15px] transition-all duration-200 relative group`}
                            >
                                Downloads
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a
                                href="/career"
                                className={`px-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[15px] transition-all duration-200 relative group`}
                            >
                                Job Updates
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                            </a>

                            {/* Contact */}
                            <a
                                href="/contact"
                                className={`px-4 py-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[15px] transition-all duration-200 relative group`}
                            >
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            {/* Get Started Button */}


                        </div>


                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-white hover:bg-orange-50 transition-colors"
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
                        <div className="lg:hidden pb-6 animate-slideDown">
                            <div className="flex flex-col space-y-1 mt-4">
                                <a href="/" className="px-4 py-3 text-white hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all">
                                    Home
                                </a>

                                {/* Mobile About Dropdown */}
                                <div>
                                    <button
                                        onClick={() => toggleDropdown('about')}
                                        className="w-full px-4 py-3 text-white hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
                                    >
                                        About Us
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === 'about' && (
                                        <div className="pl-8 py-2 space-y-1 animate-slideDown">
                                            <a href="/about" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">About IGCSM</a>
                                            <a href="/mission" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Our Mission & Vision</a>
                                            <a href="/team" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">From Founder's Desk</a>
                                            <a href="/team" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Awords and Recognition</a>
                                            <a href="/team" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Team IGCSM</a>
                                            <a href="/team" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">International Student Suport </a>
                                        </div>
                                    )}
                                </div>


                                {/* Mobile Services Dropdown */}
                                <div>
                                    <button
                                        onClick={() => toggleDropdown('services')}
                                        className="w-full px-4 py-3 text-white hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
                                    >
                                        Services
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === 'services' && (
                                        <div className="pl-8 py-2 space-y-1 animate-slideDown">
                                            <a href="/hr-management" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">HR Management</a>
                                            <a href="/payroll" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Payroll Management</a>
                                            <a href="/recruitment" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Recruitment & Talent</a>
                                            <a href="/training" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Corporate Training</a>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Industries Dropdown */}
                                <div>
                                    <button
                                        onClick={() => toggleDropdown('industries')}
                                        className="w-full px-4 py-3 text-white hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all flex items-center justify-between"
                                    >
                                        Industries
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === 'industries' && (
                                        <div className="pl-8 py-2 space-y-1 animate-slideDown">
                                            <a href="/blue-collar" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Blue-Collar & Support</a>
                                            <a href="/construction" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Construction</a>
                                            <a href="/it" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">IT</a>
                                            <a href="/engineering" className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm">Engineering</a>
                                        </div>
                                    )}
                                </div>

                                <a href="/career" className="px-4 py-3 text-white hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all">
                                    Career
                                </a>

                                <a href="/contact" className="px-4 py-3 text-white hover:bg-orange-50 hover:text-orange-600 font-medium text-sm rounded-lg transition-all">
                                    Contact
                                </a>

                                <button className="mx-4 mt-4 flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold text-sm">
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

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