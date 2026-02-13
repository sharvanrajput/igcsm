import about from "@/assets/images/about.jpg";

export default function About() {
    const benefits = [
        {
            id: 1,
            icon: '🎓',
            title: '30+ Years of Educational Excellence',
            color: 'text-blue-600'
        },
        {
            id: 2,
            icon: '👨‍👩‍👧‍👦',
            title: 'Student-Family Financing',
            color: 'text-green-600'
        },
        {
            id: 3,
            icon: '💼',
            title: 'High Earning Potential',
            color: 'text-orange-600'
        },
        {
            id: 4,
            icon: '🤝',
            title: '80+ Franchise Network',
            color: 'text-purple-600'
        },
        {
            id: 5,
            icon: '📚',
            title: 'End-to-End Implementation Support',
            color: 'text-blue-600'
        },
        {
            id: 6,
            icon: '🏥',
            title: '30+ in-House Healthcare Education Provider',
            color: 'text-teal-600'
        }
    ];

    return (
        <section className="relative   overflow-hidden   py-10  ">
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Circle 1 */}

                {/* Floating Icon - Book */}
                <div className="absolute top-1/3 left-1/3 animate-float-slow">
                    <svg className="w-12 h-12 text-blue-300 opacity-40" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                </div>

                {/* Floating Icon - Star */}
                <div className="absolute top-1/2 right-1/4 animate-float-medium">
                    <svg className="w-10 h-10 text-indigo-300 opacity-35" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>

                {/* Floating Icon - Lightning */}
                <div className="absolute bottom-1/4 right-1/3 animate-float-fast">
                    <svg className="w-8 h-8 text-purple-300 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto relative z-10">
                {/* Top Badge */}


                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-6 md:space-y-3">
                        <div className="flex items-center gap-2  ">
                            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                            <span className="text-orange-500 font-semibold text-sm md:text-base">
                                Your Growth, Our Commitment
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">

                            <span className="">Join our franchise opportunity</span>
                            <br />
                            <span className="text-orange-500">to unlock entrepreneurial</span>
                            <br />
                            <span className=" "> success.</span>
                        </h2>

                        {/* <p className="text-gray-600 text-sm! leading-relaxed max-w-xl">
                            Welcome to IGCSM where we empower aspiring professionals with quality education industry expertise and career opportunities.
                        </p> */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 pt-4">
                            {benefits.map((benefit) => (
                                <div
                                    key={benefit.id}
                                    className="flex items-start gap-3 sm:gap-4 group"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-sm sm:text-xl">{benefit.icon}</span>
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 pt-1">
                                        <p className={`  font-semibold text-sm! sm:text-base leading-snug`}>
                                            {benefit.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col justify-center sm:flex-row gap-4 pt-4">
                            <button className="bg-orange-500 hover:bg-amber-600 text-white font-semibold px-6 py-1.5 rounded-lg transition-all duration-300 transform active:scale-97 shadow-lg hover:shadow-xl">
                                Enquire Now
                            </button>

                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-1.5 rounded-lg transition-all duration-300 transform active:scale-97 shadow-lg hover:shadow-xl">
                                Call Us
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Image Section */}
                    <div className="relative">
                        {/* Stats Card - Top Left */}
                        <div className="absolute -top-5 md:top-1 left-0 md:-left-20 bg-white rounded-2xl shadow-xl p-2 md:p-3 z-20 animate-float-slow">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-amber-400 to-amber-600 border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm! text-gray-500">Enrolled Students</p>
                                    <p className="text-lg md:text-xl! font-bold text-gray-900">5000+</p>
                                </div>
                            </div>
                        </div>

                        {/* Discount Badge - Bottom Left */}
                        <div className="absolute -bottom-5 md:bottom-10 left-0 md:-left-20 bg-white rounded-2xl shadow-xl p-2 md:p-3 z-20 animate-float-medium">
                            <div className="flex items-center gap-3">
                                <div className="bg-amber-100 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-base md:text-sm!">UPTO 20% OFF</p>
                                    <p className="text-xs md:text-sm! text-gray-500">For All Courses</p>
                                </div>
                            </div>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative bg-linear-to-br from-blue-100 to-indigo-200 rounded-3xl overflow-hidden shadow-2xl">
                            <img src={about} alt="" />
                            {/* Placeholder for image - Replace with actual image */}


                            {/* Decorative Stethoscope Icon (adapted to skills icon) */}
                            <div className="absolute top-1/3 left-4 animate-float-slow">
                                <svg className="w-16 h-16 text-blue-400 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                        </div>

                        {/* Contact Button - Top Right */}
                        <div className="absolute top-40 -right-10 bg-blue-700 text-white rounded-2xl shadow-xl p-2 md:p-3 z-20 animate-float-fast hidden sm:block">
                            <div className="text-center flex  items-center justify-center gap-2">
                                <svg className="w-6 h-6 mx-auto  " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="text-xs ">+91-9818 841 248</p>
                            </div>
                        </div>

                        {/* Floating Scroll Indicator */}
                        {/* <div className="absolute -bottom-8 right-8 bg-white rounded-full p-3 shadow-lg animate-bounce hidden md:block">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div> */}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-25px) scale(1.05);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}