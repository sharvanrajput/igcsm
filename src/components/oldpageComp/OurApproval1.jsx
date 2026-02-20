

import React, { useState } from "react";
import { HiOutlineChevronRight, HiOutlineExternalLink } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { BsAward } from "react-icons/bs";

const recognitions = [
    { id: 1, label: "IGCSM Registration Certificate", href: null, category: "Registration" },
    { id: 2, label: "IGCSM PAN Card", href: null, category: "Registration" },
    { id: 3, label: "IGCSM TAN Number", href: null, category: "Registration" },
    { id: 4, label: "IGCSM GST Number Certificate", href: null, category: "Registration" },
    { id: 5, label: "IGCSM 12AA Certificate", href: null, category: "Registration" },
    { id: 6, label: "IGCSM 80G Certificate", href: null, category: "Registration" },
    { id: 7, label: "IGCSM FCRA Certificate", href: null, category: "Registration" },
    { id: 8, label: "ISO 9001:2005 Certificate", href: "/assets/img/certi/1.webp", category: "Certification" },
    { id: 9, label: "IGCSM HDFC Bank Account Number", href: null, category: "Registration" },
    { id: 10, label: "IGCSM AXIS Bank Account Number", href: null, category: "Registration" },
    { id: 11, label: "NCVET Approval Letter", href: null, category: "Affiliation" },
    { id: 12, label: "SCVT Approval Letter", href: null, category: "Affiliation" },
    { id: 13, label: "Computer Society of India Membership Letter", href: null, category: "Membership" },
    { id: 14, label: "Hardoi Government Polytechnic AICTE Affiliation Letter", href: null, category: "Affiliation" },
    { id: 15, label: "Moradabad Government ITI NCVET Affiliation Letter", href: null, category: "Affiliation" },
    { id: 16, label: "Uttar Pradesh Skill Development Mission (UPSDM) Empanelment Letter", href: null, category: "Empanelment" },
    { id: 17, label: "Madhya Pradesh MPSSDEGB Empanelment Letter", href: null, category: "Empanelment" },
    { id: 18, label: "Uttar Pradesh State Rural Livelihoods Mission (UPSRLM) Empanelment Letter", href: null, category: "Empanelment" },
    { id: 19, label: "WB SC ST & OBC Development & Finance Corporation Empanelment Letter", href: null, category: "Empanelment" },
    { id: 20, label: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY) Empanelment Letter", href: null, category: "Empanelment" },
    { id: 21, label: "Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY 4.0) Empanelment Letter", href: null, category: "Empanelment" },
    { id: 22, label: "Paschim Banga Society for Skill Development (PBSSD) Empanelment Letter", href: null, category: "Empanelment" },
    { id: 23, label: "DAY-NULM Empanelment Letter", href: null, category: "Empanelment" },
    { id: 24, label: "Uttar Pradesh School Project / PRAVEEN Project Empanelment Letter", href: null, category: "Empanelment" },
    { id: 25, label: "Microsoft Company Collaboration Letter", href: null, category: "Collaboration" },
    { id: 26, label: "Jal Jeevan Mission Empanelment Letter", href: null, category: "Empanelment" },
    { id: 27, label: "NAFED Empanelment Letter", href: null, category: "Empanelment" },
    { id: 28, label: "National Skill Development Corporation (NSDC) Empanelment Certificate", href: null, category: "Certification" },
    { id: 29, label: "Technical Intern Training Program (TITP) Empanelment Certificate", href: null, category: "Certification" },
    { id: 30, label: "MSME UDYAM Registration Certificate", href: null, category: "Registration" },
    { id: 31, label: "Ministry of Minority Affairs (MoMA) Empanelment Letter", href: null, category: "Empanelment" },
    { id: 32, label: "Ministry of Rural Development (MoRD) Empanelment Certificate", href: null, category: "Empanelment" },
    { id: 33, label: "Ministry of Tribal Affairs Empanelment Letter", href: null, category: "Empanelment" },
    { id: 34, label: "Ministry of Tourism Empanelment Letter", href: null, category: "Empanelment" },
    { id: 35, label: "Ministry of MSME Empanelment Letter", href: null, category: "Empanelment" },
    { id: 36, label: "Ministry of Jal Shakti Empanelment Letter", href: null, category: "Empanelment" },
    { id: 37, label: "University Grants Commission (UGC) Letter", href: null, category: "Affiliation" },
    { id: 38, label: "Sikkim Govt. Gazette passed by Sikkim Legislative Assembly", href: null, category: "Registration" },
    { id: 39, label: "TeleCom Sector Skill Council Certificate", href: "/pdf/TeleCom Sector Skill Council Certificate.pdf", category: "Certification" },
    { id: 40, label: "Home Management And Care Givers Sector Skill Council Certificate", href: "/pdf/Home Management And Care Givers Sector Skill Council Certificate.pdf", category: "Certification" },
    { id: 41, label: "Tourism & Hospitality Skill Council Certificate of Empanelment", href: "/pdf/TOURISM & HOSPITALITY SKILL COUNCIL Certificate of Empanelment.pdf", category: "Certification" },
    { id: 42, label: "Rubber, Chemical & Petrochemical Skill Development Council Certificate", href: "/pdf/Rubber, Chemical & Petrochemical Skill Development Council Certificate.pdf", category: "Certification" },
];

