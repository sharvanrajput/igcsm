import React from 'react'
import img from "@/assets/images/goverment-p.webp"

import gp1 from "@/assets/images/gp-1.webp"
import gp2 from "@/assets/images/gp-2.webp"
import gp3 from "@/assets/images/gp-3.webp"
import gp4 from "@/assets/images/gp-4.webp"
import gp5 from "@/assets/images/gp-5.webp"
import gp6 from "@/assets/images/gp-6.webp"
import gp7 from "@/assets/images/gp-7.webp"
import gp8 from "@/assets/images/gp-11.webp"
import gp9 from "@/assets/images/gp-12.webp"
import gp10 from "@/assets/images/gp-21.webp"
import gp11 from "@/assets/images/gp-31.webp"
import gp12 from "@/assets/images/gp-41.webp"
import gp13 from "@/assets/images/gp-51.webp"
import gp14 from "@/assets/images/gp-52.webp"
import gp15 from "@/assets/images/gp-53.webp"
import gp16 from "@/assets/images/gp-54.webp"
import gp17 from "@/assets/images/gp-55.webp"
import gp18 from "@/assets/images/gp-61.webp"
import gp19 from "@/assets/images/gp-71.webp"

const ministries = [
    {
        id: 1,
        img: gp1,
        name: "MINISTRY OF\nMINORITY AFFAIRS",
        hindiName: "अल्पसंख्यक कार्य मंत्रालय",
        projects: [
            {
                sno: 1,
                logo: gp8,
                project: "Seekho or Kamao",

                url: "https://seekhoaurkamao.minorityaffairs.gov.in/About.aspx?from=H",
                state: "Uttar Pradesh\nWest Bengal\nMadhya Pradesh",
                allotted: 2500,
                completed: 2498,
            },
            {
                sno: 2,
                logo: gp9,
                project: "Maulana Azad Education Foundation",
                url: "https://www.maef.nic.in/about-us",
                state: "Uttar Pradesh",
                allotted: 1007,
                completed: 1007,
            },
        ],
    },
    {
        id: 2,
        img: gp2,
        name: "MINISTRY OF RURAL\nDEVELOPMENT\nGOVERNMENT OF INDIA",
        hindiName: "ग्रामीण विकास मंत्रालय",
        projects: [
            {
                sno: 1,
                logo: gp10,
                project: "DDU-GKY",
                url: "http://ddugky.info/about.php",
                state: "Uttar Pradesh",
                allotted: 3049,
                completed: 2783,
            },
        ],
    },
    {
        id: 3,
        img: gp3,
        name: "MINISTRY OF\nTRIBAL AFFAIRS",
        hindiName: "जनजातीय कार्य मंत्रालय",
        projects: [
            {
                sno: 1,
                logo: gp11,
                project: "MAPCET",
                url: "https://mapcet.mp.gov.in/contents.aspx?page=vision&number=o1KqTLoOHudnn/PZ1TMAeg==",
                state: "Madhya Pradesh",
                allotted: 385,
                completed: 60,
            },
        ],
    },
    {
        id: 4,
        img: gp4,
        name: "Ministry of Housing\nand Urban Affairs\nGovernment of India",
        hindiName: "",
        projects: [
            {
                sno: 1,
                logo: gp12,
                project: "DAY-NULM",
                url: "https://nulm.gov.in/",
                state: "Uttar Pradesh\nMadhya Pradesh",
                allotted: 1080,
                completed: 1050,
            },
        ],
    },
    {
        id: 5,
        img: gp5,
        name: "MINISTRY OF\nSKILL DEVELOPMENT\nAND ENTREPRENEURSHIP",
        hindiName: "कौशल विकास और उद्यमिता मंत्रालय",
        projects: [
            {
                sno: 1,
                logo: gp13,
                project: "PMKVY",
                url: "https://www.pmkvyofficial.org/",
                state: "Uttar Pradesh\nMadhya Pradesh",
                allotted: 325,
                completed: 325,
            },
            {
                sno: 2,
                logo: gp14,
                project: "RSLDC",
                url: "https://livelihoods.rajasthan.gov.in/rsldc/#/sm/jankalyan-category-and-entry-type/53276/403/4/1",
                state: "Rajasthan",
                allotted: 950,
                completed: "In Process",
            },
            {
                sno: 3,
                logo: gp15,
                project: "UPSDM",
                url: "https://www.upsdm.gov.in/Home/AboutUPSDM",
                state: "Uttar Pradesh",
                allotted: 15741,
                completed: 14988,
            },
            {
                sno: 4,
                logo: gp16,
                project: "MPSSDEGB",
                url: "https://ssdm.mp.gov.in/mpssdegbhome.aspx",
                state: "Madhya Pradesh",
                allotted: 3810,
                completed: 2610,
            },
            {
                sno: 5,
                logo: gp17,
                project: "PBSSD",
                url: "https://ssdm.mp.gov.in/mpssdegbhome.aspx",
                state: "West Bengal",
                allotted: 868,
                completed: 868,
            },
        ],
    },
    {
        id: 6,
        img: gp6,
        name: "MINISTRY OF\nJAL SHAKTI",
        hindiName: "जल शक्ति मंत्रालय",
        projects: [
            {
                sno: 1,
                logo: gp18,
                project: "	Jal Jeevan Mission	",
                url: "https://jaljeevanmission.gov.in/about_jjm",
                state: "Uttar Pradesh",
                allotted: 31130,
                completed: "30385",
            },

        ],
    },
    {
        id: 7,
        img: gp7,
        name: "MINISTRY OF\nJAL SHAKTI",
        hindiName: "जल शक्ति मंत्रालय",
        projects: [
            {
                sno: 1,
                logo: gp19,
                project: "Green India Mission",
                url: "https://jaljeevanmission.gov.in/about_jjm",
                state: "Madhya Pradesh",
                allotted: 215,
                completed: "215",
            },

        ],
    },

];


