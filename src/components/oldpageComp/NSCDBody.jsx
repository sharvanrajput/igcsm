

import { useState } from "react";
import nsdc from "@/assets/images/nsdc.webp"
const tableData = [
    { sno: 1, state: "Jammu & Kashmir", project: "Seekho Aur Kamao", trained: 540 },
    { sno: 2, state: "Uttar Pradesh", project: "PMKVY", trained: 325 },
    { sno: 3, state: "Uttar Pradesh", project: "RPL", trained: 120 },
    { sno: 4, state: "Uttar Pradesh\nMadhya Pradesh", project: "Fee Based", trained: 6372 },
];

export default function NSCDBody() {
    return (
        <section className="bg-white py-12 px-4 font-sans">
            <div className="container">

                {/* Heading */}
                <h2 className="text-center text-2xl  font-semibold tracking-widest mb-8" >
                    NSDC PARTNERSHIP
                </h2>

                {/* Top block: certificate placeholder + intro text */}
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    {/* Certificate placeholder */}
                    <div
                        className="flex-shrink-0 w-full md:w-56   border-2 border-dashed border-orange-300 rounded flex items-center justify-center bg-gray-50 text-gray-400 text-sm text-center"

                    >
                        <img src={nsdc} className="w-full h-auto" alt="" />
                    </div>

                    {/* Intro paragraph */}
                    <p className="text-gray-700 text-sm leading-relaxed">
                        NSDC seeks to form partnerships with organizations that share a common goal of enhancing the skills and
                        employability of the Indian workforce. National Skill Development Corporation (NSDC), endeavors to create a
                        sustainable and enabling skill ecosystem. In order to foster skill development across the country, NSDC provides
                        funding support to enterprises, companies and organizations to build capacity by extending resources, technical
                        assistance, thought leadership and knowledge management. Playing the role of a market-maker, NSDC is
                        responsible for enhancing and strengthening the skill development initiatives and ensuring long-term stability and
                        spurring growth.
                    </p>
                </div>

                {/* IGCSM paragraph */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    <span className="font-bold text-gray-900">Indira Gandhi Computer Shaksharta Mission (IGCSM)</span> is associated with NSDC as a non funded partner since 5
                    years. Partnerships under NSDC often focus on designing and implementing skill training programs in various sectors, aligning with industry needs and promoting
                    employment opportunities for the skilled workforce.
                </p>

                {/* Monitoring paragraph */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    On basis of the partnership of IGCSM with NSDC and as per the terms and conditions NSDC involved in monitoring and evaluating the effectiveness of skill development
                    programs initiated through these partnerships, with a focus on outcomes and impact.
                </p>

                {/* Non-funded paragraph */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    Non-funded partnerships are exploring sustainable models for skill development that can continue to operate independently once initiated, ensuring a lasting impact on
                    the workforce.
                </p>

                {/* Table intro */}
                <p className="text-gray-900 text-sm font-semibold mb-4">
                    On basis of our association with NSDC we have trained many candidates in various states the details are as follows:
                </p>

                {/* Table */}
                <div className="border border-gray-200 rounded overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3 font-semibold text-gray-700 w-16">S.No.</th>
                                <th className="px-4 py-3 font-semibold text-gray-700">State</th>
                                <th className="px-4 py-3 font-semibold text-gray-700">Project</th>
                                <th className="px-4 py-3 font-semibold text-gray-700">Trained Numbers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, i) => (
                                <tr key={row.sno} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="px-4 py-3 text-gray-600 border-t border-gray-100">{row.sno}</td>
                                    <td className="px-4 py-3 text-gray-700 border-t border-gray-100 whitespace-pre-line">{row.state}</td>
                                    <td className="px-4 py-3 text-gray-700 border-t border-gray-100">{row.project}</td>
                                    <td className="px-4 py-3 text-gray-700 border-t border-gray-100">{row.trained}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}