const CATEGORIES = ["All", "Registration", "Certification", "Affiliation", "Empanelment", "Membership", "Collaboration"];

const CATEGORY_COLORS = {
    Registration: "bg-blue-100 text-blue-700 border-blue-200",
    Certification: "bg-green-100 text-green-700 border-green-200",
    Affiliation: "bg-purple-100 text-purple-700 border-purple-200",
    Empanelment: "bg-orange-100 text-orange-700 border-orange-200",
    Membership: "bg-pink-100 text-pink-700 border-pink-200",
    Collaboration: "bg-teal-100 text-teal-700 border-teal-200",
};

export default function OurApproval1() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = activeFilter === "All"
        ? recognitions
        : recognitions.filter((r) => r.category === activeFilter);

    return (
        <section className="py-14 sm:py-20 bg-gray-50">
            <div className="container">

                {/* ── Header ── */}
                <div className="text-center mb-10">
                   
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Recognition</h2>
                    <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
                    <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
                        Certified, empanelled, and recognised by leading national bodies, ministries, and skill development organisations across India.
                    </p>
                </div>

                {/* ── Stats strip ── */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    {[
                        { n: "42+", l: "Recognitions" },
                        { n: "10+", l: "Ministries" },
                        { n: "15+", l: "Empanelments" },
                        { n: "8+", l: "Certifications" },
                    ].map(({ n, l }) => (
                        <div key={l} className="bg-white border border-gray-200 rounded-xl py-4 text-center shadow-sm">
                            <p className="text-2xl font-extrabold text-orange-500">{n}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{l}</p>
                        </div>
                    ))}
                </div> */}

                {/* ── Filter tabs ── */}
                {/* <div className="flex flex-wrap gap-2 mb-8">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${activeFilter === cat
                                ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200"
                                : "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-500"
                                }`}
                        >
                            {cat}
                            <span className={`ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${activeFilter === cat ? "bg-white/25 text-white" : "bg-gray-100 text-gray-500"
                                }`}>
                                {cat === "All" ? recognitions.length : recognitions.filter(r => r.category === cat).length}
                            </span>
                        </button>
                    ))}
                </div> */}

                {/* ── Recognition grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            className={`group bg-white border border-gray-200 rounded-xl px-4 py-3.5 flex items-start gap-3 shadow-sm
                          hover:border-orange-300 hover:shadow-md hover:shadow-orange-50 transition-all duration-200
                          ${item.href ? "cursor-pointer" : ""}`}
                            onClick={() => item.href && window.open(item.href, "_blank")}
                        >
                            {/* Number */}
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-50 border border-orange-200 text-orange-500 text-xs font-bold flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-200">
                                {item.id}
                            </span>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-700 leading-snug group-hover:text-gray-900 transition-colors duration-200">
                                    {item.label}
                                </p>
                                <div className="flex items-center gap-2 mt-1.5">
                                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[item.category]}`}>
                                        {item.category}
                                    </span>
                                    {item.href && (
                                        <span className="text-[10px] text-orange-500 font-semibold flex items-center gap-0.5">
                                            <HiOutlineExternalLink size={11} /> View
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Arrow icon */}
                            <HiOutlineChevronRight
                                className="flex-shrink-0 text-gray-300 group-hover:text-orange-500 transition-colors duration-200 mt-0.5"
                                size={16}
                            />
                        </div>
                    ))}
                </div>

                {/* ── Footer note ── */}
                <div className="mt-10 flex items-center gap-3 justify-center text-xs text-gray-400">
                    <MdVerified className="text-orange-500" size={16} />
                    All recognitions are officially issued by respective government bodies and organisations.
                </div>

            </div>
        </section>
    );
}