import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import coma from "@/assets/images/coma.png"

import s1 from "@/assets/images/s1.jpg"
import s2 from "@/assets/images/s2.jpg"
import s3 from "@/assets/images/s3.jpg"
import s4 from "@/assets/images/s4.jpeg"
import s5 from "@/assets/images/s5.jpeg"
import s6 from "@/assets/images/s6.jpg"
import s7 from "@/assets/images/s7.jpeg"
import s8 from "@/assets/images/s8.jpg"
import s9 from "@/assets/images/s9.jpg"

const Reviews = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const Reviews = [
        {
            id: 1,
            name: "RAHUL",
            role: "Student",
            image: s1,
            msg: " igcsm ने मेरी ज़िन्दगी बदल दी है। यहाँ के कोर्स और ट्रेनिंग टॉप क्लास हैं। मुझे यहाँ से बहुत कुछ सीखने को मिला और अब मुझे एक अच्छी नौकरी मिल गई है।"
        },
        {
            id: 2,
            name: "STUTI",
            role: "Student",
            image: s2,
            msg: "igcsm में जुड़ना मेरे जीवन का सबसे अच्छा निर्णय था। यहाँ की शिक्षा और ट्रेनिंग से मुझे अपने करियर में आगे बढ़ने का आत्मविश्वास मिला है।"

        },
        {
            id: 3,
            name: "SACHIN",
            role: "Student",
            image: s3,
            msg: " igcsm में कौशल विकास पर जोर दिया जाता है। यहाँ के कोर्स इंडस्ट्री से जुड़े हुए हैं और मुझे यहाँ से बहुत कुछ सीखने को मिला है।"

        },
        {
            id: 4,
            name: "SHRISTHI HELA ",
            role: "Student",
            image: s4,
            msg: " igcsm में पढ़ाई का माहौल बहुत अच्छा है। शिक्षक बहुत जानकार हैं और हमेशा मदद के लिए तैयार रहते हैं। यहाँ के कोर्स लेटेस्ट इंडस्ट्री ट्रेंड्स के अनुसार हैं।"

        },
        {
            id: 5,
            name: "RAHUL",
            role: "Student",
            image: s5,
            msg: "  मैं igcsm में दी गई ट्रेनिंग से बहुत खुश हूँ। यहाँ के कोर्स प्रैक्टिकल और इंडस्ट्री से रिलेटेड हैं, जिससे मुझे अपने करियर में बहुत मदद मिली है।"

        },
        {
            id: 6,
            name: "ASHUTOSH",
            role: "Student",
            image: s6,
            msg: " igcsm ने मेरी उम्मीदों से बढ़कर प्रदर्शन किया है। यहाँ की शिक्षा की गुणवत्ता और छात्रों की सफलता के प्रति उनकी प्रतिबद्धता बेजोड़ है।"

        },
        {
            id: 7,
            name: "IVINA PARVEEN",
            role: "Student",
            image: s7,
            msg: "  igcsm में सुविधाएँ और संसाधन बहुत अच्छे हैं। यहाँ सैद्धांतिक ज्ञान और प्रैक्टिकल ट्रेनिंग का सही मिश्रण है। मुझे स्नातक होने से पहले ही नौकरी मिल गई।"

        },
        {
            id: 8,
            name: "SAHIL",
            role: "Student",
            image: s8,
            msg: " आईजीसीएसएम में मेरा अनुभव बहुत अच्छा रहा है। डीडीयू-जीकेवाई के तहत मुझे जो प्रशिक्षण मिला, उससे मुझे अच्छी नौकरी पाने में मदद मिली और अब मैं अच्छी कमाई कर रहा हूं।"

        },
        {
            id: 9,
            name: "PARSUN",
            role: "Student",
            image: s9,
            msg: "  मैं एक गरीब परिवार से हूं जो गुजारा करने के लिए संघर्ष कर रहा है। आईजीसीएसएम में कौशल विकास पाठ्यक्रम में शामिल होने से मेरा जीवन बदल गया है। मैंने कभी कंप्यूटर लैब नहीं देखी थी और न ही उसमें काम किया था और इतने जीवंत वातावरण का अनुभव किया था। मैं भी अब काम शुरू कर रहा हूं.' मेरा जीवन बदलने के लिए आईजीसीएसएम टीम को धन्यवाद।"

        },

    ];


    return (
        <section className='pt-20'>
            <div className="container">
                <div className="mb-10">
                    <div className="flex items-center ">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                            What Students Saying
                        </h2>
                        {/* Navigation Arrows */}
                        <div className='rotate-40 ms-10 text-orange-600'>
                            <svg width="100" height="73" viewBox="0 0 149 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M137.863 0.579489C137.792 0.790681 137.722 1.35386 137.722 1.84664C137.722 2.33943 137.558 4.1463 137.346 5.88277C136.877 9.8485 137.041 15.8792 137.722 19.3287C137.98 20.6193 138.191 21.7222 138.191 21.7926C138.168 21.9804 137.182 20.7601 134.86 17.733C131.763 13.65 130.355 12.0778 127.54 9.59038C119.399 2.38636 111.869 -0.523407 104.408 0.696818C100.584 1.30693 94.9773 3.77085 91.4113 6.37556C83.6695 12.0778 77.734 22.9659 76.4672 33.8072C76.1856 36.1537 76.3029 43.0762 76.6548 46.2675L76.7956 47.6286L75.4115 46.995C68.2795 43.7332 64.6432 42.3722 59.482 41.0346C53.9688 39.6032 48.7372 39.087 43.529 39.439C25.3239 40.6592 10.0982 57.4842 3.55276 83.6252C2.49705 87.896 0.854832 96.0386 0.362167 99.5585C-0.623162 106.434 0.479469 115.609 2.73165 119.246C3.5293 120.514 4.46771 121.523 4.86653 121.523C5.33574 121.523 5.2419 121.077 4.32695 119.246C2.96625 116.477 2.49705 113.755 2.49705 108.499C2.47359 103.454 2.56743 102.891 4.37387 95.0061C7.16564 82.8743 9.32398 76.4916 13.3591 68.5601C16.5497 62.2713 19.5292 58.0709 23.7989 53.8235C29.0775 48.5672 34.661 45.4932 40.8545 44.4137C44.1155 43.8505 50.7078 44.0852 54.5788 44.883C60.655 46.1737 64.9717 47.7459 73.1827 51.7116C78.3674 54.2225 79.4701 54.5041 80.8073 53.6124C82.4495 52.5564 82.6372 51.1954 81.9803 45.6809C81.7692 43.9444 81.5815 40.5419 81.5815 37.9841C81.558 34.0653 81.6284 33.0797 82.0742 31.0382C83.4114 24.8432 86.0624 19.4226 90.0272 14.7294C93.7808 10.2709 99.9509 6.77447 105.37 6.04703C109.499 5.48385 114.168 6.98567 119.024 10.4821C121.769 12.4298 126.766 17.4514 129.088 20.6193L131.083 23.3179L130.215 23.4822C129.745 23.5526 127.235 23.7638 124.678 23.9046C119.306 24.2096 118.555 24.3739 117.429 25.336C115.575 26.9786 115.904 29.9822 118.086 31.0147C119.212 31.5544 123.012 32.0472 127.282 32.2349C129.229 32.3053 133.945 32.5869 137.769 32.8685C145.511 33.4317 145.98 33.3848 147.458 32.0941C149.288 30.475 149.194 28.4569 147.059 23.5291C146.214 21.5814 145.112 18.7421 144.643 17.1933C142.602 10.5994 139.974 2.59755 139.458 1.44773C138.895 0.180568 138.168 -0.218351 137.863 0.579489Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 2 }
                    }}
                    className="pb-12"
                >
                    {Reviews?.map((review) => (
                        <SwiperSlide key={review.id} className="mb-10">
                            <div
                                key={review.id}
                                className="group relative overflow-hidden bg-green-100 shadow-md rounded-bl-4xl rounded-tr-4xl p-5  cursor-pointer"
                                onMouseEnter={() => setHoveredCard(review.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Image Container */}
                                <div className="relative p-3  overflow-hidden space-y-5   ">
                                    <img src={coma} alt="" className='size-10  ' />
                                    <p className="text-gray-700 text-lg!  ">
                                        {review.msg}
                                    </p>
                                    <div className="flex gap-3 items-center  ">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-17 h-17 object-cover rounded-full overflow-hidden transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div>
                                            <p className='font-semibold '>{review.name}</p>
                                            <p className='text-sm!'>{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>




            </div>
        </section>
    )
}

export default Reviews