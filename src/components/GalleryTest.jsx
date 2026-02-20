import React from 'react'
import gallery1 from "@/assets/images/gallery1.webp"
import gallery2 from "@/assets/images/gallery2.webp"
import gallery3 from "@/assets/images/gallery3.webp"
import gallery4 from "@/assets/images/gallery4.jpeg"
import gallery5 from "@/assets/images/gallery5.jpeg"
import gallery6 from "@/assets/images/gallery6.jpeg"
import gallery7 from "@/assets/images/gallery7.jpeg"

const GalleryTest = () => {
  const logos = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
  ];

  return (
    <section className='pt-10'>
      <div className='mb-10 text-center'>
        <h2 className="text-3xl text-orange-500 mb-3 lg:text-4xl font-semibold leading-tight">
          Gallery
        </h2>
      </div>

      <div className='relative'>
        {/* gradient edges */}
        <div className="absolute h-full w-50 left-0 top-0 bg-linear-to-r from-white/70 z-10 to-orange-50/0"></div>
        <div className="absolute h-full w-50 right-0 top-0 bg-linear-to-l from-white/70 z-10 to-orange-50/0"></div>

        <div className="overflow-hidden py-3">
          <div className="flex w-max mx-auto items-center gap-5 animate-[scroll_20s_linear_infinite]">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="gallery"
                className="h-50 md:h-70 rounded-md object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryTest
