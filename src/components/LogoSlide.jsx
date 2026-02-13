import one from "@/assets/images/1.png"
import two from "@/assets/images/2.png"
import three from "@/assets/images/3.webp"
import four from "@/assets/images/1.webp"
import six from "@/assets/images/2.webp"
import seven from "@/assets/images/3.webp"
import eight from "@/assets/images/4.webp"
import nine from "@/assets/images/5.webp"
// import one from "@/assets/images/1.png"
// import one from "@/assets/images/1.png"
// import one from "@/assets/images/1.png"
// import one from "@/assets/images/1.png"
// import one from "@/assets/images/1.png"



export default function LogoSlider() {
    const logos = [
        one,
        two,
        three,
        four,
        six,
        seven,
        eight,
        nine
    ];

    return (
        <div className=" bg-white! ">

            <div className="overflow-hidden py-3 ">
                <div className="flex items-center gap-10 whitespace-nowrap  animate-[scroll_25s_linear_infinite] ">


                    {/* Duplicate Set (for infinite effect) */}
                    {[...logos, ...logos].map((logo, i) => (
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
