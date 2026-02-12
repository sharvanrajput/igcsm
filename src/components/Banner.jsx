import React from 'react'
import video from "@/assets/videos/banner.mp4"

const Banner = () => {
    return (
        <section className=' top-0 z-0'>
            <div className="container">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className=" w-full h-screen overflow-hidden">
                    {/* Background Video */}


                    <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
                    {/* Dark Overlay */}

                    {/* Content */}
                    <div className="relative z-10 flex  pt-[8%] md:w-[60%] px-6">
                        <div className="text-left text-white  ">
                            <h1 className="text-5xl md:text-6xl  font-bold mb-6">
                                <span className='inline-block mb-4'>  Shaping the{' '} </span><br />
                                <span className="text-orange-500 inline-block mb-4">Skilled Heroes</span>{' '}  <br />
                                <span className='inline-block mb-2'>of Tomorrow ...</span>
                            </h1>
                            <p className="text-lg md:text-xl mb-8 text-gray-200">
                                Welcome to IGCSM, where we empower future professionals through skill-based education, industry expertise, and career-oriented opportunities.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner