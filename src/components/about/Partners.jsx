import React from 'react'

import partner1 from "@/assets/images/partner-1.webp"
import partner2 from "@/assets/images/partner-2.webp"
import partner3 from "@/assets/images/partner-3.webp"
import partner4 from "@/assets/images/partner-4.webp"
import partner5 from "@/assets/images/partner-5.webp"
import partner6 from "@/assets/images/partner-6.webp"
import partner7 from "@/assets/images/partner-7.webp"
import partner8 from "@/assets/images/partner-9.webp"
import partner9 from "@/assets/images/partner-10.webp"

const Partners = () => {
    const logos = [
        partner1,
        partner2,
        partner3,
        partner4,
        partner5,
        partner6,
        partner7,
        partner8,
        partner9
    ];
    return (
        <section className='pt-10 relative'>
            <div className="container">
                <div className="mb-2">
                    <div className="flex items-center gap-2 mb-2  ">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="text-orange-500 font-semibold text-sm md:text-base">
                            Government Partners
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Our Partners
                    </h2>
                </div>

                <div className="overflow-hidden py-3">
                    <div className="flex items-center gap-10 animate-[scroll_25s_linear_infinite]">
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={`logo-${i}`}
                                className="w-[200px] h-[150px] p-3 shrink-0 flex items-center justify-center  rounded-xl bg-white"
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="w-[200px] aspect-2/3  h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Partners