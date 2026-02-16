import React from 'react'
import { Button } from './ui/button'
import ctaimg from "@/assets/images/cta.png"
const Cta = () => {
  return (
    <section className='md:py-0  relative overflow-hidden'>
      <div className="absolute w-full md:h-[70%] h-full bottom-0 left-0 bg-orange-500 "></div>
      <div className="container relative">
        <div className="bg-oragne-500">

          <div className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div className='lg:col-span-2 col-span-1 space-y-3 relative top-[50%] ' >
              <div data-aos="fade-top" data-aos-duration="600" className="flex  items-center gap-2  G   ">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white font-semibold text-sm md:text-base">
                  Your Growth, Our Commitment
                </span>
              </div>
              <h2 data-aos="fade-right" data-aos-duration="600" className="text-2xl lg:text-4xl  font-bold   ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <Button className={"bg-white text-black hover:bg-green-500"}>Enquire Now</Button>
            </div>
            <div>
              <img src={ctaimg} data-aos="fade-left" data-aos-duration="1000" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
