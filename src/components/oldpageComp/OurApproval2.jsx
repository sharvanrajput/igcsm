


import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { BsAward, BsTrophyFill } from "react-icons/bs";
import { MdEmojiEvents } from "react-icons/md";
import { HiGlobeAlt } from "react-icons/hi";
import { RiGovernmentLine } from "react-icons/ri";

const proudMoments = [
    "Message from our Hon'ble Prime Minister Shri. Narendra Modi Ji to IGCSM.",
    "Message from our Hon'ble Chief Minister, Uttar Pradesh Shri Adityanath Yogi Ji to IGCSM.",
    "Message from our Hon'ble Minister of Rural Development & Panchayati Raj, Government of India.",
    "Message from our Hon'ble Minister of Education, Government of Sikkim.",
];

const nationalAwards = [
    "5th Skill Development Summit for Innovation in Vocational Education and Skill Training by India Education Network (IEN)",
    "6th Skill Development Summit for \"Best Skill Development Institute Placement\" by India Education Network (IEN)",
    "10th World Education Award for Vocational and Skill Training organized by Elets Techno media Pvt. Ltd",
    "12th World Education Summit \"Performer of the year 2017-18 for Training & Placement under Skill Development & Entrepreneurship Govt. Project\" by Elets Techno media Pvt. Ltd.",
    "9th Annual Higher Education Summit for Excellence in Skill Development – Vocational Institute by Indian Education Network",
    "Best Performer of the year for generation of employment in various sector for SC/ST & Minority Candidates to help & support in Skill India Mission under Govt. of India by Indian Education Network",
    "National Award for Excellence in Vocational Training & Placement in field of Skill Development by National Education Network",
    "\"Most Promising Organization for Training & Promoting Employability Skills under Skill Development Sector\" by National Excellence Awards 2023 through WBR Corp Honored by Bollywood Actress Ms. Ishita Dutta.",
    "\"Best Performer in the field of Training and Placement under Skill Development Sector\" by India Business Award, 2023 through MMY Production House, Honored by Bollywood Actor Mr. Shakti Kapoor",
    "\"Best Emerging University in North East for the Innovative Ideas and Implementation of Best Futuristic Courses\" by International Excellence Awards ceremony held on December 17th, 2023 at Dwarka, New Delhi",
];

const internationalAwards = [
    "11th World Education Summit in DUBAI for \"Performer of the year 2016-17 Training and Placement under Skill Development & Entrepreneurship (Govt. Project)\"",
    "2nd International NGO & CSR Summit – 2018 at International level in Malaysia for Skill Development – 2018 by Mahez Foundation – India, Manipal International University, Kaula Lumpur, Malaysia",
    "2nd India-Global Education and Skill Summit 2022 at International Level in Singapore for Best performance in Skill Development by Future Skills Award.",
];

const internationalConferences = [
    "8th International Conference in Dubai in 2021 on New Approaches in Education & that Education is a cornerstone of society, and it is our responsibility to ensure that every child has access to quality and inclusive education.",
    "A high-level conference on inclusive education held in Bangkok in 2023 on \"Investing in safe and quality education for every child\" is co-organized by the EU's Civil Protection and Humanitarian Aid Operations department and the United Nations Children's Fund.",
];

function ItemList({ items }) {
    return (
        <ul className="space-y-2.5">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-200">
                        <HiOutlineChevronRight className="text-orange-500 group-hover:text-white transition-colors duration-200" size={11} />
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                </li>
            ))}
        </ul>
    );
}

function SubSection({ icon, title, items, delay = 0 }) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300">
            {/* Sub-header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-orange-50">
                <span className="text-orange-500">{icon}</span>
                <h4 className="text-sm font-bold text-gray-800 tracking-wide uppercase">{title}</h4>
            </div>
            <div className="px-6 py-5">
                <ItemList items={items} />
            </div>
        </div>
    );
}

export default function OurApproval2() {
    return (
        <section className="pb-14 sm:pb-20 bg-gray-50">
            <div className="container">

                {/* ── PROUD MOMENTS ── */}
                <div className="mb-14">
                    {/* Heading */}
                    <div className="text-center mb-8">
                         
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Proud Moments</h2>
                        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:border-orange-200 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-orange-50">
                            <RiGovernmentLine className="text-orange-500" size={18} />
                            <h4 className="text-sm font-bold text-gray-800 tracking-wide uppercase">Messages from Dignitaries</h4>
                        </div>
                        <div className="px-6 py-5">
                            <ItemList items={proudMoments} />
                        </div>
                    </div>
                </div>

                {/* ── APPRECIATION & AWARDS ── */}
                <div>
                    {/* Heading */}
                    <div className="text-center mb-8">
                       
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Appreciation & Awards</h2>
                        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
                    </div>

                    <div className="space-y-5">
                        <SubSection
                            icon={<BsAward size={18} />}
                            title="At National Level"
                            items={nationalAwards}
                        />
                        <SubSection
                            icon={<HiGlobeAlt size={18} />}
                            title="At Inter-National Level"
                            items={internationalAwards}
                        />
                        <SubSection
                            icon={<MdEmojiEvents size={18} />}
                            title="Conference at Inter-National Level"
                            items={internationalConferences}
                        />
                    </div>
                </div>

                {/* ── Footer note ── */}
                <div className="mt-10 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
                    <span className="w-10 h-px bg-gray-200" />
                    Recognitions awarded by national & international bodies
                    <span className="w-10 h-px bg-gray-200" />
                </div>

            </div>
        </section>
    );
}