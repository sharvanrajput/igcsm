import about from "@/assets/images/about.jpg";


const Joinus = () => {
    // Benefits/Features list
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
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-2">
                            <span className="text-orange-500 font-semibold text-sm sm:text-base">
                                Why Partner With Us
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-3 sm:mb-2 md:mb-3  ">
                                Join our <span className="text-orange-500">franchise</span>

                                <span className="text-gray-900">opportunity to unlock</span>

                                <span className="text-blue-900">entrepreneurial</span> success.
                            </h2>
                            <p className="text-gray-600 text-sm   leading-relaxed">
                                Welcome to   IGCSM   where we empower aspiring professionals with
                                quality education industry expertise and career opportunities.
                            </p>
                        </div>

                        {/* Benefits Grid */}
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
                    </div>

                    {/* Right Side - Image with Badge */}
                    <div className="relative mt-8 lg:mt-0">
                        {/* Main Image Container */}
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-teal-600 to-blue-700 opacity-90"></div>

                            {/* Person Image Placeholder */}
                            <div className="relative  flex items-end justify-center">
                                {/* Dummy Person Silhouette */}
                                <img src={about} alt="" />
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500 rounded-full opacity-20 blur-2xl -z-10"></div>
                        <div className="absolute -top-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500 rounded-full opacity-20 blur-2xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Joinus;