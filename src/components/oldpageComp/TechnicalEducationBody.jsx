import { useState, useEffect, useRef } from "react";

import iit1 from "@/assets/images/ITI-Baldev.webp"
import iit2 from "@/assets/images/ITI-Khair.webp"
import iit3 from "@/assets/images/ITI-Kanth.webp"
import iit4 from "@/assets/images/Polytechnic-Gopamau.webp"
import iit5 from "@/assets/images/Polytechnic-Bilsi.webp"
import iit6 from "@/assets/images/Polytechni-Sandila.webp"
import iit7 from "@/assets/images/Polytechnic-Sikandrarau.webp"
import iit8 from "@/assets/images/Polytechnic-Faridpur.webp"

const itiData = [
    {
        id: 0,
        img: iit1,
        name: "Govt ITI Baldev",
        fullName: "GOVERNMENT ITI BALDEV, MATHURA ITI CODE : 503\nAFFILIATED WITH SCVT",
        principal: { name: "Dharmendra Jadon", phone: "9826203794", email: "principal@govitibaldev.edu.in", link: "https://govitibaldev.edu.in" },
        description: "Indira Gandhi Computer Shaksharta Mission (IGCSM) has been awarded on dated 14TH March 2024 to implement newly constructed Government Industrial Training Institutes (ITI) located at Baldev, Mathura, Uttar Pradesh through PPP mode. It is expanded in a vast area and covering more than 2.5 acres of land for its operations.",
        courses: [
            { sno: 1, name: "Fitter", seats: 20, duration: "2 Year", eligibility: "10th" },
            { sno: 2, name: "Machinist", seats: 20, duration: "2 Year", eligibility: "10th" },
            { sno: 3, name: "Electrician", seats: 20, duration: "2 Year", eligibility: "10th" },
            { sno: 4, name: "Mechanic (Refrigeration And Air – Conditioning)", seats: 24, duration: "2 Year", eligibility: "10th" },
            { sno: 5, name: "Electronics Mechanic", seats: 24, duration: "2 Year", eligibility: "10th" },
            { sno: 6, name: "Mechanic (Motor Vehicle)", seats: 24, duration: "2 Year", eligibility: "10th" },
            { sno: 7, name: "Welder", seats: 40, duration: "2 Year", eligibility: "8th" },
            { sno: 8, name: "Computer Operator and Programming Assistant", seats: 48, duration: "1 Year", eligibility: "10th" },
            { sno: 9, name: "Fashion Design & Technology", seats: 40, duration: "1 Year", eligibility: "10th" },
            { sno: 10, name: "Drone Technician", seats: 24, duration: "6 Months", eligibility: "10th" },
            { sno: 11, name: "IoT Technician (Smart City)", seats: 48, duration: "1 Year", eligibility: "10th" },
            { sno: 12, name: "Sewing Technology", seats: 40, duration: "1 Year", eligibility: "8th" },
        ],
    },
    {
        id: 1,
        img: iit2,
        name: "Govt ITI Khair",
        fullName: "GOVERNMENT ITI KHAIR, ALIGARH ITI CODE : 212\nAFFILIATED WITH SCVT",
        principal: { name: "Rajesh Kumar", phone: "9456789012", email: "principal@govitikhair.edu.in", link: "https://govitikhair.edu.in" },
        description: "Indira Gandhi Computer Shaksharta Mission (IGCSM) operates Government ITI Khair in Aligarh district, Uttar Pradesh through PPP mode. The institute provides quality technical education and vocational training to students from surrounding regions, covering a sprawling campus of over 2 acres.",
        courses: [
            { sno: 1, name: "Electrician", seats: 20, duration: "2 Year", eligibility: "10th" },
            { sno: 2, name: "Fitter", seats: 20, duration: "2 Year", eligibility: "10th" },
            { sno: 3, name: "Welder", seats: 40, duration: "2 Year", eligibility: "8th" },
            { sno: 4, name: "Computer Operator and Programming Assistant", seats: 48, duration: "1 Year", eligibility: "10th" },
            { sno: 5, name: "Sewing Technology", seats: 40, duration: "1 Year", eligibility: "8th" },
        ],
    },
    {
        id: 2,
        img: iit3,
        name: "Govt ITI Kanth",
        fullName: "GOVERNMENT ITI KANTH, MORADABAD ITI CODE : 318\nAFFILIATED WITH SCVT",
        principal: { name: "Suresh Yadav", phone: "9512345678", email: "principal@govitikanth.edu.in", link: "https://govitikanth.edu.in" },
        description: "Government ITI Kanth, Moradabad is managed under the PPP model by IGCSM. Located in Kanth town, the institute serves students from Moradabad and surrounding areas. It offers industry-relevant courses designed to enhance employability and skill development in the region.",
        courses: [
            { sno: 1, name: "Machinist", seats: 20, duration: "2 Year", eligibility: "10th" },
            { sno: 2, name: "Electrician", seats: 20, duration: "2 Year", eligibility: "10th" },
            { sno: 3, name: "Turner", seats: 20, duration: "2 Year", eligibility: "10th" },
            { sno: 4, name: "Welder", seats: 40, duration: "2 Year", eligibility: "8th" },
            { sno: 5, name: "Fashion Design & Technology", seats: 40, duration: "1 Year", eligibility: "10th" },
            { sno: 6, name: "Computer Operator and Programming Assistant", seats: 48, duration: "1 Year", eligibility: "10th" },
        ],
    },
    {
        id: 3,
        img: iit4,
        name: "Govt Polytechnic, Gopamau",
        fullName: "GOVERNMENT POLYTECHNIC GOPAMAU, HARDOI\nAFFILIATED WITH BTEUP",
        principal: { name: "Anil Verma", phone: "9678901234", email: "principal@govpolygopamau.edu.in", link: "https://govpolygopamau.edu.in" },
        description: "Government Polytechnic Gopamau in Hardoi district is managed by IGCSM under PPP mode. The polytechnic offers diploma-level technical courses and is affiliated with the Board of Technical Education Uttar Pradesh (BTEUP). The institute aims to produce skilled diploma engineers.",
        courses: [
            { sno: 1, name: "Civil Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 2, name: "Electrical Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 3, name: "Mechanical Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 4, name: "Computer Science Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
        ],
    },
    {
        id: 4,
        img: iit5,
        name: "Govt Polytechnic, Bilsi",
        fullName: "GOVERNMENT POLYTECHNIC BILSI, BUDAUN\nAFFILIATED WITH BTEUP",
        principal: { name: "Pradeep Sharma", phone: "9834567890", email: "principal@govpolybilsi.edu.in", link: "https://govpolybilsi.edu.in" },
        description: "Government Polytechnic Bilsi in Budaun district operates under IGCSM's PPP management model. Affiliated with BTEUP, the polytechnic provides quality diploma engineering education to students from Budaun and surrounding rural areas, bridging the gap between education and industry.",
        courses: [
            { sno: 1, name: "Civil Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 2, name: "Mechanical Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 3, name: "Electronics Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
        ],
    },
    {
        id: 5,
        img: iit6,
        name: "Govt Polytechni, Sandila",
        fullName: "GOVERNMENT POLYTECHNIC SANDILA, HARDOI\nAFFILIATED WITH BTEUP",
        principal: { name: "Vivek Mishra", phone: "9745678901", email: "principal@govpolysandila.edu.in", link: "https://govpolysandila.edu.in" },
        description: "Government Polytechnic Sandila, located in Hardoi district, is managed by IGCSM under the PPP model. The institution offers quality technical education with modern infrastructure and labs, ensuring students are industry-ready upon completion of their diploma programmes.",
        courses: [
            { sno: 1, name: "Civil Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 2, name: "Electrical Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 3, name: "Information Technology", seats: 60, duration: "3 Year", eligibility: "10th" },
        ],
    },
    {
        id: 6,
        img: iit7,
        name: "Govt Polytechnic Sikandrarau",
        fullName: "GOVERNMENT POLYTECHNIC SIKANDRARAU, HATHRAS\nAFFILIATED WITH BTEUP",
        principal: { name: "Deepak Gupta", phone: "9656789012", email: "principal@govpolysikandrarau.edu.in", link: "https://govpolysikandrarau.edu.in" },
        description: "Government Polytechnic Sikandrarau, Hathras is operated by IGCSM through the PPP model. Serving students from Hathras and adjoining districts, the polytechnic is committed to providing affordable, quality technical education and developing a skilled engineering workforce.",
        courses: [
            { sno: 1, name: "Civil Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 2, name: "Mechanical Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 3, name: "Computer Science Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 4, name: "Electrical Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
        ],
    },
    {
        id: 7,
        img: iit8,
        name: "Govt Polytechnic, Faridpur",
        fullName: "GOVERNMENT POLYTECHNIC FARIDPUR, BAREILLY\nAFFILIATED WITH BTEUP",
        principal: { name: "Sanjay Singh", phone: "9523456789", email: "principal@govpolyfaridpur.edu.in", link: "https://govpolyfaridpur.edu.in" },
        description: "Government Polytechnic Faridpur in Bareilly district is managed under IGCSM's PPP programme. The institute offers diploma engineering programmes in key technical disciplines and is dedicated to developing technically competent graduates ready for employment and entrepreneurship.",
        courses: [
            { sno: 1, name: "Civil Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 2, name: "Electrical Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 3, name: "Mechanical Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 4, name: "Computer Science Engineering", seats: 60, duration: "3 Year", eligibility: "10th" },
            { sno: 5, name: "Fashion Design & Technology", seats: 40, duration: "3 Year", eligibility: "10th" },
        ],
    },
];

// Fade-up animated wrapper
function FadeUp({ children, triggerKey }) {
    const [state, setState] = useState("visible"); // "visible" | "hidden"

    useEffect(() => {
        // On key change: hide → wait → show
        setState("hidden");
        const t = setTimeout(() => setState("visible"), 50);
        return () => clearTimeout(t);
    }, [triggerKey]);

    return (
        <div
            style={{
                transition: "opacity 0.4s ease, transform 0.4s ease",
                opacity: state === "visible" ? 1 : 0,
                transform: state === "visible" ? "translateY(0px)" : "translateY(20px)",
            }}
        >
            {children}
        </div>
    );
}

export default function TechnicalEducationBody() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = itiData[activeIndex];

    return (
        <section className="bg-white py-12 font-sans">
            <div className="container">



                {/* Two-column layout */}
                <div className="flex flex-col lg:flex-row gap-7 items-start">

                    {/* ── Main Content ── */}
                    <div className="flex-1 min-w-0" data-aos="fade-up" data-aos-duration="600" key={activeIndex}>
                        {/* <FadeUp triggerKey={activeIndex}> */}

                        {/* ITI Card */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-8">

                            {/* Card Title */}
                            <div className="bg-white px-6 py-5 border-b border-gray-100 text-center">
                                <h2 className="text-orange-500 font-bold text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                    {active.fullName}
                                </h2>
                            </div>

                            <div className="p-5 sm:p-6">

                                {/* Image + Description */}
                                <div className="flex flex-col sm:flex-row gap-5 mb-6">
                                    {/* Image placeholder */}
                                    <div className="sm:w-52 w-full h-44 flex-shrink-0 border-2 overflow-hidden border-dashed border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 text-sm text-center leading-relaxed">
                                        <img src={active.img} className="sm:w-52 w-full h-44" alt="" />
                                    </div>

                                    {/* Description */}
                                    <div className="text-sm text-gray-600 leading-relaxed">
                                        <p>{active.description}</p>
                                        <p className="mt-4 font-semibold text-gray-800">
                                            {active.name} offers an extensive range of courses across various trades such as follows:
                                        </p>
                                    </div>
                                </div>

                                {/* Principal Info Box */}
                                <div className="border-2 border-green-600 rounded-lg overflow-hidden">
                                    <div className="bg-green-600 px-4 py-2.5">
                                        <h3 className="text-white font-semibold text-sm">{active.name}</h3>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-sm font-semibold text-gray-800 mb-3">Principal Information</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-600">
                                                <span className="font-medium text-gray-800">Name:</span> {active.principal.name}
                                            </div>
                                            <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-600">
                                                <span className="font-medium text-gray-800">Phone:</span>{" "}
                                                <a href={`tel:${active.principal.phone}`} className="text-blue-600 hover:underline">
                                                    {active.principal.phone}
                                                </a>
                                            </div>
                                            <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-600">
                                                <span className="font-medium text-gray-800">Email:</span>{" "}
                                                <a href={`mailto:${active.principal.email}`} className="text-blue-600 hover:underline break-all">
                                                    {active.principal.email}
                                                </a>
                                            </div>
                                            <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-600">
                                                <span className="font-medium text-gray-800">Link:</span>{" "}
                                                <a href={active.principal.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all">
                                                    {active.principal.link}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Course Information */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5" style={{ fontFamily: "Georgia, serif" }}>
                            Course Information
                        </h2>

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-3 py-3 text-left font-semibold text-gray-700 border border-gray-200 whitespace-nowrap">S. No.</th>
                                        <th className="px-3 py-3 text-left font-semibold text-gray-700 border border-gray-200">Course Name</th>
                                        <th className="px-3 py-3 text-left font-semibold text-gray-700 border border-gray-200 whitespace-nowrap">Seats Availability</th>
                                        <th className="px-3 py-3 text-left font-semibold text-gray-700 border border-gray-200 whitespace-nowrap">Duration</th>
                                        <th className="px-3 py-3 text-left font-semibold text-gray-700 border border-gray-200 whitespace-nowrap">Eligibility</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {active.courses.map((row, i) => (
                                        <tr
                                            key={row.sno}
                                            className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
                                        >
                                            <td className="px-3 py-3 border border-gray-200 text-gray-500 text-center">{row.sno}</td>
                                            <td className="px-3 py-3 border border-gray-200 text-gray-700">{row.name}</td>
                                            <td className="px-3 py-3 border border-gray-200 text-gray-600 text-center">{row.seats}</td>
                                            <td className="px-3 py-3 border border-gray-200 text-gray-600 whitespace-nowrap">{row.duration}</td>
                                            <td className="px-3 py-3 border border-gray-200 text-gray-600">
                                                {row.eligibility}<sup className="text-[10px]">th</sup> Pass
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* </FadeUp> */}
                    </div>

                    {/* ── Sidebar ── */}
                    <div className="w-full lg:w-56 sticky top-40 flex-shrink-0">
                        <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden lg:sticky lg:top-6">

                            {/* Sidebar Header */}
                            <div className="px-5 pt-5 pb-3 border-b border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
                                    Our Courses
                                </h3>
                                <div className="w-9 h-0.5 bg-orange-500 mt-1.5 rounded-full" />
                            </div>

                            {/* Links */}
                            <ul className="py-2">
                                {itiData.map((item, i) => (
                                    <li key={i}>
                                        <button
                                            onClick={() => setActiveIndex(i)}
                                            className={`w-full flex items-start gap-2 px-5 py-2.5 text-left text-sm transition-colors
                        ${activeIndex === i
                                                    ? "text-orange-500 bg-orange-50 font-semibold"
                                                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                                                }`}
                                        >
                                            <span className="text-orange-500 font-bold mt-px leading-none">›</span>
                                            <span className="leading-snug">{item.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
