import React from 'react'
import about2 from "@/assets/images/about2.webp"
const Aboutus = () => {
    return (
        <section className='pt-20 relative '>


            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <div className='self-center'>
                        <div className="flex items-center gap-2 mb-4  ">
                            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                            <span className="text-orange-500 font-semibold text-sm md:text-base">
                              About IGCSM
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-2xl md:text-3xl  font-semibold mb-3 sm:mb-4 md:mb-6  leading-tight">
                            <span>"Skill is the unified force of experience, intellect and passion in their operation.”</span> <br />
                            <span>John Ruskin.</span>
                        </h2>
                        <p>
                            The Indira Gandhi Computer Saksharta Mission (IGCSM), founded in 2008, aims to Educate, Enable, and Empower. Operating across 21 states, IGCSM has impacted more than 3 Lakh lives by focusing on educating children, enhancing youth skills, and empowering girls and young women. Individual and governmental efforts are crucial in bridging this gap for India's successful transformation.
                        </p>
                    </div>
                    <div>
                        <img src={about2} className='h-auto w-full' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus