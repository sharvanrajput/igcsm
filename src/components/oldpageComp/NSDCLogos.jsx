import React from 'react'
import l1 from "@/assets/images/nsdc-l1.webp"
import l2 from "@/assets/images/nsdc-l2.webp"
import l3 from "@/assets/images/nsdc-l3.webp"
const NSDCLogos = () => {
    return (
        <section className="py-14 sm:py-20 bg-gray-50">
            <div className="container  ">

                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Recognition</h2>
                    <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
                    <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
                        Certified, empanelled, and recognised by leading national bodies, ministries, and skill development organisations across India.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className='self-center'>
                        <img src={l1} className='w-full h-auto' alt="" />
                    </div>
                    <div className='self-center'>
                        <img src={l2} className='w-full h-auto' alt="" />
                    </div>
                    <div className='self-center'>
                        <img src={l3} className='w-full h-auto' alt="" />
                    </div>

                </div>


            </div>
        </section>

    )
}

export default NSDCLogos