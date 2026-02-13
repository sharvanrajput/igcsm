import React from 'react';
import { Award, Users, TrendingUp, Target, Eye, Sparkles } from 'lucide-react';
import mission from "@/assets/images/mission.jpg"
import vision from "@/assets/images/vision.jpg"

const MissionVision = () => {
    const statistics = [
        {
            id: 1,
            number: '30+',
            label: 'Years of group legacy',
            color: 'from-orange-500 to-orange-500',
            icon: Award
        },
        {
            id: 2,
            number: '100+',
            label: 'Centers across PAN India',
            color: 'from-orange-500 to-orange-500',
            icon: TrendingUp
        }
    ];

    const features = [
        { icon: Users, label: 'Expert Faculty' },
        { icon: Target, label: 'Career Focused' },
        { icon: Sparkles, label: 'Industry Ready' }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Decorative Grid Pattern - Top Right */}
            <div className="absolute top-10 right-10 hidden lg:block opacity-30">
                <div className="grid grid-cols-8 gap-3">
                    {[...Array(32)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Decorative Grid Pattern - Bottom Left */}
            <div className="absolute bottom-20 left-10 hidden lg:block opacity-30">
                <div className="grid grid-cols-8 gap-3">
                    {[...Array(32)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-1 bg-slate-400 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
                    {/* Left Side - Images and Stats */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-5 md:gap-6">
                            {/* Top Left Image - Lab Scene */}
                            {/* <div className="col-span-2 sm:col-span-1">
                                <div className="relative rounded-lg overflow-hidden shadow-2xl group transform transition-all duration-500 hover:scale-105 hover:shadow-blue-200/50">
                                    <div className="relative  overflow-hidden rounded-xl">
                                        <img
                                            src={vision}
                                            alt="Mission"
                                            className="w-full h-full object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-orange-500/40 to-orange-400/30"></div>
                                    </div>

                                </div>
                            </div> */}

                            {/* Top Right - Statistics Cards */}
                            {/* <div className="col-span-2 sm:col-span-1 flex flex-col gap-5 md:gap-2">
                                {statistics.map((stat, index) => {
                                    const IconComponent = stat.icon;
                                    return (
                                        <div
                                            key={stat.id}
                                            className={`bg-linear-to-br ${stat.color} text-white rounded-lg p-3 md:p-4 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-blue-500/30 relative overflow-hidden group`}
                                            style={{ animationDelay: `${index * 200}ms` }}
                                        >
                                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                            <div className="relative z-10">
                                                <div className="flex items-start justify-between mb-3">
                                                    <IconComponent className="w-8 h-8 opacity-80" />
                                                </div>
                                                <h3 className="text-3xl sm:text-2xl font-black mb-2 tracking-tight">
                                                    {stat.number}
                                                </h3>
                                                <p className="text-base font-medium opacity-95 leading-snug">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div> */}

                            {/* Bottom Image - Team Scene */}
                            <div className="col-span-2">
                                <div className="relative     group transform transition-all duration-500 hover:scale-105 hover:shadow-emerald-200/50">
                                    {/* Animated Background Pattern */}

                                    <img
                                        src={vision}
                                        alt="Mission"
                                        className="w-[40%] h-auto absolute right-20 border-2 border-orange-600 px-4 py-2 rounded-lg border-dashed  -top-10 object-cover"
                                        data-aos="zome-in"
                                    />

                                    <img
                                        src={mission}
                                        alt="Mission"
                                        className="w-[70%] h-auto 
                                           rounded-md object-cover"
                                        data-aos="zome-in"

                                    />
                                    <div className="absolute top-2/3 right-4 animate-float-slow">
                                        <svg className="w-16 h-16 text-orange-400 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-white/40 rounded-tr-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-2 lg:space-y-3">
                        {/* Top Badge */}
                        <div data-aos="fade-top" className="inline-flex items-center gap-3 bg-linear-to-r from-amber-50 to-orange-50 px-5 py-2.5 rounded-full border border-amber-200/50 shadow-sm">
                            <div className="w-2.5 h-2.5 bg-linear-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                            <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-bold text-sm sm:text-base">
                                Your Dreams, Our Dedication
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div>
                            <h2 data-aos="fade-right" data-aos-duration="600" className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-3 sm:mb-2 md:mb-3  ">  Build Careers with{' '}
                                <span className="block  text-orange-500  mt-2">
                                    Allied Healthcare Education
                                </span>
                            </h2>
                            <p data-aos="fade-bottom" data-aos-duration="600" className="text-slate-700 text-sm!  leading-relaxed font-medium">
                                IGCSM Healthcare, with 30+ years of excellence, has a strong pan-India
                                presence in the rapidly expanding healthcare sector, India's largest industry
                                in revenue and employment.
                            </p>
                        </div>

                        {/* Features Grid */}



                        {/* Mission Section */}
                        <div className="space-y-2  py-3 rounded-xl    " data-aos-duration="600" data-aos="fade-bottom">
                            <div className="flex items-center gap-3">
                                <Target className="w-7 h-7 text-orange-600" />
                                <h3 className="text-2xl sm:text-3xl font-black text-orange-600">
                                    Our Mission
                                </h3>
                            </div>
                            <p className="text-slate-800  text-sm! font-medium">
                                IGCSM Healthcare empowers youth with paramedical skills, shaping them
                                into visionaries who uplift the healthcare sector and meet industry needs.
                            </p>
                        </div>

                        {/* Vision Section */}
                        <div className="space-y-4  py-3 rounded-xl   " data-aos-duration="600" data-aos="fade-bottom">
                            <div className="flex items-center gap-3">
                                <Eye className="w-7 h-7 text-orange-600" />
                                <h3 className="text-2xl sm:text-3xl font-black text-orange-600">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-slate-800 text-sm! font-medium">
                                Empowering future healthcare professionals with quality education, practical
                                skills, and a compassionate approach to care.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