function LogoPlaceholder({ label }) {
    return (
        <div className="w-30 h-auto border border-dashed border-gray-300 rounded bg-gray-50 flex items-center justify-center text-[10px] text-gray-400 text-center leading-tight px-1">
          
            <img src={label} alt="" />


        </div>
    );
}

function MinistryCard({ ministry, index }) {
    return (
        <div className="bg-white border   rounded-xl shadow-sm overflow-hidden mb-5">
            {/* Ministry Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                {/* Number badge */}
                <div className="flex-shrink-0 w-7 h-7 rounded-tl-lg rounded-br-lg  bg-orange-500 flex items-center justify-center text-white text-sm font-bold leading-none">
                    {index + 1}
                </div>

                {/* Logo + Name */}
                <div className="flex items-center gap-3">
                    {/* Ministry emblem placeholder */}
                    <div className="w-30 h-auto border border-dashed border-gray-300 rounded-xl bg-gray-50 flex items-center justify-center text-[10px] text-gray-400 text-center leading-tight">
                        <img src={ministry.img} alt="" />
                    </div>

                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-3 py-2.5 text-left font-semibold text-gray-600 text-xs whitespace-nowrap border-r border-gray-100">Sr. No.</th>
                            <th className="px-3 py-2.5 text-left font-semibold text-gray-600 text-xs border-r border-gray-100">Project</th>
                            <th className="px-3 py-2.5 text-left font-semibold text-gray-600 text-xs border-r border-gray-100">LOGO</th>
                            <th className="px-3 py-2.5 text-left font-semibold text-gray-600 text-xs border-r border-gray-100">URL Reference</th>
                            <th className="px-3 py-2.5 text-left font-semibold text-gray-600 text-xs border-r border-gray-100">State</th>
                            <th className="px-3 py-2.5 text-left font-semibold text-gray-600 text-xs border-r border-gray-100 whitespace-nowrap">Allotted Target</th>
                            <th className="px-3 py-2.5 text-left font-semibold text-gray-600 text-xs whitespace-nowrap">Completed Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ministry.projects.map((row, i) => (
                            <tr
                                key={row.sno}
                                className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                            >
                                <td className="px-3 py-3 text-gray-500 text-xs border-r border-gray-100 align-top">{row.sno}</td>
                                <td className="px-3 py-3 text-gray-700 text-sm font-medium border-r border-gray-100 align-top whitespace-nowrap">{row.project}</td>
                                <td className="px-3 py-3 border-r border-gray-100 align-top">
                                    <LogoPlaceholder label={row.logo} />
                                </td>
                                <td className="px-3 py-3 border-r border-gray-100 align-top max-w-xs">
                                    <a
                                        href={row.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-green-600 hover:text-green-700 hover:underline text-xs break-all leading-relaxed"
                                    >
                                        {row.url}
                                    </a>
                                </td>
                                <td className="px-3 py-3 text-gray-600 text-xs border-r border-gray-100 align-top whitespace-pre-line leading-relaxed">{row.state}</td>
                                <td className="px-3 py-3 text-gray-700 text-sm border-r border-gray-100 align-top">{row.allotted}</td>
                                <td className="px-3 py-3 text-gray-700 text-sm align-top">{row.completed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const GovernmentPartnershipBody = () => {
    return (
        <>
            <section className='py-10'>
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <div className='space-y-4 self-center'>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Higher Education</h2>

                            <p>"Partner content" typically refers to content that is created in collaboration with a goverment partner or sponsor. It can take various forms, including articles, videos, blog posts, or other media, and is often produced to promote a product, service, or brand.</p>
                            <p>In the context of online platforms, partner content is usually labeled or identified as such to ensure transparency. This disclosure helps audiences distinguish between editorial or independent content and content that has been created in partnership with a specific entity.

                            </p>
                        </div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <section className=" py-12 font-sans">
                        <div className=" ">
                            {ministries.map((ministry, i) => (
                                <MinistryCard key={ministry.id} ministry={ministry} index={i} />
                            ))}
                        </div>
                    </section>
                </div>
            </section>


        </>
    )
}

export default GovernmentPartnershipBody


