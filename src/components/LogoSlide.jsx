// import one from "@/assets/images/1.png"
import two from "@/assets/images/upsdm.png"
import three from "@/assets/images/3.webp"
import four from "@/assets/images/1.webp"
import six from "@/assets/images/2.jpg"
import seven from "@/assets/images/3.webp"
import eight from "@/assets/images/4.webp"
import nine from "@/assets/images/5.webp"
import msme from "@/assets/images/five.png"
import iso from "@/assets/images/iso.png"

import partner1 from "@/assets/images/partner-1.webp"
import partner2 from "@/assets/images/partner-2.webp"
import partner3 from "@/assets/images/partner-3.webp"
import partner4 from "@/assets/images/partner-4.webp"
import partner5 from "@/assets/images/partner-5.jpg"
import partner6 from "@/assets/images/partner-6.webp"
import partner7 from "@/assets/images/partner-7.webp"
import partner8 from "@/assets/images/partner-9.webp"
import partner9 from "@/assets/images/partner-10.webp"




export default function LogoSlider() {
    const logos = [
        partner1,
        partner8,
        partner2,
        // partner3,
        // partner4,
        partner5,
        partner6,
        partner7,
        // partner9,
        two,
        three,
        four,
        six,
        seven,
        eight,
        nine, msme, iso
    ];

    return (
        <div className=" bg-white! ">

            <div className="overflow-hidden py-3 ">
                <div className="flex items-center gap-10 whitespace-nowrap  animate-[scroll_15s_linear_infinite] ">


                    {/* Duplicate Set (for infinite effect) */}
                    {[...logos , ...logos , ...logos  ].map((logo, i) => (
                        <img
                            key={`second-${i}`}
                            src={logo}
                            alt="logo"
                            className="h-12 md:h-16 object-contain"
                        />
                    ))}


                </div>
            </div>
        </div>
    );
}
